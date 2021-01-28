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

const newListan = (listan) => {
    let card = document.createElement('div');
    card.classList.add('container');

    let innercard = document.createElement('div');
    innercard.classList.add('listan');
    
    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = listan.title;

    let button = document.createElement('button');
    button.classList.add('Delete');
    button.innerText = 'Ta Bort';
    button.addEventListener('click', () => console.log('listan.id'))

    innercard.appendChild(title);
    innercard.appendChild(button);
    card.appendChild();innercard
    output.appendChild(card);
}

const listLäggtill = () => {
    output.innerHTML = '';
    läggtill.forEach(listan => {
        let _listan = `
        <div class="container">
        <div class="listan" id="output">
            <h2 class="title" id="title">${listan.title}</h2>
            <button class="Delete">Ta Bort</button>
        </div>
        </div>
        `
        output.insertAdjacentHTML('beforeend', _listan)

        newListan(listan);
    })

}

const createListan = (title) => {
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
            
                createListan(AddInput.value);
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
