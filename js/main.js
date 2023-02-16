//create HTML elements
//const myBody = document.body.innerHTML;



const box = document.createElement('div');
box.id = 'main';
document.body.appendChild(main);

const form = document.createElement('form');
form.id = 'form';
main.appendChild(form);

const input = document.createElement('input');
input.id = 'zipCode';
form.appendChild(input);

const button = document.createElement('button');
button.innerText= 'Get Weather';
button.id = 'button-1';
form.appendChild(button);

// const box = document.createElement('div');
// box.id = 'main';
// document.body.appendChild(main);

// const box = document.createElement('action');
// box.id = 'action';
// ELEMENT_NODE.div.appendChild(action);


// // const h1 = document.createElement("header");
// // const textNode = document.createTextNode("header");
// // h1.appendChild(textNode);

// const input = document.createElement("input");
// input.id = 'ZipCode';
// ELEMENT_NODE.action.appendChild(input);


// const button = document.createElement('button');
// button.innerText= 'Get Weather';
// button.id = 'button-1';
// ELEMENT_NODE.action.appendChild(button);