var block = document.body.getElementsByClassName('main');
var loader1 = document.createElement('div');
loader1.classList.add('loader');
block[0].appendChild(loader1);

var loader2 = document.createElement('div');
loader2.classList.add('loader');
block[1].appendChild(loader2);
block[1].removeChild(document.body.getElementsByTagName('ul')[0]);


var chart = document.body.querySelector('#container');
block[3].removeChild(chart);

var loader3 = document.createElement('div');
loader3.classList.add('loader');
block[3].appendChild(loader3);

var loader4 = document.createElement('div');
loader4.classList.add('loader');
block[4].appendChild(loader4);

block[3].appendChild(chart);

var xhr = new XMLHttpRequest();
xhr.open("GET", 'http://codeit.pro/frontTestTask/company/getList', false);
xhr.send();

var data = JSON.parse(xhr.responseText);

var arr = [];

for(var i=0; i<data.list.length; i++) {
	arr.push(data.list[i].name);
}

var numberOfCompanies = arr.length;

var total = document.createElement('div');
total.classList.add('total');
total.innerHTML = numberOfCompanies;
var parent = document.body.getElementsByClassName('main')[0];
parent.appendChild(total);

var ul = document.createElement('ul');
	block[1].appendChild(ul);
for(var j=0; j<arr.length; j++) {
	addLi();
}

function addLi() {
	var li = document.createElement('li');
	li.innerHTML = arr[j];
	var parent = document.body.getElementsByTagName('ul')[0];
	parent.appendChild(li);
}

var arrLi = document.body.getElementsByTagName('li');
arrLi=[].slice.apply(arrLi);
var blockPartners = document.body.getElementsByClassName('block')[2];



function findCompany(num) {
	for(var i = 0; i<data.list.length; i++) {
		if(i===num) {
			return data.list[i];
		}
	}
}


function findPartnersArr(num) {
	var pArr = [];
	var p = findCompany(num);
	for(var i = 0; i<p.partners.length; i++) {
		pArr.push(p.partners[i]);
	}
	return pArr;
}



arrLi.forEach(function(li) {
	li.addEventListener('click', function() {
		var partners = document.body.getElementsByClassName('partners')[0];
		partners.innerHTML = '';
		var a = this.innerHTML;
		var b = arrLi.indexOf(this);
		blockPartners.classList.toggle('hidden');
		blockPartners.classList.toggle('active');
		var c = findCompany(b);	
		var d = findPartnersArr(b);
		d.sort(function(obj1, obj2) {
			return obj2.value - obj1.value;
		});
		
		for(var i=0; i<d.length; i++) {
			var partner = document.createElement('div');
			partner.classList.add('partner');
			partner.innerHTML = d[i].value + "%" + "<br> " + d[i].name + " ";
			partners.appendChild(partner);
		}
	})
})



window.onload = function() {
	var a = document.body.getElementsByTagName('path');
	a[0].onclick = function() {
		alert('Ukraine');
	}
	a[1].onclick = function() {
		alert('Poland');
	}
	a[2].onclick = function() {
		alert('Germany');
	}
	a[3].onclick = function() {
		alert('Norway');
	}
	a[4].onclick = function() {
		alert('US');
	}
	a[5].onclick = function() {
		alert('Sweden');
	}

	block[0].removeChild(loader1);
	block[1].removeChild(loader2);
	block[3].removeChild(loader3);
	block[4].removeChild(loader4);
}



