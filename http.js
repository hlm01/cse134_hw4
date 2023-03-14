import {
    deleteRequest,
    getRequest,
    postRequest,
    putRequest,
} from './request.js';

window.addEventListener('DOMContentLoaded', main);

function main() {
    let form = document.querySelector('#test-form');
    form.addEventListener('submit', (event) => {
        let data = new FormData(form);
        data.append('time', new Date().toJSON());
        handleSubmit(event, data).then((response) => {
            let output = document.querySelector('#response');
            output.replaceChildren(formatOutput(response));
        });
    });
}

async function handleSubmit(event, data) {
    let output;
    event.preventDefault();
    switch (event.submitter.id) {
        case 'get-btn':
            output = await getRequest(data);
            break;
        case 'post-btn':
            output = await postRequest(data);
            break;
        case 'put-btn':
            output = await putRequest(data);
            break;
        case 'delete-btn':
            output = await deleteRequest(data);
            break;
    }
    return output;
}

function formatOutput(response) {
    let pre = document.createElement('pre');
    let code = document.createElement('code');
    pre.append(code);
    code.innerText = JSON.stringify(response, null, 4);
    return pre;
}
