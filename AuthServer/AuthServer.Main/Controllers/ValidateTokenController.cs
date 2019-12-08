using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AuthServer.Main.Models;

namespace AuthServer.Main.Controllers
{
  [Authorize]
  [ApiController]
  [Route("[controller]")]
  public class ValidateTokenController : ControllerBase
  {

    [HttpGet]
    public IActionResult Validate()
    {
      return Ok("O token é valido");
    }
  }
}
