using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using AuthServer.Models;
using AuthServer.Helpers;

namespace AuthServer.Services
{
  public interface IUserService
  {
    User Authenticate(string username, string password);
    IEnumerable<User> GetAll();
  }

  public class UserService : IUserService
  {
    // users hardcoded for simplicity, store in a db with hashed passwords in production applications
    private List<User> _users = new List<User>
        {
            new User { Id = 1, FirstName = "Test", LastName = "User", Username = "test", Password = "test" },
            new User { Id = 2, FirstName = "Test2", LastName = "User", Username = "test2", Password = "test2" },

        };

    private readonly AppSettings _appSettings;

    public UserService(IOptions<AppSettings> appSettings)
    {
      _appSettings = appSettings.Value;
    }

    public User Authenticate(string username, string password)
    {
      var user = _users.SingleOrDefault(x => x.Username == username && x.Password == password);

      // return null if user not found
      if (user == null)
        return null;

      // authentication successful so generate jwt token
      var tokenHandler = new JwtSecurityTokenHandler();
      // var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
      var key = Encoding.ASCII.GetBytes("###### Eu sou o Douglas #######");
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new Claim[]
          {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
          }),
        Issuer = "z33p@AuthServer",
        Audience = "https://localhost",
        Expires = DateTime.UtcNow.AddHours(2),
        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
      };
      var token = tokenHandler.CreateToken(tokenDescriptor);
      user.Token = tokenHandler.WriteToken(token);

      return user.WithoutPassword();
    }

    public IEnumerable<User> GetAll()
    {
      return _users.WithoutPasswords();
    }
  }
}