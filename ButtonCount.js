class ButtonCount extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
        const shadow = this.attachShadow({ mode: 'open' });
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = `Times Clicked: ${this.count}`;
        shadow.append(button);
        button.addEventListener('click', () => {
            this.count++;
            button.textContent = `Times Clicked: ${this.count}`;
        });
    }
}

customElements.define('button-count', ButtonCount);
