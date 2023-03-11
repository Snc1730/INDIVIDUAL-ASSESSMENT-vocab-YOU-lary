import { deleteVocabWord, getSingleWord, getWords } from '../api/vocabWordData';
import addWordForm from '../components/forms/addVocabWordForm';
import { showWords } from '../pages/vocabWords';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A WORD
    if (e.target.id.includes('add-word-btn')) {
      addWordForm(user);
    }

    // CLICK EVENT FOR DELETING A VOCAB WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocabWord(firebaseKey).then(() => {
          getWords(user.uid).then(showWords);
        });
      }
    }
    // CLICK EVENT EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((wordObj) => addWordForm(user, wordObj));
    }
  });
};

export default domEvents;
