let posts = [
    {
        title: 'My First Post',
        date: '2020-04-03',
        summary: 'This is the first post',
    },
    {
        title: 'Day 2',
        date: '2022-04-05',
        summary: 'Today there was a 33% chance of rain.',
    },
];
window.addEventListener('DOMContentLoaded', main);

function main() {
    let existing = localStorage.getItem('crudBl0g');
    if (existing !== null) {
        posts = JSON.parse(existing);
    }
    makeList();
    let addBtn = document.getElementById('add');
    let addBox = document.getElementById('add-dialog');

    addBtn.addEventListener('click', () => addBox.showModal());
    addBox.addEventListener('close', () => add(addBox, posts));
}

function makeList() {
    let list = document.querySelector('#blog-list');
    list.innerHTML = '';
    localStorage.setItem('crudBl0g', JSON.stringify(posts));
    posts.forEach((p) => {
        let newPost = document.createElement('li');
        newPost.innerHTML = `<p><strong>${p.title}</strong> (${p.date}) - ${p.summary}</p>`;
        list.append(newPost);
        let editButton = document.createElement('button');
        editButton.innerHTML = '<img src="media/edit-outline.png" alt="edit">';
        editButton.addEventListener('click', () => edit(p));

        let buttonGroup = document.createElement('div');
        buttonGroup.className = 'modify';
        let delButton = document.createElement('button');
        delButton.innerHTML =
            '<img src="media/trash-2-outline.png" alt="delete">';

        delButton.addEventListener('click', () => remove(p));
        buttonGroup.append(delButton);
        buttonGroup.append(editButton);
        newPost.append(buttonGroup);
    });
}

function add(addBox, posts) {
    let list = document.querySelector('#blog-list');
    let addForm = document.getElementById('add-form');
    if (addBox.returnValue === 'OK') {
        let newPost = {
            title: document.getElementById('new-title').value,
            date: document.getElementById('date').value,
            summary: document.getElementById('summary').value,
        };
        posts.push(newPost);
        makeList();
        addForm.reset();
    }
}

function edit(post) {
    console.log(post.title);
    let editBox = document.getElementById('edit-dialog');
    let editTitle = document.getElementById('edit-title');
    let editDate = document.getElementById('edit-date');
    let editSummary = document.getElementById('edit-summary');
    [editTitle.value, editDate.value, editSummary.value] = [
        post.title,
        post.date,
        post.summary,
    ];
    editBox.addEventListener('close', () => {
        if (editBox.returnValue === 'OK') {
            [post.title, post.date, post.summary] = [
                editTitle.value,
                editDate.value,
                editSummary.value,
            ];
            makeList();
        }
    });
    editBox.showModal();
}

function remove(p) {
    let deleteBox = document.getElementById('confirm-dialog');
    deleteBox.showModal();
    deleteBox.addEventListener('close', () => {
        if (deleteBox.returnValue === 'Y') {
            posts = posts.filter((x) => x !== p);
            makeList();
        }
    });
}
