import { createWord, getWords, updateWord } from '../api/vocabWordData';
import { showWords } from '../pages/vocabWords';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A WORD
    if (e.target.id.includes('submit-word')) {
      const payload = {
        word: document.querySelector('#word').value,
        define: document.querySelector('#define').value,
        onhtml: document.querySelector('#onhtml').checked,
        onjs: document.querySelector('#onjs').checked,
        oncss: document.querySelector('#oncss').checked,
        timestamp: new Date().toLocaleString(),
        uid: user.uid
      };

      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords(user.uid).then(showWords);
        });
      });
    }

    // CLICK EVENT FOR EDITING A WORD
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        word: document.querySelector('#word').value,
        define: document.querySelector('#define').value,
        onhtml: document.querySelector('#onhtml').checked,
        onjs: document.querySelector('#onjs').checked,
        oncss: document.querySelector('#oncss').checked,
        firebaseKey,
      };

      updateWord(payload).then(() => {
        getWords(user.uid).then(showWords);
      });
    }
  });
};

export default formEvents;
