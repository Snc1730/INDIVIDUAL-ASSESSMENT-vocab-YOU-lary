import client from '../utils/client';
// API CALLS FOR WORDS

const endpoint = client.databaseURL;

// GET WORDS
const getWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// GET HTML WORDS
const vocabHTML = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const onHTML = Object.values(data).filter((item) => item.onhtml);
      resolve(onHTML);
    })
    .catch(reject);
});

// GET JS WORDS
const vocabJS = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const onJS = Object.values(data).filter((item) => item.onjs);
      resolve(onJS);
    })
    .catch(reject);
});

// GET CSS WORDS
const vocabCSS = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const onCSS = Object.values(data).filter((item) => item.oncss);
      resolve(onCSS);
    })
    .catch(reject);
});

// CREATE WORD
const createWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE WORD
const updateWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// GET SINGLE WORD
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// DELETE WORD
const deleteVocabWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/Words/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getWords,
  createWord,
  getSingleWord,
  updateWord,
  deleteVocabWord,
  vocabHTML,
  vocabJS,
  vocabCSS
};
