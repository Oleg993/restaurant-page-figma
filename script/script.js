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

  function fillList() {
    container.insertAdjacentHTML(
      'afterbegin',
      `
 <div id="${content[key].classId}" class="post">
     <img src="${content[key].img}" alt="" />
   <div class="post-text">
     <div class="post-header">
       <a href="">${content[key].title}</a>
       <p>${content[key].price}</p>
     </div>
       <p class="text">${content[key].description} </p>
   </div>
 </div>
 `
    );
  }

  clearMenu();
  if (menuBlock === 1) {
    for (key in content) {
      fillList();
    }
  }
  if (menuBlock === 2) {
    for (key in content) {
      if (content[key]['classId'] === 'breakfast') fillList();
    }
  }
  if (menuBlock === 3) {
    for (key in content) {
      if (content[key]['classId'] === 'lunch') fillList();
    }
  }
  if (menuBlock === 4) {
    for (key in content) {
      if (content[key]['classId'] === 'shake') fillList();
    }
  }
  if (menuBlock === 5) {
    for (key in content) {
      if (content[key]['classId'] === 'dinner') fillList();
    }
  }
}
