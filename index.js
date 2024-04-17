const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

  app.use(bodyParser.json());

let users =[
  {
    id: 1,
    name:"Kim",
    favoriteMovies: []
  },
  {
    id: 2,
    name:"Joe",
    favoriteMovies: ["The Shawshank Redemption"]
  },
]
    "Title": "The Shawshank Redemption",
    "Description":"Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    //"Stars":["Tim Robbins","Morgan Freeman","Bob Gunton"],
    "Release date": "1994",
    "Rating": "R",
    "Run time": "2h 22m",
    "Genre":{
      "Name":"Drama",
      "Description":"Drama films explore complex human emotions, relationships, and life experiences in a deeply engaging and thought-provoking manner. They often delve into personal struggles, conflicts, and moral dilemmas, presenting them in a way that resonates with the audience on an emotional level. Character development and storytelling are typically central elements, with themes ranging from love and loss to redemption and self-discovery."
    },
    "Director":{
      "Name":"Frank Darabont",
      "Bio":"Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution. Brought to America as an infant, he settled with his family in Los Angeles and attended Hollywood High School. His first job in movies was as a production assistant on the 1981 low-budget film, Hell Night (1981), starring Linda Blair. He spent the next six years working in the art department as a set dresser and in set construction while struggling to establish himself as a writer. His first produced writing credit (shared) was on the 1987 film, A Nightmare on Elm Street 3: Dream Warriors (1987), directed by Chuck Russell. Darabont is one of only six filmmakers in history with the unique distinction of having his first two feature films receive nominations for the Best Picture Academy Award: 1994's The Shawshank Redemption (1994) (with a total of seven nominations) and 1999's The Green Mile (1999) (four nominations). Darabont himself collected Oscar nominations for Best Adapted Screenplay for each film (both based on works by Stephen King), as well as nominations for both films from the Director's Guild of America, and a nomination from the Writers Guild of America for The Shawshank Redemption (1994). He won the Humanitas Prize, the PEN Center USA West Award, and the Scriptor Award for his screenplay of \"The Shawshank Redemption\". For \"The Green Mile\", he won the Broadcast Film Critics prize for his screenplay adaptation, and two People's Choice Awards in the Best Dramatic Film and Best Picture categories. The Majestic (2001), starring Jim Carrey, was released in December 2001. He executive-produced the thriller, Collateral (2004), for DreamWorks, with Michael Mann directing and Tom Cruise starring. Future produced-by projects include \"Way of the Rat\" at DreamWorks with Chuck Russell adapting and directing the CrossGen comic book series and \"Back Roads\", a Tawni O'Dell novel, also at DreamWorks, with Todd Field attached to direct. Darabont and his production company, \"Darkwoods Productions\", have an overall deal with Paramount Pictures.",
      "Birth":"January 28, 1959",
      "Death":"NA",
    },
    "ImageURL":"",
    "Featured":false
  },
  {
    "Title": "The Godfather",
    "Description":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    //"Stars":["Marlon Brando","Al Pacino","James Caan"],
    "Release date": "1972",
    "Rating": "R",
    "Run time": "2h 55m",
    "Genre":{
      "Name":"Crime", //"Drama"],
      "Description":"Crime films revolve around the world of criminals, law enforcement, and the pursuit of justice. They often depict the planning and execution of criminal activities, the investigation of crimes, and the moral ambiguity that surrounds them. Themes such as power, betrayal, and morality are common, and protagonists may include detectives, criminals, or antiheroes. Crime films can range from gritty and realistic portrayals to stylish and stylized interpretations of the criminal underworld."
    },
    "Director":{
      "Name":"Francis Ford Coppola",
      "Bio":"Francis Ford Coppola was born in 1939 in Detroit, Michigan, but grew up in a New York suburb in a creative, supportive Italian-American family. His father, Carmine Coppola, was a composer and musician. His mother, Italia Coppola (née Pennino), had been an actress. Francis Ford Coppola graduated with a degree in drama from Hofstra University, and did graduate work at UCLA in filmmaking. He was training as assistant with filmmaker Roger Corman, working in such capacities as sound-man, dialogue director, associate producer and, eventually, director of Dementia 13 (1963), Coppola's first feature film. During the next four years, Coppola was involved in a variety of script collaborations, including writing an adaptation of \"This Property is Condemned\" by Tennessee Williams (with Fred Coe and Edith Sommer), and screenplays for Is Paris Burning? (1966) and Patton (1970), the film for which Coppola won a Best Original Screenplay Academy Award. In 1966, Coppola's 2nd film brought him critical acclaim and a Master of Fine Arts degree. In 1969, Coppola and George Lucas established American Zoetrope, an independent film production company based in San Francisco. The company's first project was THX 1138 (1971), produced by Coppola and directed by Lucas. Coppola also produced the second film that Lucas directed, American Graffiti (1973), in 1973. This movie got five Academy Award nominations, including one for Best Picture. In 1971, Coppola's film The Godfather (1972) became one of the highest-grossing movies in history and brought him an Oscar for writing the screenplay with Mario Puzo The film was a Best Picture Academy Award-winner, and also brought Coppola a Best Director Oscar nomination. Following his work on the screenplay for The Great Gatsby (1974), Coppola's next film was The Conversation (1974), which was honored with the Golden Palm Award at the Cannes Film Festival, and brought Coppola Best Picture and Best Original Screenplay Oscar nominations. Also released that year, The Godfather Part II (1974), rivaled the success of The Godfather (1972), and won six Academy Awards, bringing Coppola Oscars as a producer, director and writer. Coppola then began work on his most ambitious film, Apocalypse Now (1979), a Vietnam War epic that was inspired by Joseph Conrad's Heart of Darkness (1993). Released in 1979, the acclaimed film won a Golden Palm Award at the Cannes Film Festival, and two Academy Awards. Also that year, Coppola executive produced the hit The Black Stallion (1979). With George Lucas, Coppola executive produced Kagemusha: The Shadow Warrior (1980), directed by Akira Kurosawa, and Mishima: A Life in Four Chapters (1985), directed by Paul Schrader and based on the life and writings of Yukio Mishima. Coppola also executive produced such films as The Escape Artist (1982), Hammett (1982) The Black Stallion Returns (1983), Barfly (1987), Wind (1992), The Secret Garden (1993), etc. He helped to make a star of his nephew, Nicolas Cage. Personal tragedy hit in 1986 when his son Gio died in a boating accident. Francis Ford Coppola is one of America's most erratic, energetic and controversial filmmakers.",
      "Birth":"April 7, 1939",
      "Death":"NA",
    },
    "ImageURL":"",
    "Featured":false
  },
  {
    title: 'The Dark Knight',
    releaseDate: '2008',
    rating: 'PG-13',
    runTime: '2h 32m'
      "Birth":"July 30, 1970",
      "Death":"NA",
    },
    "ImageURL":"",
    "Featured":false
  },
  {
    "Title": "The Godfather Part II",
    "Description":"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    //"Stars":["Al Pacino","Robert De Niro", "Robert Duvall"],
    "Release date": "1974",
    "Rating": "R",
    "Run time": "3h 22m",
    "Genre":{
      "Name":"Crime",// "Drama"],
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

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});