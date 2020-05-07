using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Neptune.Models;
using Neptune.Contracts.V1;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using Neptune.Data;

namespace Neptune.Controllers
{
  [Authorize]
  [Route("[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    private readonly DataContext _context;
    private readonly TokenValidationParameters _tokenValidationParameters;


    public UsersController(DataContext context, TokenValidationParameters tokenValidationParameters)
    {
      _context = context;
      _tokenValidationParameters = tokenValidationParameters;
    }

    [HttpGet]
    public async Task<IEnumerable<object>> GetUsers()
    {
      var users = await _context.Users.ToListAsync();

      return users.Select(user => Models.User.ToJson(user));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<object>> GetUser(string id)
    {
      var user = await _context.Users.Include(u => u.Decks).Where(u => u.Id == id).FirstAsync();

      if (user == null) return NotFound();

      return Models.User.ToJson(user);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutUser(string id, User user)
    {
      if (id != user.Id)
      {
        return BadRequest();
      }

      _context.Entry(user).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!UserExists(id))
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


    [HttpPost(ApiRoutes.Auth.Users)]
    public async Task<ActionResult<object>> PostUser([FromHeader] string Authorization)
    {

      var token = Authorization.Split("Bearer ")[1].ToString();

      var tokenPrincipal = GetPrincipalFromToken(token);

      var user_id = tokenPrincipal.Claims.Single(x => x.Type == "id").Value;

      var user = await _context.Users.FindAsync(user_id);

      if (user != null) return new
      {
        Errors = new[] { "user already exists" }
      };

      var new_user = new User { Id = user_id };

      _context.Users.Add(new_user);
      await _context.SaveChangesAsync();

      return Models.User.ToJson(new_user);
    }

    [HttpPost("{user_id}/decks")]
    public async Task<ActionResult<object>> PostDeck(Deck deck, long user_id)
    {
      User user = await _context.Users.FindAsync(user_id);
      if (user == null) return BadRequest("user not found");

      deck.User = user;

      _context.Decks.Add(deck);
      await _context.SaveChangesAsync();

      return Deck.ToJson(deck);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<User>> DeleteUser(string id)
    {
      var user = await _context.Users.FindAsync(id);
      if (user == null)
      {
        return NotFound();
      }

      _context.Users.Remove(user);
      await _context.SaveChangesAsync();

      return user;
    }

    private bool UserExists(string id)
    {
      return _context.Users.Any(u => u.Id == id);
    }

    private ClaimsPrincipal GetPrincipalFromToken(string token)
    {
      var tokenHandler = new JwtSecurityTokenHandler();

      try
      {
        var tokenValidationParameters = _tokenValidationParameters.Clone();
        tokenValidationParameters.ValidateLifetime = false;
        var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out var validatedToken);
        if (!IsJwtWithValidSecurityAlgorithm(validatedToken))
        {
          return null;
        }

        return principal;
      }
      catch
      {
        return null;
      }
    }

    private bool IsJwtWithValidSecurityAlgorithm(SecurityToken validatedToken)
    {
      return (validatedToken is JwtSecurityToken jwtSecurityToken) &&
             jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256,
                 StringComparison.InvariantCultureIgnoreCase);
    }

  }
}
