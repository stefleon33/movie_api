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
      "Bio":"Baruch Lumet was born on September 16, 1898 in Warsaw, Poland, Russian Empire [now Warsaw, Mazowieckie, Poland]. He was an actor and casting director, known for The Killer Shrews (1959), Everything You Always Wanted to Know About Sex * But Were Afraid to Ask (1972) and The Pawnbroker (1964). He was married to Eugenia Wermus. He died on February 8, 1992.",
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
      "Bio":"One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Jaws (1975), and he has done more to define popular film-making since the mid-1970s than anyone else. Steven Allan Spielberg was born in 1946 in Cincinnati, Ohio, to Leah Frances (Posner), a concert pianist and restaurateur, and Arnold Spielberg, an electrical engineer who worked in computer development. His parents were both born to Russian Jewish immigrant families. Steven spent his younger years in Haddon Township, New Jersey, Phoenix, Arizona, and later Saratoga, California. He went to California State University Long Beach, but dropped out to pursue his entertainment career. Among his early directing efforts were Battle Squad (1961), which combined World War II footage with footage of an airplane on the ground that he makes you believe is moving. He also directed Escape to Nowhere (1961), which featured children as World War Two soldiers, including his sister Anne Spielberg, and The Last Gun (1959), a western. All of these were short films. The next couple of years, Spielberg directed a couple of movies that would portend his future career in movies. In 1964, he directed Firelight (1964), a movie about aliens invading a small town. In 1967, he directed Slipstream (1967), which was unfinished. However, in 1968, he directed Amblin' (1968), which featured the desert prominently, and not the first of his movies in which the desert would feature. Amblin' also became the name of his production company, which turned out such classics as E.T. the Extra-Terrestrial (1982). Spielberg had a unique and classic early directing project, Duel (1971), with Dennis Weaver. In the early 1970s, Spielberg was working on TV, directing among others such series as Rod Serling's Night Gallery (1969), Marcus Welby, M.D. (1969) and Murder by the Book (1971). All of his work in television and short films, as well as his directing projects, were just a hint of the wellspring of talent that would dazzle audiences all over the world.",
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
      "Bio":"Sir Peter Jackson made history with The Lord of the Rings trilogy, becoming the first person to direct three major feature films simultaneously. The Fellowship of the Ring, The Two Towers and The Return of the King were nominated for and collected a slew of awards from around the globe, with The Return of the King receiving his most impressive collection of awards. This included three Academy Awards® (Best Adapted Screenplay, Best Director and Best Picture), two Golden Globes (Best Director and Best Motion Picture-Drama), three BAFTAs (Best Adapted Screenplay, Best Film and Viewers' Choice), a Directors Guild Award, a Producers Guild Award and a New York Film Critics Circle Award. As a follow up to The Lord of the Rings trilogy, in 2005, Jackson directed, wrote, and produced King Kong, for Universal Pictures. The film grossed over $500 million and won three Oscars®. Jackson previously received widespread acclaim for his 1994 feature Heavenly Creatures, which received an Academy Award® nomination for Best Screenplay. Other film credits include The Frighteners, starring Michael J. Fox; the adult puppet feature Meet the Feebles; and Braindead, which won 16 international science fiction awards, including the Saturn. Jackson also co-directed the television documentary Forgotten Silver, which also hit the film festival circuit. Jackson directed the Academy Award®-nominated The Lovely Bones, an adaptation of the acclaimed best-selling novel by Alice Sebold and produced the worldwide sci-fi hit District 9. He was a producer on Steven Spielberg's The Adventures of Tintin: The Secret of the Unicorn in 2011, with two more films set to come out in the future. His most recent films include producer of 2018's action film Mortal Engines, based on a post-apocalyptic world where cities ride on wheels and consume each other to survive. Following Mortal Engines, he produced They Shall Not Grow Old, a documentary on World War I with never-before-seen footage. BAFTA nominated the film for Best Documentary, and it won the award for Outstanding Achievement in Sound Editing from the Motion Picture Sound Editors. Jackson's next project is the music documentary The Beatles: Get Back, which he directed and produced, due to be released August, 2021. Jackson works closely with partner Dame Fran Walsh, with whom he shares his writing and producing credits, as well as a family.",
      "Birth":"1961",
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
      "Bio":"Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee. Quentin moved with his mother to Torrance, California, when he was four years old. In January of 1992, first-time writer-director Tarantino's Reservoir Dogs (1992) appeared at the Sundance Film Festival. The film garnered critical acclaim and the director became a legend immediately. Two years later, he followed up Dogs success with Pulp Fiction (1994) which premiered at the Cannes film festival, winning the coveted Palme D'Or Award. At the 1995 Academy Awards, it was nominated for the best picture, best director and best original screenplay. Tarantino and writing partner Roger Avary came away with the award only for best original screenplay. In 1995, Tarantino directed one fourth of the anthology Four Rooms (1995) with friends and fellow auteurs Alexandre Rockwell, Robert Rodriguez and Allison Anders. The film opened December 25 in the United States to very weak reviews. Tarantino's next film was From Dusk Till Dawn (1996), a vampire/crime story which he wrote and co-starred with George Clooney. The film did fairly well theatrically. Since then, Tarantino has helmed several critically and financially successful films, including Jackie Brown (1997), Kill Bill: Vol. 1 (2003), Kill Bill: Vol. 2 (2004), Inglourious Basterds (2009), Django Unchained (2012) and The Hateful Eight (2015).",
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
      "Bio":"Sir Peter Jackson made history with The Lord of the Rings trilogy, becoming the first person to direct three major feature films simultaneously. The Fellowship of the Ring, The Two Towers and The Return of the King were nominated for and collected a slew of awards from around the globe, with The Return of the King receiving his most impressive collection of awards. This included three Academy Awards® (Best Adapted Screenplay, Best Director and Best Picture), two Golden Globes (Best Director and Best Motion Picture-Drama), three BAFTAs (Best Adapted Screenplay, Best Film and Viewers' Choice), a Directors Guild Award, a Producers Guild Award and a New York Film Critics Circle Award. As a follow up to The Lord of the Rings trilogy, in 2005, Jackson directed, wrote, and produced King Kong, for Universal Pictures. The film grossed over $500 million and won three Oscars®. Jackson previously received widespread acclaim for his 1994 feature Heavenly Creatures, which received an Academy Award® nomination for Best Screenplay. Other film credits include The Frighteners, starring Michael J. Fox; the adult puppet feature Meet the Feebles; and Braindead, which won 16 international science fiction awards, including the Saturn. Jackson also co-directed the television documentary Forgotten Silver, which also hit the film festival circuit. Jackson directed the Academy Award®-nominated The Lovely Bones, an adaptation of the acclaimed best-selling novel by Alice Sebold and produced the worldwide sci-fi hit District 9. He was a producer on Steven Spielberg's The Adventures of Tintin: The Secret of the Unicorn in 2011, with two more films set to come out in the future. His most recent films include producer of 2018's action film Mortal Engines, based on a post-apocalyptic world where cities ride on wheels and consume each other to survive. Following Mortal Engines, he produced They Shall Not Grow Old, a documentary on World War I with never-before-seen footage. BAFTA nominated the film for Best Documentary, and it won the award for Outstanding Achievement in Sound Editing from the Motion Picture Sound Editors. Jackson's next project is the music documentary The Beatles: Get Back, which he directed and produced, due to be released August, 2021. Jackson works closely with partner Dame Fran Walsh, with whom he shares his writing and producing credits, as well as a family.",
      "Birth":"1961",
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
      "Bio":"Sergio Leone was virtually born into the cinema - he was the son of Roberto Roberti (A.K.A. Vincenzo Leone), one of Italy's cinema pioneers, and actress Bice Valerian. Leone entered films in his late teens, working as an assistant director to both Italian directors and U.S. directors working in Italy (usually making Biblical and Roman epics, much in vogue at the time). Towards the end of the 1950s he started writing screenplays, and began directing after taking over The Last Days of Pompeii (1959) in mid-shoot after its original director fell ill. His first solo feature, The Colossus of Rhodes (1961), was a routine Roman epic, but his second feature, A Fistful of Dollars (1964), a shameless remake of Akira Kurosawa's Yojimbo (1961), caused a revolution. It was the first Spaghetti Western, and shot T.V. cowboy Clint Eastwood to stardom (Leone wanted Henry Fonda or Charles Bronson but couldn't afford them). The two sequels, For a Few Dollars More (1965) and The Good, the Bad and the Ugly (1966), were shot on much higher budgets and were even more successful, though his masterpiece, Once Upon a Time in the West (1968), in which Leone finally worked with Fonda and Bronson, was mutilated by Paramount Pictures and flopped at the U.S. box office. He directed Duck, You Sucker! (1971) reluctantly (as producer he hired Peter Bogdanovich to direct but he left before shooting began), and turned down offers to direct The Godfather (1972) in favor of his dream project, which became Once Upon a Time in America (1984). He died in 1989 after preparing an even more expensive Soviet co-production on the World War II siege of Leningrad.",
      "Birth":"January 3, 1929",
      "Death":"April 30, 1989",
    },
    "ImageURL":"",
    "Featured":false
  },
];

//CREATE Allow new users to register
app.post('/users', (req, res) =>{
  const newUser = req.body;
  
  if (newUser.name) {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser)
  } else {
    res.status(400).send('users need names')
  }
})

//UPDATE Allow users to update their user info (username)
app.put('/users/:id', (req, res) =>{
  const { id } = req.params;
  const updatedUser = req.body;
  
  let user = users.find( user => user.id == id);

  if (user) {
    user.name = updatedUser.name;
    res.status(200).send(user);
  } else {
    res.status(400).send('No such user.')
  }
})




app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

/* app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); */