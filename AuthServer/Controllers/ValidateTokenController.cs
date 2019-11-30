using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using AuthServer.Models;

namespace AuthServer.Controllers
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
