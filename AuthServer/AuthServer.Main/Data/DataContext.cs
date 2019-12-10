using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using AuthServer.Main.Models;

namespace AuthServer.Main.Data
{
  public class DataContext : IdentityDbContext
  {
    public DataContext()
    { }

    public DbSet<RefreshToken> RefreshTokens { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseNpgsql("Host=auth_server_db;Database=postgres;Username=postgres;Password=postgres");
    }
  }
}