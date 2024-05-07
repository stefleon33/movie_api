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

let movies = [
  {
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
      "Bio":"Born in a French refugee camp in 1959 to Hungarian parents, Frank Darabont immigrated to the US as an infant. Settling in Los Angeles, he attended Hollywood High School before diving into the film industry. Starting as a production assistant, Darabont climbed the ranks in the art department while nurturing his writing passion. His breakthrough came with \"The Shawshank Redemption\" (1994) and \"The Green Mile\" (1999), both Stephen King adaptations garnering Oscar nods. Leading Darkwoods Productions, he has projects lined up with Paramount Pictures.",
      "Birth":"January 28, 1959",
      "Death":"NA",
    },
    "ImageURL": "",
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
      "Bio":"Francis Ford Coppola, born 1939 in Detroit, Michigan, was raised in a creative Italian-American family. After drama studies at Hofstra University and filmmaking at UCLA, he worked with Roger Corman. Coppola's early collaborations and his second film earned him acclaim and an MFA. In 1969, he co-founded American Zoetrope. His seminal work, The Godfather (1972), brought him critical acclaim and Oscars for writing and producing. Coppola's diverse filmography includes The Conversation (1974) and Apocalypse Now (1979). Despite personal tragedy in 1986, he remains an influential and controversial figure in American cinema.",
      "Birth":"April 7, 1939",
      "Death":"NA",
    },
    "ImageURL":"",
    "Featured":false
  },
  {
    "Title": "The Dark Knight",
    "Description":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    //"Stars":["Christian Bale","Heath Ledger","Aaron Eckhart"],
    "Release date": "2008",
    "Rating": "PG-13",
    "Run time": "2h 32m",
    "Genre":{
      "Name":"Action", //"Crime","Drama"],
      "Description":"Action films are characterized by high-energy sequences of physical feats, stunts, and thrilling set pieces. They often feature intense fight scenes, car chases, explosions, and other adrenaline-pumping moments designed to keep viewers on the edge of their seats. Action films typically center around a heroic protagonist or group of protagonists facing off against formidable adversaries or overcoming challenging obstacles. While spectacle and excitement are paramount, action films may also explore themes of heroism, sacrifice, and redemption."
    },
    "Director":{
      "Name":"Christopher Nolan",
      "Bio" : "Sir Christopher Nolan CBE, celebrated for cerebral storytelling, began his cinematic journey at age seven. From \"Following\" (1998) to \"Tenet\" (2020), his films redefine genres. \"The Dark Knight\" (2008) and \"Inception\" (2010) stand as milestones. \"Oppenheimer\" (2023) earned his first Oscars. Knighted in 2024, he resides in Los Angeles with wife Dame Emma Thomas, overseeing Syncopy.",
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
      "Description":"Crime films revolve around the world of criminals, law enforcement, and the pursuit of justice. They often depict the planning and execution of criminal activities, the investigation of crimes, and the moral ambiguity that surrounds them. Themes such as power, betrayal, and morality are common, and protagonists may include detectives, criminals, or antiheroes. Crime films can range from gritty and realistic portrayals to stylish and stylized interpretations of the criminal underworld."
    },
    "Director":{
      "Name":"Francis Ford Coppola",
      "Bio":"Francis Ford Coppola, born 1939 in Detroit, Michigan, was raised in a creative Italian-American family. After drama studies at Hofstra University and filmmaking at UCLA, he worked with Roger Corman. Coppola's early collaborations and his second film earned him acclaim and an MFA. In 1969, he co-founded American Zoetrope. His seminal work, The Godfather (1972), brought him critical acclaim and Oscars for writing and producing. Coppola's diverse filmography includes The Conversation (1974) and Apocalypse Now (1979). Despite personal tragedy in 1986, he remains an influential and controversial figure in American cinema.",
      "Birth":"April 7, 1939",
      "Death":"NA",
    },
    "ImageURL":"",
    "Featured":false
  },
  {
    "Title": "12 Angry Men",
    "Description":"The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    //"Stars":["Henry Fonda","Lee J. Cobb", "Martin Balsam"],
    "Release date": "1957",
    "Rating": "Approved",
    "Run time": "1h 36m",
    "Genre":{
      "Name":"Crime", //"Drama"],
      "Description":"Crime films revolve around the world of criminals, law enforcement, and the pursuit of justice. They often depict the planning and execution of criminal activities, the investigation of crimes, and the moral ambiguity that surrounds them. Themes such as power, betrayal, and morality are common, and protagonists may include detectives, criminals, or antiheroes. Crime films can range from gritty and realistic portrayals to stylish and stylized interpretations of the criminal underworld."
    },
    "Director":{
      "Name":"Sidney Lumet",
      "Bio":"Baruch Lumet, born September 16, 1898, in Warsaw, Poland, was an actor and casting director. Known for roles in \"The Killer Shrews\" (1959) and \"The Pawnbroker\" (1964), he married Eugenia Wermus. Lumet passed away on February 8, 1992.",
      "Birth":"September 16, 1898",
      "Death":"February 8, 1992",
    },
    "ImageURL":"",
    "Featured":false
  },
  {
    "Title": "Schindler's List",
    "Description":"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    //"Stars":["Liam Neeson","Ralph Fiennes","Ben Kingsley"],
    "Release date": "1993",
    "Rating": "R",
    "Run time": "3h 15m",
    "Genre":{
      "Name":"Biography", //"Drama", "History",
      "Description":"Biography films tell the life story of a real person or historical figure, providing insight into their achievements, struggles, and impact on the world. These films aim to portray the subject with accuracy and authenticity, often drawing from biographical sources such as memoirs, interviews, and historical records. Biopics can cover a wide range of individuals, from political leaders and cultural icons to artists, athletes, and ordinary people who have made extraordinary contributions to society."
    },
    "Director":{
      "Name":"Steven Spielberg",
      "Bio":"Steven Spielberg, born 1946 in Cincinnati, Ohio, is a pioneering director, producer, and writer, renowned for defining popular cinema with Jaws (1975). Raised in New Jersey and California, he dropped out of college to pursue filmmaking. His early works include the notable short film Amblin' (1968). Spielberg's TV directing paved the way for his blockbuster career, with classics like E.T. the Extra-Terrestrial (1982) and Duel (1971).",
      "Birth":"December 18, 1946",
      "Death":"NA",
    },
    "ImageURL":"",
    "Featured":false
  },
  {
    "Title": "The Lord of the Rings: The Return of the King",
    "Description":"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    //"Stars":["Elijah Wood","Viggo Mortensen", "Orlando Bloom"],
    "Release date": "2003",
    "Rating": "PG-13",
    "Run time": "3h 21m",
    "Genre":{
      "Name":"Action",// "Adventure", "Drama",
      "Description":"Action films are characterized by high-energy sequences of physical feats, stunts, and thrilling set pieces. They often feature intense fight scenes, car chases, explosions, and other adrenaline-pumping moments designed to keep viewers on the edge of their seats. Action films typically center around a heroic protagonist or group of protagonists facing off against formidable adversaries or overcoming challenging obstacles. While spectacle and excitement are paramount, action films may also explore themes of heroism, sacrifice, and redemption."
    },
    "Director":{
      "Name":"Peter Jackson",
      "Bio":"Sir Peter Jackson made cinematic history with The Lord of the Rings trilogy, directing three major films simultaneously. The series amassed numerous awards, with The Return of the King receiving widespread acclaim. Following this success, Jackson helmed King Kong (2005), grossing over $500 million and winning three Oscars. His diverse filmography includes Heavenly Creatures (1994), The Frighteners, Meet the Feebles, and Braindead. He co-directed Forgotten Silver and produced The Lovely Bones and District 9. His recent projects include Mortal Engines (2018) and the acclaimed documentary They Shall Not Grow Old. Jackson's upcoming venture is The Beatles: Get Back (2021). Collaborating closely with partner Dame Fran Walsh, he shares writing and producing credits, shaping his remarkable legacy.",
      "Birth":"October 31, 1961",
      "Death":"NA",
    },
    "ImageURL":"",
    "Featured":false
  },
  {
    "Title": "Pulp Fiction",
    "Description":"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    //"Stars":["John Travolta","Uma Thurman", "Samuel L. Jackson"],
    "Release date": "1994",
    "Rating": "R",
    "Run time": "2h 34m",
    "Genre":{
      "Name":"Crime", //"Drama",
      "Description":"Crime films revolve around the world of criminals, law enforcement, and the pursuit of justice. They often depict the planning and execution of criminal activities, the investigation of crimes, and the moral ambiguity that surrounds them. Themes such as power, betrayal, and morality are common, and protagonists may include detectives, criminals, or antiheroes. Crime films can range from gritty and realistic portrayals to stylish and stylized interpretations of the criminal underworld."
    },
    "Director":{
      "Name":"Quentin Tarantino",
      "Bio": "Quentin Jerome Tarantino, born in Knoxville, Tennessee, moved to Torrance, California at age four. His directorial debut, Reservoir Dogs (1992), premiered at Sundance, followed by Pulp Fiction (1994), winning the Palme D'Or at Cannes. His films, including Jackie Brown (1997) and Inglourious Basterds (2009), earned both critical and commercial success.",
      "Birth":"March 27, 1963",
      "Death":"NA",
    },
    "ImageURL":"",
    "Featured":false
  },
  {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Description":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    //"Stars":["Elijah Wood","Ian McKellen", "Orlando Bloom"],
    "Release date": "2001",
    "Rating": "PG-13",
    "Run time": "2h 58m",
    "Genre":{
      "Name":"Action", //"Adventure", "Drama",
      "Description":"Action films are characterized by high-energy sequences of physical feats, stunts, and thrilling set pieces. They often feature intense fight scenes, car chases, explosions, and other adrenaline-pumping moments designed to keep viewers on the edge of their seats. Action films typically center around a heroic protagonist or group of protagonists facing off against formidable adversaries or overcoming challenging obstacles. While spectacle and excitement are paramount, action films may also explore themes of heroism, sacrifice, and redemption."
    },
    "Director":{
      "Name":"Peter Jackson",
      "Bio":"Sir Peter Jackson made cinematic history with The Lord of the Rings trilogy, directing three major films simultaneously. The series amassed numerous awards, with The Return of the King receiving widespread acclaim. Following this success, Jackson helmed King Kong (2005), grossing over $500 million and winning three Oscars. His diverse filmography includes Heavenly Creatures (1994), The Frighteners, Meet the Feebles, and Braindead. He co-directed Forgotten Silver and produced The Lovely Bones and District 9. His recent projects include Mortal Engines (2018) and the acclaimed documentary They Shall Not Grow Old. Jackson's upcoming venture is The Beatles: Get Back (2021). Collaborating closely with partner Dame Fran Walsh, he shares writing and producing credits, shaping his remarkable legacy.",
      "Birth":"October 31, 1961",
      "Death":"NA",
    },
    "ImageURL":"",
    "Featured":false
  },
  {
    "Title": "The Good, the Bad and the Ugly",
    "Description":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    //"Stars":["Clint Eastwood","Eli Wallach", "Lee Van Cleef"],
    "Release date": "1966",
    "Rating": "R",
    "Run time": "2h 58m",
    "Genre":{
      "Name":"Adventure", //"Western"
      "Description":"Adventure films take audiences on exhilarating journeys to exotic locales, uncharted territories, and fantastical worlds. They often feature daring protagonists embarking on quests, expeditions, or treasure hunts filled with danger, excitement, and discovery. Adventure films blend elements of action, exploration, and escapism, offering thrills and escapades that capture the imagination. Whether set in the jungles of South America, the high seas, or distant galaxies, adventure films invite viewers to join in the thrill of the unknown and the joy of exploration."
    },
    "Director":{
      "Name":"Sergio Leone",
      "Bio": "Sergio Leone, son of Italian pioneer Roberto Roberti and actress Bice Valerian, entered film in his teens. After assisting directors and writing, he debuted with \"The Last Days of Pompeii\" (1959).\"A Fistful of Dollars\" (1964) revolutionized Spaghetti Westerns, launching Clint Eastwood. His masterpieces include \"Once Upon a Time in the West\" (1968). Despite turning down \"The Godfather\" (1972), he pursued \"Once Upon a Time in America\" (1984). Cut short in 1989, Leone aimed for a Soviet co-production on the siege of Leningrad.",
      "Birth":"January 3, 1929",
      "Death":"April 30, 1989",
    },
    "ImageURL" : "./movie_covers/The_Good,_the_Bad_and_the_Ugly.jpg",
    "Featured":false
  },
];

//CREATE Allow new users to register
/* We'll expect JSON in this format
{
  ID: Integer,
  Username: String,
  Password: String,
  Email: String,
  Birthday: Date
}*/
app.post('/users', async (req, res) => {
  await Users.findOne({ Username: req.body.Username})
  .then((user) => {
    if (user) {
      return res.status(400).send(req.body.Username + 'already exists');
    } else {
      Users
        .create({
          Username: req.body.Username,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday
        })
        .then((user) => {res.status(201).json(user) })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
      })
    }
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send('Error: ' + error);
  });
});



//CREATE Allow users to add a movie to their list of favorites (showing only a text that a movie has been added)
app.post('/users/:id/:movieTitle', (req, res) =>{
  const { id, movieTitle } = req.params;
  const updatedUser = req.body;
  
  let user = users.find( user => user.id == id);
//UPDATE a user's info, by username
/* We’ll expect JSON in this format
{
  Username: String,
  (required)
  Password: String,
  (required)
  Email: String,
  (required)
  Birthday: Date
}*/
app.put('/users/:Username', async (req, res) => {
  await Users.findOneAndUpdate({ Username: req.params.Username }, { $set:
    {
      Username: req.body.Username,
      Password: req.body.Password,
      Email: req.body.Email,
      Birthday: req.body.Birthday
    }
  },
  { new: true }) // This line makes sure that the updated document is returned
  .then((updatedUser) => {
    res.json(updatedUser);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  })

  if (user) {
    user.favoriteMovies.push(movieTitle);
    res.status(200).send(`${movieTitle} has been added to user ${id}'s array.`);
  } else {
    res.status(400).send('No such user.')
  }
})


//DELETE Allow users to remove a movie from their list of favorites (showing only a text that a movie has been removed)
app.delete('/users/:Username/movies/:MovieID', async (req, res) => {
  await Users.findOneAndRemove({ Username: req.params.Username }, {
     $pull: { FavoriteMovies: req.params.MovieID }
   },
   { new: true }) // This line makes sure that the updated document is returned
  .then((updatedUser) => {
    res.json(updatedUser);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err); 
  });
});

//DELETE Allow existing users to deregister (showing only a text that a user email has been removed)
app.delete('/users/:Username', async (req, res) => {
  await Users.findOneAndRemove({ Username: req.params.Username })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.Username + ' was not found');
      } else {
        res.status(200).send(req.params.Username + ' was deleted.');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

//READ. Return a list of ALL movies to the user
app.get('/movies', async (req, res) => {
  await movies.find()
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});  

//READ Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user
app.get('/movies/:Title', async (req, res) => {
  await movies.findOne({ Title: req.params.Title })
  .then((movies) => {
    res.json(movies);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  });
});  

//READ Return data about a genre (description) by name/title
app.get('/movies/Genre/:genreName', async (req, res) => {
  await movies.findOne({ Genre: req.params. genreName})
  .then((movies) => {
    res.json(movies);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  });
});  

//READ Return data about a director (bio, birth year, death year) by name
app.get('/movies/director/:directorName', async (req, res) => {
  await movies.findOne({ Director: req.params. directorName})
  .then((movies) => {
    res.json(movies);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  });
});  


/* app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
}); */

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

/* app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); */