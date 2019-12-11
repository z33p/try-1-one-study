using Microsoft.EntityFrameworkCore;
using FlashCards.Models;

namespace FlashCards.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    { }

    public DbSet<Card> Cards { get; set; }
    public DbSet<Deck> Decks { get; set; }
    public DbSet<User> Users { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      // configures one-to-many relationship
      modelBuilder.Entity<User>()
        .HasMany(u => u.Decks)
        .WithOne(d => d.User)
        .IsRequired()
        .OnDelete(DeleteBehavior.Cascade);

      modelBuilder.Entity<Deck>()
        .HasMany(d => d.Cards)
        .WithOne(c => c.Deck)
        .IsRequired()
        .OnDelete(DeleteBehavior.Cascade);
    }
  }
}
