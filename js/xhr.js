


var xhr = new XMLHttpRequest();
xhr.open("GET", 'http://codeit.pro/frontTestTask/news/getList', false);
xhr.send();

var data2 = JSON.parse(xhr.responseText);

var img = document.createElement('img');
img.src = data2.list[0].img;
var parent = document.body.getElementsByClassName('img')[0];
parent.appendChild(img);

var descript = document.createElement('div');
descript.classList.add('description');
descript.innerHTML = data2.list[0].description;
var parent2 = document.body.getElementsByClassName('descript')[0];
parent2.appendChild(descript);

var autor = document.createElement('div');
autor.classList.add('aut');
autor.innerHTML = data2.list[0].author;
var parent3 = document.body.getElementsByClassName('autor')[0];
parent3.appendChild(autor);


var unix = data2.list[0].date;
function parseDate(unix) {
	var date = new Date();
	date.setTime(unix);
	return date.getDate() + '.' + date.getMonth()+1 + '.' + date.getFullYear();
}

var date = document.createElement('div');
date.classList.add('data');
date.innerHTML = parseDate(unix);
var parent4 = document.body.getElementsByClassName('date')[0];
parent4.appendChild(date);


