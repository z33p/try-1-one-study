using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using AuthServer.Main.Models;

namespace AuthServer.Main.Data
{
  public class AuthServerContext : IdentityDbContext
  {
    public AuthServerContext(DbContextOptions<AuthServerContext> options) : base(options)
    { }
  }
}