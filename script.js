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
    
    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = lista.title;

    let button = document.createElement('button');
    button.classList.add('Delete');
    button.innerText = 'Ta Bort';
    button.addEventListener('click', () => console.log('lista.id'))

    listan.appendChild(title);
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

const createLista = (MinTitel) => {
    fetch('https://jsonplaceholder.typicode.com/todos',{
        method: 'POST',
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title,
            completed: false
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        listLäggtill
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
            
                createLista(AddInput.value);
                AddInput.value = '';
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
