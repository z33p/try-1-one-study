using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FlashCards.Main.Models;

namespace FlashCards.Main.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class CardsController : ControllerBase
  {
    private readonly FlashCardsContext _context;

    public CardsController(FlashCardsContext context)
    {
      _context = context;
    }

    // GET: api/Cards
    [HttpGet]
    public async Task<IEnumerable<object>> GetCards()
    {
      var cards = await _context.Cards.ToListAsync();

      return cards.Select(card => Card.ExcludeDeck(card));
    }

    // GET: api/Cards/5
    [HttpGet("{id}")]
    public async Task<ActionResult<object>> GetCard(long id)
    {
      var card = await _context.Cards.Include(c => c.Deck).Where(c => c.Id == id).FirstAsync();

      if (card == null) return NotFound();

      return Card.ToJson(card);
    }

    // PUT: api/Cards/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCard(long id, Card card)
    {
      if (id != card.Id)
      {
        return BadRequest();
      }

      _context.Entry(card).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CardExists(id))
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

    // DELETE: api/Cards/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Card>> DeleteCard(long id)
    {
      var card = await _context.Cards.FindAsync(id);
      if (card == null)
      {
        return NotFound();
      }

      _context.Cards.Remove(card);
      await _context.SaveChangesAsync();

      return card;
    }

    private bool CardExists(long id)
    {
      return _context.Cards.Any(e => e.Id == id);
    }
  }
}
