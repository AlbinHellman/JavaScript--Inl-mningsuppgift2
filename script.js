const Form = document.querySelector('#form');
const Input = document.querySelector('#AddInput')
const Knapp = document.querySelector('#Submit')
const output = document.querySelector('#output')




let todos = [] ;

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
        todos = data;
        console.log(todos);
        listTodos();
    })
}
fetchTodos();

const newTodo = (todo) => {
    let card = document.createElement('div');
    card.classList.add('container');

    let innercard = document.createElement('div');
    innercard.classList.add('listan');
    
    let title = document.createElement('h2');
    title.classList.add('title1');
    title.innerText = todo.title;

    let button = document.createElement('button');
    button.classList.add('Delete');
    button.innerText = 'Ta Bort';
    button.addEventListener('click', () => console.log('click'))

    innercard.appendChild(title);
    innercard.appendChild(button);
    card.appendChild(innercard);
    output.appendChild(card);
}




const listTodos = () => {
    output.innerHTML = '';
    todos.forEach(todo => {
    //    let _todo = `
    //    <div class="container" id="output">
    //    <div class="listan">
    //        <h2 class="title1" id="title1">${todo.id}</h2>
    //        <button class="Delete">Ta Bort</button>
    //    </div>
    //    </div>
    //    `
    //    output.insertAdjacentHTML('beforeend', _todo);

        newTodo(todo);
    })

}


const createTodo = (title) => {
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
        todos.unshift(data);
        listTodos();
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
            
                createTodo(AddInput.value);
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
