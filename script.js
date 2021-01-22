const Form = document.querySelector('#form');
const Input = document.querySelector('#AddInput')
const Knapp = document.querySelector('#Submit')
const output = document.querySelector('#output')

const Validatetext2 = id => {
    const input = document.querySelector('#'+id);
    const error = document.querySelector('#'+id+'-error');
    if(input.id === "AddInput") {
        if(input.value === '') {
            texterror.innerText = 'Var vänligen att skriva in en text';
            return false;
        } else if{input.value.length < 3) {
            texterror.innerText = 'Texten måste innehålla minst tre tecken'
            return false;
        }
        else {
            texterror.innerText = '';
            return true;
        }
    }
}