using System.ComponentModel.DataAnnotations;

namespace AuthServer.Main.Contracts.V1.Requests
{
  public class UserRegistrationRequest
  {
    [EmailAddress]
    public string Email { get; set; }
    public string Password { get; set; }
  }
}