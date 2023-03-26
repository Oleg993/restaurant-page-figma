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

function addMenu(classId, content) {
  let template = '';
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
        </div>
      `;
    }
    if (!classId) {
      fTemplate();
    }
    if (element.classId === classId) {
      fTemplate();
    }
  });
  return template;
}

async function getPost(menuBlock) {
  let response = await fetch('./menu.json');
  let content = await response.json();

  clearMenu();

  let template = '';

  if (menuBlock === 1) {
    template = addMenu(null, content);
  }
  if (menuBlock === 2) {
    template = addMenu('breakfast', content);
  }
  if (menuBlock === 3) {
    template = addMenu('lunch', content);
  }
  if (menuBlock === 4) {
    template = addMenu('shake', content);
  }
  if (menuBlock === 5) {
    template = addMenu('dinner', content);
  }

  container.insertAdjacentHTML('afterbegin', template);
}
