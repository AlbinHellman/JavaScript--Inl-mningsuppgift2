const Form = document.querySelector('#form');
const Input = document.querySelector('#AddInput')
const Knapp = document.querySelector('#Submit')
const output = document.querySelector('#output')

let lista = [] ;

const fetchListan = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        lista = data;
        console.log(lista);
        listListan();
    })
}
fetchListan();

const newLista = () => {
    let container = document.createElement('div');
    container.classList.add('container');
    
    let lista = document.createElement('div');
    lista.classList.add('lista');
    
    let MinTitel = document.createElement('h2');
    MinTitel.classList.add('MinTitel');
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
