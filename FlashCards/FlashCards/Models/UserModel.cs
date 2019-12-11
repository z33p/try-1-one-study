using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace FlashCards.Models
{
  public class User
  {
    [Required]
    public string Id { get; set; }
    public IEnumerable<Deck> Decks { get; set; }

    public static object ToJson(User user)
    {
      return new
      {
        Id = user.Id,
        Deck = user.Decks == null ? new object[0] : user.Decks.Select(deck => Deck.ToJson(deck)).ToArray()
      };
    }
  }
}