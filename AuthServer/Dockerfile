FROM mcr.microsoft.com/dotnet/core/sdk:3.0 as build

ARG BUILDCONFIG=RELEASE
ARG VERSION=1.0.0

COPY ./AuthServer.Main/AuthServer.Main.csproj /build/

RUN dotnet restore ./build/AuthServer.Main.csproj

COPY ./AuthServer.Main/ ./build/

WORKDIR /build/
RUN dotnet publish ./AuthServer.Main.csproj -c $BUILDCONFIG -o out /p:Version=$VERSION

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /app

COPY --from=build /build/out .

CMD ["dotnet", "AuthServer.Main.dll"] 