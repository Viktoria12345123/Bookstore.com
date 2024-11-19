

const list = document.querySelectorAll('li');
const QnA = document.querySelector('button.questions-answers');

function activeLink() {
    localStorage.setItem('navigationProgress', [...list].indexOf(this));
}

list.forEach((li) => {
    li.addEventListener('click', activeLink)
});

window.addEventListener('load', () => {
    const item = localStorage.getItem('navigationProgress')

    if (item) {
        list.forEach(li => {
            list[item] === li ? li.classList.add('active') : li.classList.remove('active');

        })
    }


})

QnA.addEventListener('click', () =>{
  window.location.href = QnA.querySelector('a').href;
})


