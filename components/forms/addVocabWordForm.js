import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

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
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="onhtml" ${obj.onhtml ? 'checked' : ''}>
        <label class="form-check-label" for="sale">HTML?</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="onjs" ${obj.onjs ? 'checked' : ''}>
        <label class="form-check-label" for="sale">JavaScript?</label>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="oncss" ${obj.oncss ? 'checked' : ''}>
        <label class="form-check-label" for="sale">CSS?</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addWordForm;
