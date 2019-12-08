using System.Linq;
using System.Collections.Generic;

namespace FlashCards.Main.Models
{
  public class Deck
  {
    public long Id { get; set; }
    public string Title { get; set; }
    public IEnumerable<Card> Cards { get; set; }

    // Return a deck without cards
    public static object ExcludeCards(Deck deck)
    {
      return new
      {
        Id = deck.Id,
        Title = deck.Title
      };
    }

    public static object ToJson(Deck deck)
    {
      return new
      {
        Id = deck.Id,
        Title = deck.Title,
        Cards = deck.Cards == null ? new object[0] : deck.Cards.Select(card => Card.ExcludeDeck(card)).ToArray()
      };
    }
  }
  public class Card
  {
    public long Id { get; set; }
    public string Title { get; set; }
    public string Detail { get; set; }
    public Deck Deck { get; set; }
    public long DeckId { get; set; }

    public static object ExcludeDeck(Card card)
    {
      return new
      {
        Id = card.Id,
        Title = card.Title,
        Detail = card.Detail
      };

    }
    public static object ToJson(Card card)
    {
      /** Exclude cards in deck to avoid recursion in json serialization */
      return new
      {
        Id = card.Id,
        Title = card.Title,
        Detail = card.Detail,
        DeckId = card.DeckId
        // , Deck = Deck.ExcludeCards(card.Deck)
      };
    }
  }
}