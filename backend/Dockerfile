FROM mcr.microsoft.com/dotnet/core/sdk:3.0

WORKDIR /app

COPY backend.csproj ./

RUN dotnet restore backend.csproj

COPY . ./

CMD [ "dotnet", "run" ]

