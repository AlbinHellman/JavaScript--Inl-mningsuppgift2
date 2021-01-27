const Form = document.querySelector('#form');
const Input = document.querySelector('#AddInput')
const Knapp = document.querySelector('#Submit')
const output = document.querySelector('#output')

let läggtill = [] ;

const fetchLäggtill = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        lista = data;
        console.log(läggtill);
        listLäggtill();
    })
}
fetchLäggtill();

const newLista = (lista) => {
    let container = document.createElement('div');
    container.classList.add('container');

    let listan = document.createElement('div');
    lista.classList.add('listan');
    
    let MinTitel = document.createElement('h2');
    MinTitel.classList.add('MinTitel');
    MinTitel.innerText = lista.MinTitel;

    let button = document.createElement('button');
    button.classList.add('Delete');
    button.innerText = 'Ta Bort';
    button.addEventListener('click', () => console.log('lista.id'))

    listan.appendChild(MinTitel);
    listan.appendChild(Delete);
    container.appendChild(listan);
    output.appendChild(container);
}

const listLäggtill = () => {
    output.innerHTML = '';
    läggtill.forEach(lista => {
        newLista(lista);
    })

}

const validatetext2 = id => {
    const input = document.querySelector('#'+id);
    const error = document.querySelector('#'+id+'-error');
    if(input.id === "AddInput") {
        if(input.value === '') {
            texterror.innerText = 'Var vänligen att skriva in en text';
            return false;
        } else if(input.value.length < 3) {
            texterror.innerText = 'Texten måste innehålla minst tre tecken'
            return false;
        }
        else {
            texterror.innerText = '';
            return true;
        }
    }
}

const validate = () => {

    document.querySelectorAll('input').forEach(input => {


        if(input.id === "AddInput") {
            validatetext2(input.id);
        }
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validate();
} )
