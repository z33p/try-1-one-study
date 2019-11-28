using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using AuthServer.Models;

namespace AuthServer.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class AuthController : Controller
  {
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;

    public AuthController(
      UserManager<IdentityUser> userManager,
      SignInManager<IdentityUser> signInManager
    )
    {
      _userManager = userManager;
      _signInManager = signInManager;
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


      // TODO: Here should return the token
      return Ok();
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

      // return Ok(await GerarJwt(registerUser.Email));
      return Ok();
    }
  }
}