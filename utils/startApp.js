import logoutButton from '../components/buttons/logoutButton';
import navigationEvents from '../events/navigationEvents';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { showWords } from '../pages/vocabWords';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import { getWords } from '../api/vocabWordData';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all vocab words on the DOM on App load
  getWords(user.uid).then((words) => showWords(words));
};

export default startApp;
