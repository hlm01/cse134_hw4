window.addEventListener('DOMContentLoaded', main);

function main() {
    let alertBtn = document.getElementById('alert');
    alertBtn.addEventListener('click', () => alert('this is an alert'));

    let confirmBtn = document.getElementById('confirm');
    let output = document.querySelector('output');
    confirmBtn.addEventListener('click', () => {
        output.innerText = `The value returned by the confirm method is: ${confirm('are you sure?')}`;
    });

    let promptBtn = document.getElementById('prompt');
    promptBtn.addEventListener('click', () => {
        let input = prompt('say something');
        output.innerHTML = input === null ? 'User didn\'t enter anything' : `User entered: ${input}`;
    });

    let purePrompt = document.getElementById('safe-prompt');
    purePrompt.addEventListener('click', () => {
        let input = prompt('say something');
        input = DOMPurify.sanitize(input);
        output.innerHTML = input === null ? 'User didn\'t enter anything' : `User entered: ${input}`;
    });
}