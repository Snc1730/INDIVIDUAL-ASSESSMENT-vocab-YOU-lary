import logoutButton from '../components/buttons/logoutButton';
import navigationEvents from '../components/events/navigationEvents';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
};

export default startApp;
