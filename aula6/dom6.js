const LI = document.createElement('li');
LI.className = 'collection-iten';
LI.id = 'nova-tarefa-qualquer';

LI.setAttribute('title', 'Pare o mouse para ver');


const TEXTO = document.createTextNode('tarefa inserida dinamicamente');

LI.appendChild(TEXTO);

const A = document.createElement('a');

A.className ='delete-item secundary-content';

A.setAttribute('href','#');
const I = document.createElement('i');

I.className = 'fa fa-remove';

A.appendChild(I);

LI.appendChild(A);

const UL = document.querySelector('ul.collection');

UL.appendChild(li);

