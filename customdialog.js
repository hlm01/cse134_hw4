window.addEventListener('DOMContentLoaded', main);

function main() {
    let output = document.querySelector('output');
    let alertBtn = document.getElementById('alert');
    let alertBox = document.getElementById('alert-box');
    alertBtn.addEventListener('click', () => alertBox.showModal());

    let confirmBtn = document.getElementById('confirm');
    let confirmBox = document.getElementById('confirm-box');

    confirmBtn.addEventListener('click', () => {
        output.innerText = '';
        confirmBox.showModal();
    });
    confirmBox.addEventListener('close', () => {
        output.innerText = `The value returned by the confirm method is: ${confirmBox.returnValue}`;
    });

    let promptBtn = document.getElementById('prompt');
    let promptBox = document.getElementById('prompt-box');
    let promptText = document.getElementById('dialog-input');

    promptBtn.addEventListener('click', () => {
        output.innerText = '';
        promptBox.showModal();
    });
    promptBox.addEventListener('close', () => {
        if (promptBox.returnValue === 'ok') {
            output.innerText = `User entered: ${DOMPurify.sanitize(
                promptText.value
            )}`;
        } else {
            output.innerText = 'User did not enter anything.';
        }
    });
}
