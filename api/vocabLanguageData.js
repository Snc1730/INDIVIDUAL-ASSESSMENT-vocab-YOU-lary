import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL LANGUAGES
const getLanguages = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Language.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET SINGLE LANGUAGE VOCAB WORDS
const getLanguageVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json?orderBy="lang_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getLanguageVocab,
  getLanguages
};
