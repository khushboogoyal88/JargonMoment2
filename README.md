# JargonMoment2


Overview- A Tinder like app to connect the job hunters with the companies looking for talent. Second version fo Jargon Moment which was created using MERN tech stack.
In this application- Angular, Dotnet ENtity Framework, SQL is used.


JargonMoment2 is a web application built with [Angular](https://angular.io/) and [ASP.NET Core](https://dotnet.microsoft.com/apps/aspnet). It provides a platform for employers and emplyees to connect with each other and find potential matches.

JargonMoment(original) was a School project with same idea but technology used was React with Redux, Node and Express and MongoDB.

## Features

- User registration and authentication
- Profile creation and management
- Matching algorithm to find potential matches
- Real-time messaging between users- Photo uploading and gallery management

## Installation

To run the JargonMoment2 locally on your machine, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/khushboogoyal88/JargonMoment2.git
Install the necessary dependencies for both the Angular frontend and ASP.NET Core backend. Navigate to the JargonMoment2.API and client directories and run the following command in each:

shell
Copy code
npm install
Start the backend server by running the following command in the JargonMoment2.API directory:

shell
Copy code
dotnet run
Start the frontend development server by running the following command in the client directory:

shell
Copy code
ng serve
The application will be accessible at http://localhost:4200/.

Set up the database connection string in the appsettings.json file located in the JargonMoment2.API directory.

json
Copy code
"ConnectionStrings": {
  "DefaultConnection": "YOUR_CONNECTION_STRING"
}
Replace YOUR_CONNECTION_STRING with the appropriate connection string for your database.

Run the database migrations to create the necessary tables. In the JargonMoment2.API directory, run the following command:

shell
Copy code
dotnet ef database update
This will apply the migrations to your database.

You're all set! Open your web browser and navigate to http://localhost:4200/ to access the JargonMoment2.

Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these guidelines:

Fork the repository
Create a new branch for your feature or bug fix
Commit your changes with descriptive commit messages
Push your changes to your forked repository
Submit a pull request to the main branch of the original repository

