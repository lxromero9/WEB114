// Oscar Romero 11-21-2025
//Mood Changer using event delegation

//This will select the mood display element from the DOM
const moodDisplay = document.getElementById('moodDisplay');

// This is the object that holds the colors and the messages that pop up once the user clicks a botton. 
const moods = {
  happy:     { bg: '#FFEB00', text: '#3e2723', message: 'Dont let nobody upset you!' },
  calm:      { bg: '#8CFFF2', text: '#003366', message: 'Concentrate your chi. Deep breaths!' },
  excited:   { bg: '#FF2B41', text: '#ffffff', message: 'Whooooooooo!!!! Keep up the energy!' },
  chill:     { bg: '#3C9649', text: '#1b5e20', message: 'Ayyeeee, takin it easy homes.' },
  mysterious:{ bg: '#7D7877', text: '#e0e0e0', message: 'Its behind me isnt it?' },
  //this is the rest button object
  reset:    { bg: '#ffffff', text: '#000000', message: 'Choose a mood...' }
};

// This will listen for clicks on the page and check if it is a mood button.
document.addEventListener('click', function (event) {
    //checks if the clicked element has the class mood-btn assigned to it.
  if (event.target.classList.contains('mood-btn')) {

    //this will get the moood from the moods object
    const mood = event.target.getAttribute('data-mood');
    
    //will get the configs of the mood from the moods object
    const config = moods[mood];

    //this updates the background of the color of the body
    document.body.style.backgroundColor = config.bg;

    //updates the text color of the body
    document.body.style.color = config.text;

    //Updates and shows the according message!
    moodDisplay.textContent = config.message;
  }
});
