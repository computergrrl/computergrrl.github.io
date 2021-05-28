const portfolio = document.querySelector("#port");

const portfolioData = [

  {
    img:  "images/Photo_gallery.png",
    title: "Photo Gallery App",
    shortDescription: "This app uses CSS Grid for a responsive layout of any collection of images.",
    fullDescription: "This app uses CSS Grid for a responsive layout of any collection of images. Implementation of the Lightbox plugin is used so that viewer can click on any image and see the full screen image along with a descriptive caption",
  },

  {
    img: "images/Web_style_guide.png",
    title: "Sass Web Style Guide",
    shortDescription: "A Sass based web style guide for web designers.",
    fullDescription: "A Sass based web style guide for web designers. This web style guide makes it easy for any web developer to implement the outlined style guides into their own website. Includes styling for links, buttons, typography, blockquotes and grid structure."
  },

  {
    img: "images/Phrase_game_1.png",
    title: "Mystery Phrase Game V1",
    shortDescription: "This app is version 1 of a mystery phrase guessing game",
    fullDescription: "This app is a mystery phrase guessing game in which the user tries to guess the words in a galaxy space edition of hangman. User can choose to use either the on screen keyboard or their computer keyboard to guess letters before they run out of turns and the game is over. ",
  }, 

  {
    img: "images/Name_that_movie.png",
    title: "Name That Movie App",
    shortDescription: "This app is version 2 of the  mystery phrase guessing game.",
    fullDescription: "This app is version 2 of the  mystery phrase guessing game. In this version the user is given movie sound byte clues and must try to guess the name of the movie  before they run out of turns and the game is over. User can choose to use either the on screen keyboard or their computer keyboard to guess letters",
  },

  {
    img: "images/Web_dashboard.png",
    title: "Web Dashboard App",
    shortDescription: "This app is a dashboard which hosts a range features for user convenience.",
    fullDescription: "This app is a dashboard which hosts a range features for user convenience. Dashboard includes tools that can be used to monitor site activity, personalize user experience. Includes charts to view web traffic, a messaging app, and also a personal settings feature for users to set their timezones and preferences. ",
  }, 

  {
    img: "images/Employee_directory.png",
    title: "Employee Directory App",
    shortDescription: "This app connects with an API to create an employee directory.",
    fullDescription: "This app connects with an API to create an employee directory. The app pulls random users from an API and displays them on the page. User can click on any employee card to view a modal popup that includes further details and contact info about the selected employee, including address and DOB.",
  }

];


portfolioData.forEach((project, index) => {
  portfolio.innerHTML += `
  <div class="col-md-6 col-lg-4" data-index=${index}>
  <div class="card mb-3">
    <img class="card-img-top" src="${project.img}" alt="image of ${project.title}">
    <div class="card-body">
      <h4 class="card-title text-center">${project.title}</h4>
      <p class="card-text text-center">${project.shortDescription}</p>
    </div>
  </div>
</div>

  `
} 
  
  );