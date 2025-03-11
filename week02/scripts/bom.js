const ipt = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

const liElmt = document.createElement('li');
const delBtn = document.createElement('button');

liElmt.textContent = ipt.value;
delBtn.textContent = 'X';
liElmt.append(delBtn);
liElmt.append(list);

