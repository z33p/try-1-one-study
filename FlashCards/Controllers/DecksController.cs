using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FlashCards.Models;

namespace FlashCards.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DecksController : ControllerBase
  {
    private readonly FlashCardsContext _context;

    public DecksController(FlashCardsContext context)
    {
      _context = context;
    }

    // GET: api/Decks
    [HttpGet]
    public async Task<IEnumerable<object>> GetDecks()
    {
      var decks = await _context.Decks.ToListAsync();

      return decks.Select(deck => Deck.ExcludeCards(deck));
    }

    // GET: api/Decks/5
    [HttpGet("{id}")]
    public async Task<ActionResult<object>> GetDeck(long id)
    {
      var deck = await _context.Decks.Include(d => d.Cards).Where(d => d.Id == id).FirstAsync();

      if (deck == null) return NotFound();

      return Deck.ToJson(deck);
    }

    // PUT: api/Decks/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutDeck(long id, Deck deck)
    {
      if (id != deck.Id)
      {
        return BadRequest();
      }

      _context.Entry(deck).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!DeckExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Decks
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<object>> PostDeck(Deck deck)
    {
      _context.Decks.Add(deck);
      await _context.SaveChangesAsync();

      return Deck.ToJson(deck);
    }

    [HttpPost("{deck_id}/cards")]
    public async Task<ActionResult<object>> PostCard(Card card, long deck_id)
    {
      Deck deck = await _context.Decks.FindAsync(deck_id);
      if (deck == null) return BadRequest("deck not found");

      card.Deck = deck;

      _context.Cards.Add(card);
      await _context.SaveChangesAsync();

      return Card.ToJson(card);
    }

    // DELETE: api/Decks/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Deck>> DeleteDeck(long id)
    {
      var deck = await _context.Decks.FindAsync(id);
      if (deck == null)
      {
        return NotFound();
      }

      _context.Decks.Remove(deck);
      await _context.SaveChangesAsync();

      return deck;
    }

    private bool DeckExists(long id)
    {
      return _context.Decks.Any(e => e.Id == id);
    }
  }
}
