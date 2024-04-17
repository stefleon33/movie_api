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
      "Bio":"Best known for his cerebral, often nonlinear, storytelling, acclaimed Academy Award winner writer/director/producer Sir Christopher Nolan CBE was born in London, England. Over the course of more than 25 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made and became one of the most celebrated filmmakers of modern cinema. At 7 years old, Nolan began making short films with his father's Super-8 camera. While studying English Literature at University College London, he shot 16-millimeter films at U.C.L.'s film society, where he learned the guerrilla techniques he would later use to make his first feature, Following (1998), on a budget of around $6,000. The noir thriller was recognized at a number of international film festivals prior to its theatrical release and gained Nolan enough credibility that he was able to gather substantial financing for his next film. Nolan's second film was Memento (2000), which he directed from his own screenplay based on a short story by his brother Jonathan Nolan. Starring Guy Pearce, the film brought Nolan numerous honors, including Academy Award and Golden Globe Award nominations for Best Original Screenplay. Nolan went on to direct the critically acclaimed psychological thriller, Insomnia (2002), starring Al Pacino, Robin Williams and Hilary Swank. The turning point in Nolan's career occurred when he was awarded the chance to revive the Batman franchise in 2005. In Batman Begins (2005), Nolan brought a level of gravitas back to the iconic hero, and his gritty, modern interpretation was greeted with praise from fans and critics alike. Before moving on to a Batman sequel, Nolan directed, co-wrote, and produced the mystery thriller The Prestige (2006), starring Christian Bale and Hugh Jackman as magicians whose obsessive rivalry leads to tragedy and murder. In 2008, Nolan directed, co-wrote, and produced The Dark Knight (2008). Co-written with by his brother Jonathan, the film went on to gross more than a billion dollars at the worldwide box office. Nolan was nominated for a Directors Guild of America (D.G.A.) Award, Writers Guild of America (W.G.A.) Award and Producers Guild of America (P.G.A.) Award, and the film also received eight Academy Award nominations. The film is widely considered one of the best comic book adaptations of all times, with Heath Ledger's performance as the Joker receiving an extremely high acclaim. Ledger posthumously became the first Academy Award winning performance in a Nolan film. In 2010, Nolan captivated audiences with the Sci-Fi thriller Inception (2010), starring Leonardo DiCaprio in the lead role, which he directed and produced from his own original screenplay that he worked on for almost a decade. The thought-provoking drama was a worldwide blockbuster, earning more than $800,000,000 and becoming one of the most discussed and debated films of the year, and of all times. Among its many honors, Inception received four Academy Awards and eight nominations, including Best Picture and Best Screenplay. Nolan was recognized by his peers with a W.G.A. Award accolade, as well as D.G.A. and P.G.A. Awards nominations for his work on the film. As one of the best-reviewed and highest-grossing movies of 2012, The Dark Knight Rises (2012) concluded Nolan's Batman trilogy. Due to his success rebooting the Batman character, Warner Bros. enlisted Nolan to produce their revamped Superman movie Man of Steel (2013), which opened in the summer of 2013. In 2014, Nolan directed, wrote, and produced the Science-Fiction epic Interstellar (2014), starring Matthew McConaughey, Anne Hathaway and Jessica Chastain. Paramount Pictures and Warner Bros. released the film on November 5, 2014, to positive reviews and strong box-office results, grossing over $670 million dollars worldwide. In July 2017, Nolan released his acclaimed War epic Dunkirk (2017), that earned him his first Best Director nomination at the Academy Awards, as well as winning an additional 3 Oscars. In 2020 he released his mind-bending Sci-Fi espionage thriller Tenet (2020) starring John David Washington in the lead role. Released during the COVID-19 pandemic, the movie grossed relatively less than Nolan's previous blockbusters, though it did do good numbers compared to other movies in that period of time. Hailed as Nolan's most complex film yet, the film was one of Nolan's less-acclaimed films at the time, yet slowly built a fan-base following in later years. In July 2023, Nolan released his highly acclaimed biographic drama Oppenheimer (2023) starring Nolan's frequent collaborator Cillian Murphy- in the lead role for the first time in a Nolan film. The movie was a cultural phenomenon that on top of grossing almost 1 billion dollars at the Worldwide Box office, also swept the 2023/2024 award-season and gave Nolan his first Oscars, BAFTAs, Golden Globes, D.G.A. and P.G.A. Awards, as well as a handful of regional critics-circles awards and a W.G.A. nomination. Cillian's performance as quantum physicist J. Robert Oppenheimer was highly acclaimed as well, and became the first lead performance in a Nolan film to win the Academy Award. During 2023, Nolan also received a fellowship from the British Film Institute (BFI). In March 2024, it was announced that Nolan is to be knighted by King Charles III and from now on will go by the title 'Sir Christopher Nolan'. Nolan resides in Los Angeles, California with his wife, Academy Award winner producer Dame Emma Thomas, and their children. Sir Nolan and Dame Thomas also have their own production company, Syncopy.",
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
      "Bio":"Francis Ford Coppola was born in 1939 in Detroit, Michigan, but grew up in a New York suburb in a creative, supportive Italian-American family. His father, Carmine Coppola, was a composer and musician. His mother, Italia Coppola (née Pennino), had been an actress. Francis Ford Coppola graduated with a degree in drama from Hofstra University, and did graduate work at UCLA in filmmaking. He was training as assistant with filmmaker Roger Corman, working in such capacities as sound-man, dialogue director, associate producer and, eventually, director of Dementia 13 (1963), Coppola's first feature film. During the next four years, Coppola was involved in a variety of script collaborations, including writing an adaptation of \"This Property is Condemned\" by Tennessee Williams (with Fred Coe and Edith Sommer), and screenplays for Is Paris Burning? (1966) and Patton (1970), the film for which Coppola won a Best Original Screenplay Academy Award. In 1966, Coppola's 2nd film brought him critical acclaim and a Master of Fine Arts degree. In 1969, Coppola and George Lucas established American Zoetrope, an independent film production company based in San Francisco. The company's first project was THX 1138 (1971), produced by Coppola and directed by Lucas. Coppola also produced the second film that Lucas directed, American Graffiti (1973), in 1973. This movie got five Academy Award nominations, including one for Best Picture. In 1971, Coppola's film The Godfather (1972) became one of the highest-grossing movies in history and brought him an Oscar for writing the screenplay with Mario Puzo The film was a Best Picture Academy Award-winner, and also brought Coppola a Best Director Oscar nomination. Following his work on the screenplay for The Great Gatsby (1974), Coppola's next film was The Conversation (1974), which was honored with the Golden Palm Award at the Cannes Film Festival, and brought Coppola Best Picture and Best Original Screenplay Oscar nominations. Also released that year, The Godfather Part II (1974), rivaled the success of The Godfather (1972), and won six Academy Awards, bringing Coppola Oscars as a producer, director and writer. Coppola then began work on his most ambitious film, Apocalypse Now (1979), a Vietnam War epic that was inspired by Joseph Conrad's Heart of Darkness (1993). Released in 1979, the acclaimed film won a Golden Palm Award at the Cannes Film Festival, and two Academy Awards. Also that year, Coppola executive produced the hit The Black Stallion (1979). With George Lucas, Coppola executive produced Kagemusha: The Shadow Warrior (1980), directed by Akira Kurosawa, and Mishima: A Life in Four Chapters (1985), directed by Paul Schrader and based on the life and writings of Yukio Mishima. Coppola also executive produced such films as The Escape Artist (1982), Hammett (1982) The Black Stallion Returns (1983), Barfly (1987), Wind (1992), The Secret Garden (1993), etc. He helped to make a star of his nephew, Nicolas Cage. Personal tragedy hit in 1986 when his son Gio died in a boating accident. Francis Ford Coppola is one of America's most erratic, energetic and controversial filmmakers.",
      "Birth":"April 7, 1939",
      "Death":"NA",
    },
    "ImageURL":"",
    "Featured":false
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