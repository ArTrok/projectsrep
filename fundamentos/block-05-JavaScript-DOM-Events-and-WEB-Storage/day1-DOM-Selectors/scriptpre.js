let el1 = document.querySelectorAll('h1')[0];
el1.style.backgroundColor = 'green';

let el2 = document.querySelectorAll('section.emergency-tasks h3')
for (let i = 0; i < el2.length; i += 1) {
el2[i].style.backgroundColor = 'pink';
el2[i].style.border = 'solid';
el2[i].style.borderColor = 'orange';
}

let el3 = document.querySelectorAll('section.no-emergency-tasks h3')
for (let i = 0; i < el2.length; i += 1) {
el3[i].style.backgroundColor = 'lightblue';
el3[i].style.border = 'solid';
el3[i].style.borderColor = 'lightcoral';
}
