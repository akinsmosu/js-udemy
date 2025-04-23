const firstItem = document.querySelector('#task-1')
console.dir(firstItem.innerHTML)

firstItem.style.backgroundColor = 'black'
firstItem.style.color = 'white'

const pageTitle = document.querySelector('title');
pageTitle.innerHTML = "Assignment - Solved! "

const head = document.head;

const newTitle = head.querySelector('title');
newTitle.innerHTML = "Done"

const newHeader = document.querySelector('h1');
newHeader.innerHTML = "Assignment - Solved!"