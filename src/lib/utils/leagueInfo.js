/*   STEP 1   */
export const leagueID = "1213003128778006528"; // your league ID
export const leagueName = "The League"; // your league name
export const dues = 25; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
<p>Welcome to The League.</p>
<p>If you notice any issues with the website, please let StickyPicky know so he can fix it. </p>
<p>There are some decent features this adds, if you are interested, under "records" it breaks down different season and all time records.</p>
<p>There is also a "managers" page that has some information about each manager, if you want to add or change anything, please let StickyPicky know.</p>
<p>There is also a "Sleeper Tools" with some tools i have built you can check out just below.</p>
<iframe src="https://the-fantasy-arsenal.vercel.app/" width="750" height="750"></iframe>
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
    "photo": "/managers/Picky.png",
    "fantasyStart": 2012,
    "favoriteTeam": "det",
    "mode": "Win Now", 
    "rival": {
      name: "Everyone",
      link: 6,
      image: "/managers/everyone.png",
    },
    "favoritePlayer": 3198,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "You lose every chance you dont take. ",
    "tradingScale": 7,
    "preferredContact": "Sleeper",
  },
  {
    "managerID": "466018632162340864",
    "name": "New Player",
    "location": "NA",
    "bio": "NA",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Dynasty",
    "rival": {
      name: "Rival",
      link: 5,
      image: "/managers/everyone.png",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Sleeper",
  },
  {
    "managerID": "1206383330921029632",
    "name": "NicRiddell",
    "location": "NA",
    "bio": "NA",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Everyone",
      link: 4,
      image: "/managers/everyone.png",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 7,
    "preferredContact": "Sleeper",
  }, 
  {
    "managerID": "871098508751613952",
    "name": "Wahnjoke",
    "location": "NA",
    "bio": "Welcome to Pittsville",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "pit",
    "mode": "Win Now",
    "rival": {
      name: "Everyone",
      link: 3,
      image: "/managers/everyone.png",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 7,
    "preferredContact": "Sleeper",
  }, 
  {
    "managerID": "732625209554792448",
    "name": "Mavist",
    "location": "NA",
    "bio": "NA",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Rebuild",
    "rival": {
      name: "Everyone",
      link: 2,
      image: "/managers/everyone.png",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 7,
    "preferredContact": "Sleeper",
  }, 
  {
    "managerID": "853365026147368960",
    "name": "leelo73",
    "location": "NA",
    "bio": "NA",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Everyone",
      link: 7,
      image: "/managers/everyone.png",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 7,
    "preferredContact": "Sleeper",
   }, 
  {
    "managerID": "853359294014410752",
    "name": "Alberto_18",
    "location": "NA",
    "bio": "NA",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Everyone",
      link: 6,
      image: "/managers/everyone.png",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 7,
    "preferredContact": "Sleeper",
  }, 
  {
    "managerID": "732620569417224192",
    "name": "Theredbeard518",
    "location": "NA",
    "bio": "Tittsburgh Feelers",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "pit",
    "mode": "Win Now",
    "rival": {
      name: "Everyone",
      link: 4,
      image: "/managers/everyone.png",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 7,
    "preferredContact": "Sleeper",
  }, 
  {
    "managerID": "725535217791643648",
    "name": "Thegoalie33",
    "location": "NA",
    "bio": "NA",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "la",
    "mode": "Win Now",
   "rival": {
      name: "Everyone",
      link: 1,
      image: "/managers/everyone.png",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 7,
    "preferredContact": "Sleeper",
  }, 
  {
    "managerID": "753965951472574464",
    "name": "bwhitte85",
    "location": "NA",
    "bio": "NA",
    "photo": "/managers/question.jpg",
    "fantasyStart": 2014, 
    "favoriteTeam": "buf",
    "mode": "Win Now",
    "rival": {
      name: "Everyone",
      link: 2,
      image: "/managers/everyone.png",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 7,
    "preferredContact": "Sleeper",
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
    