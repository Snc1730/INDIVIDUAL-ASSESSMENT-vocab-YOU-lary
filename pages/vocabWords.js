import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyWords = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#store', domString);
};

const showWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-word-btn">Add A Word</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-word">${item.word}</h5>
            <p>${item.define || ''}</p>
            <hr>
            <i id="edit-word-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
            <i id="delete-word-btn--${item.firebaseKey}" class="btn btn-danger">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export {
  emptyWords,
  showWords
};
