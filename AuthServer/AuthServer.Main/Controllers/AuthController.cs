using System;
using System.Linq;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using AuthServer.Main.Models;
using AuthServer.Main.Helpers;

namespace AuthServer.Main.Controllers
{
  [ApiController]
  [Route("/")]
  public class AuthController : Controller
  {
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly AppSettings _appSettings;

    public AuthController(
      UserManager<IdentityUser> userManager,
      SignInManager<IdentityUser> signInManager,
      IOptions<AppSettings> appSettings
    )
    {
      _userManager = userManager;
      _signInManager = signInManager;
      _appSettings = appSettings.Value;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginViewModel client)
    {
      if (!ModelState.IsValid) return BadRequest(ModelState.Values.SelectMany(e => e.Errors));

      // login functionality
      var user = await _userManager.FindByNameAsync(client.UserName);
      if (user == null) return BadRequest("Usuário não existe");

      var signInResult = await _signInManager.PasswordSignInAsync(user, client.Password, false, true);

      if (!signInResult.Succeeded)
        return BadRequest("Usuário ou senha inválidos");

      return Ok(new Token
      {
        token = await generateToken(user, client.Email)
      });
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterViewModel client)
    {
      var user = new IdentityUser
      {
        UserName = client.UserName,
        Email = "",
      };

      var result = await _userManager.CreateAsync(user, client.Password);

      if (!result.Succeeded) return BadRequest(result.Errors);

      await _signInManager.SignInAsync(user, false);

      return Ok(new Token
      {
        token = await generateToken(user, client.Email)
      });
    }

    public async Task<string> generateToken(IdentityUser user, string email)
    {
      var identityClaims = new ClaimsIdentity();
      identityClaims.AddClaims(await _userManager.GetClaimsAsync(user));

      // authentication successful so generate jwt token
      var tokenHandler = new JwtSecurityTokenHandler();

      var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(
          new Claim[]{
            new Claim(ClaimTypes.Name, user.Id)
            }
          ),
        Issuer = _appSettings.Issuer,
        Audience = _appSettings.Audience,
        Expires = DateTime.UtcNow.AddHours(Convert.ToDouble(_appSettings.ExpiresInHours)),
        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
      };

      return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
    }
  }
}
