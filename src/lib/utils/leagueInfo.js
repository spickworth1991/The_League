/*   STEP 1   */
export const leagueID = "873246287271792640"; // your league ID
export const leagueName = "The League"; // your league name
export const dues = 25; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
<p>Welcome to The League.</p>
<p>If you notice any issues with the website, please let StickyPicky know so he can fix it. </p>
<p>There are some decent features this adds, if you are interested, under "records" it breaks down different season and all time records.</p>
<p></p>
<p></p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "managerID": "633359171764449280",
    "name": "Sean (StickyPicky)",
    "location": "Detroit",
    "bio": "CNC operator by day, fantasy coach by night",
    "photo": "/managers/Picky.jpg",
    "fantasyStart": 2015,
    "favoriteTeam": "det",
    "mode": "Win Now",
    "rival": {
      name: "Everyone",
      link: null,
      image: "/managers/everyone.jpg"
    },
    "favoritePlayer": 3198,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "You lose every chance you dont take.",
    "tradingScale": 7,
    "contactMethods": "email, Blind Sleeper offer",
    "preferredContact": "Sleeper",
  },
  {
    "managerID": "463854522964373504",
    "name": "Nick Melhado",
    "location": "Brooklyn",
    "bio": "I grew up in New York City and know most of the people in the league from Southampton. I also went to high school with Andrew, Stef, and Rory and went to college and roomed with Seamus and Andrew. I've been married since 2016 and have a son, Grayson, and a daughter on the way.",
    "photo": "/managers/nick.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Dynasty",
    "rival": {
      name: "Clayton",
      link: 6,
      image: "/managers/clayton.jpg",
    }, 
    "favoritePlayer": 4149,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Quality over quantity. The team policy is to trade depth for stars, and win on a knife's edge where a single injury can completely derail a season.",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "managerID": "463861417238327296",
    "name": "Charles McConnell",
    "location": "Hong Kong",
    "bio": "Diehard Jets fan, most talented manager out there, and mortal enemy of Clayton Almeida.",
    "photo": "/managers/charles.jpg",
    "fantasyStart": 2015,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Clayton",
      link: 6,
      image: "/managers/clayton.jpg"
    },
    "favoritePlayer": 96,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "My team's philosophy is to win at all costs, which will turn into a culture that will lead to many victories.",
    "tradingScale": 7,
    "contactMethods": "WhatsApp, Blind Sleeper offer, Carrier pigeon",
    "preferredContact": "WhatsApp",
  },
  {
    "managerID": "703785166493020160",
    "name": "Stefano Vaccarino",
    "location": "Brooklyn",
    "bio": "Just a man who loves to win in the trenches",
    "photo": "/managers/stef.jpg",
    "fantasyStart": 2000,
    "favoriteTeam": "nyj",
    "mode": "Rebuild",
    "rival": {
      name: "Everyone",
      link: null,
      image: "/managers/everyone.png"
    },
    "favoritePlayer": 6796,
    "valuePosition": "Picks",
    "rookieOrVets": "Rookies",
    "philosophy": "We dominate the trenches",
    "tradingScale": 10,
    "contactMethods": "Text, WhatsApp, Call, email, Blind Sleeper offer, Have someone click the \"interested in\" button on sleeper, Carrier pigeon",
    "preferredContact": "WhatsApp",
  },
  {
    "managerID": "601985300511645696",
    "name": "Seamus Kerin",
    "location": "New York",
    "bio": "#serious about fitness",
    "photo": "/managers/seamus.jpg",
    "fantasyStart": 2005,
    "favoriteTeam": "ne",
    "mode": "Rebuild",
    "rival": {
      name: "TBD",
      link: null,
      image: "/managers/question.jpg"
    },
    "favoritePlayer": 6770,
    "valuePosition": "TE",
    "rookieOrVets": "Rookies",
    "philosophy": "Fantasy is won in the trenches",
    "tradingScale": 7,
    "contactMethods": "Text, email, Blind Sleeper offer, Have someone click the \"interested in\" button on sleeper, Carrier pigeon",
    "preferredContact": "Text",
  },
  {
    "managerID": "703787086343409664",
    "name": "Rory Kirwan",
    "location": "New York",
    "bio": "CO-MANAGER OF THE HOGS ",
    "photo": "/managers/rory.jpg",
    "fantasyStart": 1955,
    "favoriteTeam": "nyg",
    "mode": "Rebuild",
    "rival": {
      name: "Mike",
      link: null,
      image: "/managers/question.jpg"
    },
    "favoritePlayer": 6810,
    "valuePosition": "RB",
    "rookieOrVets": "Rookies",
    "philosophy": "DOMINATE THE TRENCHES ",
    "tradingScale": 7,
    "contactMethods": "Text",
    "preferredContact": "Text",
  },
  {
    "managerID": "463849884735238144",
    "name": "Clayton Almeida",
    "location": "West Palm Beach",
    "bio": "Dual citizen that has been in the USA since 2002. Moved around quite a bit because that's what immigrants do. One of the Founding Fathers of the Legends League. Equally decent at coaching and playing tennis. Vast knowledge about useless or not so useless facts. Never shy away from an argument/discussion. Oh and 3 time fantasy football champion that might retire if I win this year again. Also like financial markets and trading (stocks not players)",
    "photo": "/managers/clayton.jpg",
    "fantasyStart": 2010,
    "favoriteTeam": "phi",
    "mode": "Win Now",
    "rival": {
      name: "Myself",
      link: 6,
      image: "/managers/clayton.jpg"
    },
    "favoritePlayer": 947,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "Back to back champ....and you are asking me this question? Well you can buy my book \"How to Dominate your Fantasy League\" to know the secrets but I will give you a little taste here: all about leadership. Starts with the Owner/GM/Manager...",
    "tradingScale": 9,
    "contactMethods": "Text, Blind Sleeper offer, Have someone click the \"interested in\" button on sleeper",
    "preferredContact": "Text",
  },
  {
    "managerID": "464469353119608832",
    "name": "Tom Barth",
    "location": "Solon, Ohio",
    "bio": "The Browns are going to the Super Bowl this year!",
    "photo": "/managers/tom.jpg",
    "fantasyStart": 2009,
    "favoriteTeam": "cle",
    "mode": "Win Now",
    "rival": {
      name: "Every last one of you",
      link: null,
      image: "/managers/everyone.png"
    },
    "favoritePlayer": 4988,
    "valuePosition": "RB",
    "rookieOrVets": "Rookies",
    "philosophy": "Do exactly what Clayton does.",
    "tradingScale": 2,
    "contactMethods": "WhatsApp",
    "preferredContact": "WhatsApp",
  },
  {
    "managerID": "463860064092942336",
    "name": "Joel Trudel",
    "location": "Newton, MA",
    "bio": "While I live in New England now, I will never be a fan of any of the Boston teams (the Celtics are good, I like Brown/Tatum); my allegiance will always live in Seattle, and ANY of the teams, including the return of the SuperSonics (RIP) and the Kraken!! My co-manager and I got married about a year and ½ ago and bought a house in December, setting up roots in the Boston area. Any of you are welcome to visit, though I couldn’t even get Clayton to come up from CT when he was there… 🤔 Though I don’t work in tennis anymore, it’s been great to me as my wife and I met through tennis, and is also how I know many of you.",
    "photo": "/managers/joel.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "sea",
    "mode": "Win Now",
    "rival": {
      name: "Clayton",
      link: 6,
      image: "/managers/clayton.jpg"
    },
    "favoritePlayer": 4046,
    "valuePosition": "QB",
    "rookieOrVets": "Rookies",
    "philosophy": "I don’t see us crushing anyone over the next decade, but the team is certainly willing to go as far as Mahomes and Jefferson will take us…or the draft capital we receive in return for them….! Let’s be honest, one look at my squad, and my team building skills could be called into question. However, team culture is something we’ve never lacked in Seattle (see Pete Carrol and the Super Bowl 47 Champion Seahawks!), and it’s clear that guys love being a part of our team",
    "tradingScale": 6,
    "contactMethods": "Text, WhatsApp",
    "preferredContact": "WhatsApp",
  },
  {
    "managerID": "464270410381258752",
    "name": "Shea Thomas",
    "location": "Lynchburg, VA",
    "bio": "I’m 29 years old and have been married to my beautiful wife for a little over a year. I played tennis at Liberty University from 2010-14 and was ranked top 20 for doubles. I have been teaching tennis ever since I graduated. I won the inaugural season of the Legends League  and look to dominate the league over the next 10 years and create a dynasty!",
    "photo": "/managers/shea.jpg",
    "fantasyStart": 2008,
    "favoriteTeam": "sf",
    "mode": "Win Now",
    "rival": {
      name: "Clayton",
      link: 6,
      image: "/managers/clayton.jpg"
    },
    "favoritePlayer": 4046,
    "valuePosition": "RB",
    "rookieOrVets": "Vets",
    "philosophy": "Our teams philosophy is to play as a team. Every player plays their hardest and their best because they play for each other and not for themselves. They all push each other to be better. My team is also extremely young so they’ll be dominating for the next decade!",
    "tradingScale": 7,
    "contactMethods": "Text, WhatsApp, Blind Sleeper offer",
    "preferredContact": "WhatsApp",
  },
  {
    "managerID": "677353154190331904",
    "name": "Tim Sanford",
    "location": "Fairfield, CT",
    "bio": "Up early. Up late.",
    "photo": "/managers/tim.jpg",
    "fantasyStart": 2010,
    "favoriteTeam": "nyg",
    "mode": "Rebuild",
    "rival": {
      name: "I Am My Own Nightmare",
      link: 10,
      image: "/managers/tim.jpg"
    },
    "favoritePlayer": 4034,
    "valuePosition": "RB",
    "rookieOrVets": "Rookies",
    "philosophy": "Spread the wealth and always Run deep on RBs",
    "tradingScale": 7,
    "contactMethods": "Text, WhatsApp, Blind Sleeper offer, Carrier pigeon",
    "preferredContact": "WhatsApp",
  },
  {
    "managerID": "464174586712289280",
    "name": "Sebastian Becker",
    "location": "New York",
    "bio": "I am the second-best South American fantasy football manager in this league but the best South American tennis player.",
    "photo": "/managers/sebastian.jpg",
    "fantasyStart": 2018,
    "favoriteTeam": "nyg",
    "mode": "Rebuild",
    "rival": {
      name: "Clayton",
      link: 6,
      image: "/managers/clayton.jpg"
    },
    "favoritePlayer": 3198,
    "valuePosition": "RB",
    "rookieOrVets": "Rookies",
    "philosophy": "Better to be lucky than good",
    "tradingScale": 8,
    "contactMethods": "Text, WhatsApp",
    "preferredContact": "Text",
  },
  {
    "managerID": "463851773891702784",
    "name": "Siim Tuus",
    "location": "Rakvere, Estonia",
    "bio": "31-year-old Estonian, once played tennis at a decent level, now playing padel",
    "photo": "/managers/siim.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "sea",
    "mode": "Win Now",
    "rival": {
      name: "Clayton",
      link: 6,
      image: "/managers/clayton.jpg"
    },
    "favoritePlayer": 96,
    "valuePosition": "TE",
    "rookieOrVets": "Vets",
    "philosophy": "No need to over analyze, pick the best players and beat everyone ",
    "tradingScale": 1,
    "contactMethods": "Carrier Pigeon",
    "preferredContact": "Carrier Pigeon",
  },
  {
    "managerID": "475339393737945088",
    "name": "Harry Jones",
    "location": "New York",
    "bio": "Lorem Ipsum",
    "photo": "/managers/harry.jpg",
    "fantasyStart": 2018,
    "favoriteTeam": "nyg",
    "mode": "Win Now",
    "rival": {
      name: "My co-manager",
      link: 13,
      image: "/managers/siim.jpg"
    },
    "favoritePlayer": 1141,
    "valuePosition": "TE",
    "rookieOrVets": "Vets",
    "philosophy": "Pacifist",
    "tradingScale": 3,
    "contactMethods": "Text, WhatsApp",
    "preferredContact": "WhatsApp",
  },
]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
