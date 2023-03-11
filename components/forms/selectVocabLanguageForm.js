// import { getLanguages } from '../../api/vocabLanguageData';
// import renderToDOM from '../../utils/renderToDom';

// const selectVocabLanguage = (langId) => {
//   let domString = `<label for="language">Select a Language</label>
//     <select class="form-control" id="lang_id" required>
//     <option value="">Select a Language</option>`;

//   getLanguages().then((languageArray) => {
//     languageArray.forEach((language) => {
//       domString += `
//           <option
//             value="${language.firebaseKey}"
//             ${langId === language.firebaseKey ? 'selected' : ''}>
//               ${language.language}
//           </option>`;
//     });

//     domString += '</select>';

//     renderToDOM('#select-language', domString);
//   });
// };

// export default selectVocabLanguage;
