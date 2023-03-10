import { getWords } from '../api/vocabWordData';
import addWordForm from '../components/forms/addVocabWordForm';
import { showWords } from '../pages/vocabWords';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL VOCAB
  document.querySelector('#allVocab').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A WORD
    if (e.target.id.includes('addVocab')) {
      addWordForm(user);
    }
  });
};

export default navigationEvents;
