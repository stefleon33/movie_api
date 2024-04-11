const express = require('express'),
  morgan = require('morgan'),

const app = express();


let topMovies = [
  {
    title: 'The Shawshank Redemption',
    releaseDate: '1994',
    rating: 'R',
    runTime: '2h 22m'
  },
  {
    title: 'The Godfather',
    releaseDate: '1972',
    rating: 'R',
    runTime: '2h 55m'
  },
  {
    title: 'The Dark Knight',
    releaseDate: '2008',
    rating: 'PG-13',
    runTime: '2h 32m'
  },
  {
    title: 'The Godfather Part II',
    releaseDate: '1974',
    rating: 'R',
    runTime: '3h 22m'
  },
  {
    title: '12 Angry Men',
    releaseDate: '1957',
    rating: 'Approved',
    runTime: '1h 36m'
  },
  {
    title: 'Schindler\'s List',
    releaseDate: '1993',
    rating: 'R',
    runTime: '3h 15m'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    releaseDate: '2003',
    rating: 'PG-13',
    runTime: '3h 21m'
  },
  {
    title: 'Pulp Fiction',
    releaseDate: '1994',
    rating: 'R',
    runTime: '2h 34m'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    releaseDate: '2001',
    rating: 'PG-13',
    runTime: '2h 58m'
  },
  {
    title: 'The Good, the Bad and the Ugly',
    releaseDate: '1966',
    rating: 'R',
    runTime: '2h 58m'
  },
];

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});