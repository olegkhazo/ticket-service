# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


<!-- 

Technical Description

Create a web application for cinema (Vue.js OR React.js OR Javascript).
Application should provide next functionality for users: get list of all movies, see all sessions at the cinema, get movie info, find movie by name or/and genres, book ticket on certain movie's session.
Feel free to implement your own UI design.

API

API domain: https://cinema-api-test.y-media.io/v1

Get all movies :

HTTP GET 
/movies 

Search for movie:

HTTP GET 
/movies?movie_id={id}&name={name}&genres={genres}

All search parameters are optional
Movie genres :
ACTION: 0
ADVENTURES: 1
COMEDY: 2
DRAMA: 3
HORROR: 4
WESTERNS: 5



Get movies sessions:

HTTP GET 
/movieShows 
OR
/movieShows?movie_id={id}







Book ticket:

	Check for free places:

HTTP GET 
	/showPlaces?movie_id={id}&daytime={daytime}&showdate={showdate}
	/showPlaces?movie_id=61&daytime=10:50&showdate=2021-06-27

Book place:

HTTP POST
/bookPlace
{
  "movie_id": {id},
  "row": {int},
  "seat": {int},
  "showdate": {string},
  "daytime": {string}
}



Request:
{
  "movie_id": 61,
  "row": 9,
  "seat": 8,
  "showdate": "2021-06-27",
  "daytime": "10:50"
}

Response:
{
    "error_code": 0,
    "error_message": "no errors",
    "data": {
        "movie_id": "61",
        "row": "9",
        "seat": "8",
        "showdate": "2021-06-27",
        "daytime": "10:50",
        "ticketkey": "2a8cfbd5a4945f52e92c6b969f440192"
    }
}


 -->