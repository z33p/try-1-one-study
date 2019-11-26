using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
  public class BackendContext : IdentityDbContext
  {
    public BackendContext(DbContextOptions<BackendContext> options) : base(options)
    { }

    public DbSet<VirtualDoc> virtual_docs { get; set; }
    // public DbSet<Task> tasks { get; set; }
    // public DbSet<Board> boards { get; set; }
    // public DbSet<Card> cards { get; set; }
    // public DbSet<Deck> decks { get; set; }
    // public DbSet<Deck_of_Cards> deck_of_cards { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);

      //   // One to Many
      //   modelBuilder.Entity<Board>()
      //       .HasMany(b => b.Task)
      //       .WithOne(t => t.Board)
      //       .OnDelete(DeleteBehavior.Cascade);

      //   // Many to Many
      //   modelBuilder.Entity<Deck_of_Cards>()
      // .HasKey(dc => new { dc.card_id, dc.deck_id });
      //   modelBuilder.Entity<Deck_of_Cards>()
      //       .HasOne(dc => dc.Card)
      //       .WithMany(d => d.deck_of_cards)
      //       .HasForeignKey(dc => dc.card_id);
      //   modelBuilder.Entity<Deck_of_Cards>()
      //       .HasOne(dc => dc.Deck)
      //       .WithMany(d => d.deck_of_cards)
      //       .HasForeignKey(dc => dc.deck_id);
    }
  }
}
