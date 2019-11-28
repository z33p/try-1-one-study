FROM mcr.microsoft.com/dotnet/core/sdk:3.0 as build

ARG BUILDCONFIG=RELEASE
ARG VERSION=1.0.0

COPY backend.csproj /build/

RUN dotnet restore ./build/backend.csproj

COPY . ./build/
WORKDIR /build/
RUN dotnet publish ./backend.csproj -c $BUILDCONFIG -o out /p:Version=$VERSION

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /app

COPY --from=build /build/out .

CMD ["dotnet", "backend.dll"] 