## The Movie Database Application

---

The movie database applicaton allows users to browse through movie database provided by TheMovieDB. The application allows users to search for a specific movie by it's title. Users can also view details of each movies which are displayed in the form of a modal.

## Components

---

The application consists of the given components:-

1. Home - The Home component consists of the application name/title (The Movie Database) on the top, a search box below it which the user can use to search a specific movie based on title and below it, the movies are displayed using another component-Popular. If the user searches for a movie, the movie is rendered using another component-Search.

2. Popular - The Popular component fetches the data from the TMDB API and passes it to the MovieGrid component.

3. Serach - The Search component fetches and filters the data from the TMDB API based on the search term provided by the user and the filtered data is passed to the MovieGrid component.

4. MovieGrid - The MovieGrid component displays the fetched data from the TMDB and is displayed in the form of cards, with the movie image, title, release date, a short description and a details button, in a grid format.

5. Details - The Details component is triggered when the details button is clicked on the MovieGrid component. The component displays the title, image, language as well as a detailed description of the movie and a close button to close the modal in which the details are displayed.

## Features

---

The highlighting feature of this application is that a user can search for a specific movie. The application also allows the user to view details of any movies. The Home page of the application displays the current popular movies from the TMDB database.

## How to run the Application:

---

1. Change the directory into FRONTEND-TEST folder:

   > cd FRONTEND-TEST

2. Install the necessary dependencies using node:

   > npm install

3. To run the application, use the comman 'run dev':

   > npm run dev

4. The application will now be running on Port no:3001 in your device local server. Open your browser and navigate to the url 127.0.0.1:3001 or localhost:3001
