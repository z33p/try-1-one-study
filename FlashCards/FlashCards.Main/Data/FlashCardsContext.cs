using Microsoft.EntityFrameworkCore;
using FlashCards.Main.Models;

public class FlashCardsContext : DbContext
{
  public DbSet<Card> Cards { get; set; }
  public DbSet<Deck> Decks { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    optionsBuilder.UseNpgsql("Host=flashcards_db;Database=postgres;Username=postgres;Password=postgres");
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    // configures one-to-many relationship
    modelBuilder.Entity<Deck>()
      .HasMany(d => d.Cards)
      .WithOne(c => c.Deck)
      .IsRequired()
      .OnDelete(DeleteBehavior.Cascade);
  }
}
