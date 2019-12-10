using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AuthServer.Main.Contracts.V1;
using AuthServer.Main.Contracts.V1.Requests;
using AuthServer.Main.Contracts.V1.Responses;
using AuthServer.Main.Services;
using Microsoft.AspNetCore.Identity;
using AuthServer.Main.Helpers;
using Microsoft.IdentityModel.Tokens;
using AuthServer.Main.Data;
using Microsoft.Extensions.Options;

namespace AuthServer.Main.Controllers.V1
{
  public class AuthController : Controller
  {
    private readonly UserManager<IdentityUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly IOptions<AppSettings> _appSettings;
    private readonly DataContext _context;
    private readonly AuthService _authService;

    public AuthController(UserManager<IdentityUser> userManager, IOptions<AppSettings> appSettings, DataContext context, RoleManager<IdentityRole> roleManager)
    {
      _userManager = userManager;
      _appSettings = appSettings;
      _context = context;
      _roleManager = roleManager;
      _authService = new AuthService(_userManager, _appSettings, _context, _roleManager);
    }


    [HttpPost(ApiRoutes.Identity.Register)]
    public async Task<IActionResult> Register([FromBody] UserRegistrationRequest request)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(new AuthFailedResponse
        {
          Errors = ModelState.Values.SelectMany(x => x.Errors.Select(xx => xx.ErrorMessage))
        });
      }

      var authResponse = await _authService.RegisterAsync(request.Email, request.Password);

      if (!authResponse.Success)
      {
        return BadRequest(new AuthFailedResponse
        {
          Errors = authResponse.Errors
        });
      }

      return Ok(new AuthSuccessResponse
      {
        Token = authResponse.Token,
        RefreshToken = authResponse.RefreshToken
      });
    }

    [HttpPost(ApiRoutes.Identity.Login)]
    public async Task<IActionResult> Login([FromBody] UserLoginRequest request)
    {
      var authResponse = await _authService.LoginAsync(request.Email, request.Password);

      if (!authResponse.Success)
      {
        return BadRequest(new AuthFailedResponse
        {
          Errors = authResponse.Errors
        });
      }

      return Ok(new AuthSuccessResponse
      {
        Token = authResponse.Token,
        RefreshToken = authResponse.RefreshToken
      });
    }

    [HttpPost(ApiRoutes.Identity.Refresh)]
    public async Task<IActionResult> Refresh([FromBody] RefreshTokenRequest request)
    {
      var authResponse = await _authService.RefreshTokenAsync(request.Token, request.RefreshToken);

      if (!authResponse.Success)
      {
        return BadRequest(new AuthFailedResponse
        {
          Errors = authResponse.Errors
        });
      }

      return Ok(new AuthSuccessResponse
      {
        Token = authResponse.Token,
        RefreshToken = authResponse.RefreshToken
      });
    }
  }
}