FROM mcr.microsoft.com/dotnet/core/sdk:3.0 as build

ARG BUILDCONFIG=RELEASE
ARG VERSION=1.0.0

COPY ./FlashCards/FlashCards.csproj /build/

RUN dotnet restore ./build/FlashCards.csproj

COPY ./FlashCards/ ./build/

WORKDIR /build/
RUN dotnet publish ./FlashCards.csproj -c $BUILDCONFIG -o out /p:Version=$VERSION

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /app

COPY --from=build /build/out .

CMD ["dotnet", "FlashCards.dll"] 