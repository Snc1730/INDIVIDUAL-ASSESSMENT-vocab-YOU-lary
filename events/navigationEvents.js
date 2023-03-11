import {
  getWords, vocabCSS, vocabHTML, vocabJS
} from '../api/vocabWordData';
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

  // HTML VOCAB
  document.querySelector('#navhtml').addEventListener('click', () => {
    vocabHTML(user.uid).then(showWords);
  });

  // JS VOCAB
  document.querySelector('#navjs').addEventListener('click', () => {
    vocabJS(user.uid).then(showWords);
  });

  // CSS VOCAB
  document.querySelector('#navcss').addEventListener('click', () => {
    vocabCSS(user.uid).then(showWords);
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A WORD
    if (e.target.id.includes('addVocab')) {
      addWordForm(user);
    }
  });
};

export default navigationEvents;
