using System.Threading.Tasks;
using AuthServer.Helpers;

namespace AuthServer.Services
{
  public interface IAuthService
  {
    Task<AuthResponse> RegisterAsync(string email, string password);

    Task<AuthResponse> LoginAsync(string email, string password);

    Task<AuthResponse> RefreshTokenAsync(string token, string refreshToken);
  }
}