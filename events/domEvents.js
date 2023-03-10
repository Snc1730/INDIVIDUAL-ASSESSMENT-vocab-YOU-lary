import { getSingleWord } from '../api/vocabWordData';
import addWordForm from '../components/forms/addVocabWordForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A WORD
    if (e.target.id.includes('add-word-btn')) {
      addWordForm(user);
    }

    // CLICK EVENT EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((wordObj) => addWordForm(user, wordObj));
    }
  });
};

export default domEvents;
