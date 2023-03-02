window.addEventListener('DOMContentLoaded', main);

function main() {
    let alertBtn = document.getElementById('alert');
    alertBtn.addEventListener('click', () => alert('this is an alert'));

    let confirmBtn = document.getElementById('confirm');
    let output = document.querySelector('output');
    confirmBtn.addEventListener('click', () => {
        output.innerText = '';
        setTimeout(
            () =>
                (output.innerText = `The value returned by the confirm method is: ${confirm(
                    'are you sure?'
                )}`),
            20
        );
    });

    let promptBtn = document.getElementById('prompt');
    promptBtn.addEventListener('click', () => {
        output.innerText = '';
        setTimeout(() => {
            let input = prompt('say something');
            output.innerHTML =
                input === null || input === ''
                    ? "User didn't enter anything"
                    : `User entered: ${input}`;
        }, 20);
    });

    let purePrompt = document.getElementById('safe-prompt');
    purePrompt.addEventListener('click', () => {
        output.innerText = '';
        setTimeout(() => {
            let input = prompt('say something');
            input = DOMPurify.sanitize(input);
            output.innerHTML =
                input === null || input === ''
                    ? "User didn't enter anything"
                    : `User entered: ${input}`;
        }, 20);
    });
}
