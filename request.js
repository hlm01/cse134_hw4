export async function putRequest(data) {
    const options = { method: 'PUT', body: data };
    let request = new Request('https://httpbin.org/put', options);
    let response = await fetch(request);
    return await handleResponse(response);
}

async function handleResponse(response) {
    if (response.ok) {
        return await response.json();
    } else {
        return 'error: ' + response.status;
    }
}

export async function getRequest(data) {
    const query = new URLSearchParams(data).toString();
    let response = await fetch('https://httpbin.org/get?' + query);
    return await handleResponse(response);
}

export async function deleteRequest(data) {
    const query = new URLSearchParams(data).toString();
    let request = new Request('https://httpbin.org/delete?' + query, {
        method: 'DELETE',
    });
    let response = await fetch(request);
    return await handleResponse(response);
}

export async function postRequest(data) {
    const options = { method: 'POST', body: data };
    let request = new Request('https://httpbin.org/post', options);
    let response = await fetch(request);
    return await handleResponse(response);
}
