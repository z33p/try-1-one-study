using System.Threading.Tasks;
using AuthServer.Main.Helpers;

namespace AuthServer.Main.Services
{
  public interface IAuthService
  {
    Task<AuthResponse> RegisterAsync(string email, string password);

    Task<AuthResponse> LoginAsync(string email, string password);

    Task<AuthResponse> RefreshTokenAsync(string token, string refreshToken);
  }
}