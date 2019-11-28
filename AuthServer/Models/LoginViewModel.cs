using System.ComponentModel.DataAnnotations;

namespace AuthServer.Models
{
  public class LoginViewModel
  {
    [Required]
    public string UserName { get; set; }

    // [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }
  }
}