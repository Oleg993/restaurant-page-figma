const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container');
let key;

function clearMenu() {
  container.innerHTML = '';
}

getPost(1);

const btns = (event) => {
  getPost(+event.target.dataset.num);
};

buttons.forEach((button) => {
  button.addEventListener('click', btns);
});

async function getPost(menuBlock) {
  let response = await fetch('./menu.json');
  let content = await response.json();

  let template = '';

  function addMenu(classId) {
    const contentArray = Array.prototype.slice.call(content);
    contentArray.forEach((element) => {
      function fTemplate() {
        template += `   
      <div id="${classId}" class="post">
          <img src="${element.img}" alt="" />
            <div class="post-text">
            <div class="post-header">
          <a href="">${element.title}</a>
          <p>${element.price}</p>
            </div>
          <p class="text">${element.description} </p>
            </div>
      </div>`;
      }
      if (!classId) {
        fTemplate();
      }
      if (element.classId === classId) {
        fTemplate();
      }
    });
    return container.insertAdjacentHTML('afterbegin', template);
  }

  clearMenu();
  if (menuBlock === 1) {
    addMenu();
  }
  if (menuBlock === 2) {
    addMenu('breakfast');
  }
  if (menuBlock === 3) {
    addMenu('lunch');
  }
  if (menuBlock === 4) {
    addMenu('shake');
  }
  if (menuBlock === 5) {
    addMenu('dinner');
  }
}
