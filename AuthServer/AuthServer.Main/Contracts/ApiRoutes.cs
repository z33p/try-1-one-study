namespace AuthServer.Main.Contracts.V1
{
  public static class ApiRoutes
  {
    //   public const string Root = "api";

    //   public const string Version = "v1";

    //   public const string Base = Root + "/" + Version;

    public static class Identity
    {
      public const string Login = "/auth/login";
      public const string Register = "/auth/register";
      public const string Refresh = "/auth/refresh";
    }
  }
}