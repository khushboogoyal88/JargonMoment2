# JargonMoment2


Overview- A Tinder like web application built with [Angular](https://angular.io/) and [ASP.NET Core](https://dotnet.microsoft.com/apps/aspnet) and MYSQL. It provides a platform for employers and emplyees to connect with each other and find potential matches for their reqiúirements.

JargonMoment(original) was a School project with same idea but technology used was React with Redux, Node and Express and MongoDB.

## Features

- User registration and authentication
- Profile creation: Users can create and update their profiles, including adding profile pictures and providing job description.
- Matching algorithm: The app provides a matching algorithm that suggests potential matches based on user skills and preferences factors.
- Search and filtering: Users can search for matches using various filters, such as age, location, and interests.
- Messaging system: Users can send messages to other users and engage in conversations within the app.
- Notifications: Users receive notifications for new messages, matches, and other relevant activities.
- Privacy settings: Users can manage their privacy settings, such as controlling who can view their profile and message them.

## Installation

To run the JargonMoment2 locally on your machine, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/khushboogoyal88/JargonMoment2.git
   
2. Install the necessary dependencies for both the Angular frontend and ASP.NET Core backend. Navigate to the JargonMoment2.API and client directories and run the following command in each:

   ```shell
   npm install
  
3. Start the backend server by running the following command in the JargonMoment2.API directory:
 
   ```shell
    dotnet run
  
4. Start the frontend development server by running the following command in the client directory:
 
   ```shell
    ng serve
  
 The application will be accessible at http://localhost:4200/.


5. Set up the database connection string in the appsettings.json file located in the JargonMoment2.API directory.

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "YOUR_CONNECTION_STRING"
   }

6. Replace YOUR_CONNECTION_STRING with the appropriate connection string for your database.

7. Run the database migrations to create the necessary tables. In the JargonMoment2.API directory, run the following command:

   ```shell
    dotnet ef database update
    
 This will apply the migrations to your database.


### You're all set! Open your web browser and navigate to http://localhost:4200/ to access the JargonMoment2.

### Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these guidelines:
- Fork the repository
- Create a new branch for your feature or bug fix
- Commit your changes with descriptive commit messages
- Push your changes to your forked repository
- Submit a pull request to the main branch of the original repository

