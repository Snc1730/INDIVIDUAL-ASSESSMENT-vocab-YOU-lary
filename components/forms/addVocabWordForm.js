import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectVocabLanguage from './selectVocabLanguageForm';

const addWordForm = (user, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="word">Word</label>
        <input type="text" class="form-control" id="word" aria-describedby="wordTitle" placeholder="Enter Vocab Word" value="${obj.word || ''}" required>
      </div>
      <div class="form-group">
        <label for="define">Definition</label>
        <textarea class="form-control" placeholder="Vocab Definition" id="define" style="height: 100px">${obj.define || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      </div>
      <button type="submit" class="btn btn-primary">Submit Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectVocabLanguage(user, `${obj.lang_id || ''}`);
};

export default addWordForm;
