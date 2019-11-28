using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using AuthServer.Models;

namespace AuthServer.Data
{
  public class AuthServerContext : IdentityDbContext
  {
    public AuthServerContext(DbContextOptions<AuthServerContext> options) : base(options)
    { }
  }
}