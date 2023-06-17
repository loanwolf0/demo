const header = document.getElementById('main-header');
const add = document.querySelector('.title');
const list = document.getElementsByClassName('list-group-item');

header.style.borderBottom = 'solid 3px #000'
add.style.color = 'green'
add.innerHTML = '<h1> <b> Add Items </b> </h1>'


list[2].style.backgroundColor = 'green' ;

for (let i = 0; i < list.length; i++) {
    list[i].style.fontWeight = 'bold' ;  
}
