using System.Collections.Generic;

namespace AuthServer.Main.Helpers
{
  public class AuthResponse
  {
    public string Token { get; set; }
    public string RefreshToken { get; set; }
    public bool Success { get; set; }
    public IEnumerable<string> Errors { get; set; }
  }
}