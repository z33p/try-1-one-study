FROM mcr.microsoft.com/dotnet/core/sdk:3.0 as build

ARG BUILDCONFIG=RELEASE
ARG VERSION=1.0.0

COPY ./FlashCards.Main/FlashCards.Main.csproj /build/

RUN dotnet restore ./build/FlashCards.Main.csproj

COPY ./FlashCards.Main/ ./build/

WORKDIR /build/
RUN dotnet publish ./FlashCards.Main.csproj -c $BUILDCONFIG -o out /p:Version=$VERSION

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /app

COPY --from=build /build/out .

CMD ["dotnet", "FlashCards.Main.dll"] 