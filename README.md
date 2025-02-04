# Streamphony ASP.NET API

## Abstract

This RESTful project adheres to clean architecture.
Developed with [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) for a laboratory work.

## Prerequisites
1. .NET SDK: The project requires the .NET 5.0 SDK or later. Check your installed version with `dotnet --version`. If you need to install it or update it, you can download the SDK from [the official .NET download page](https://dotnet.microsoft.com/download).

2. **Docker**: Since the project uses SQL Server running in a Docker container, Docker Desktop must be installed on your machine. Docker is used to create, manage, and run containers on Windows, macOS, and Linux. Download Docker Desktop from [the official Docker website](https://www.docker.com/).

3. **Entity Framework Core CLI**: The EF Core CLI is used for database migrations. It's included with the .NET SDK, but you can ensure it's installed with the command `dotnet ef`.

## Configuration

Run Azurite:
```bash
azurite --silent --location c:\azurite --debug c:\azurite\debug.log
```

1. Set up the SQL Server with Docker, by pulling the image and starting the container with the following commands:
```bash
docker pull mcr.microsoft.com/mssql/server

docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=YourStrong(!)Password" -p 1433:1433 --name sqlserver -h sqlserver -d mcr.microsoft.com/mssql/server
```

* `mcr.microsoft.com/mssql/server`: Specifies the Docker image to use.
* `-e "ACCEPT_EULA=Y"`: Accepting the End User License Agreement for SQL Server (required to run the container).
* `-e "SA_PASSWORD=YourStrong(!)Password"`: Sets an environment variable for the SA (System Administrator) account password of SQL Server. Replace `YourStrong(!)Password` with a strong password.
* `-p 1433:1433`: Maps port 1433 of the container to port 1433 on the host machine. 
* `--name sqlserver -h sqlserver`: Assigns the name `sqlserver` and hostname `sqlserver` to the new container.
* `-d`: Runs the container in detached mode, meaning the container runs in the background.

Update the `appsettings.json` with your data:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost,1433;Database=streamphonydb;User Id=sa;Password=YourStrong(!)Password;"
}
```

2. The migrations are already generated, therefore you can update the database only by running the following command from the `Streamphony.WebAPI` folder:
```bash
dotnet ef database update --project ../Streamphony.Infrastructure/Streamphony.Infrastructure.csproj --startup-project .
```

3. Use the `dotnet run` command from the `Streamphony.WebAPI` folder to start the application.

## Migration Commands
You can generate the migrations from `Streamphony.WebAPI` by using the following commands:
```bash
dotnet ef migrations add InitialCreate -o Persistence/Migrations --project ../Streamphony.Infrastructure/Streamphony.Infrastructure.csproj --startup-project .
```

And in order to drop the Database, run:
```bash
dotnet ef database drop --project ../Streamphony.Infrastructure/Streamphony.Infrastructure.csproj --startup-project .
```