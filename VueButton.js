import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.esm-browser.prod.min.js';

let app = createApp({
    data() {
        return { count: 0 };
    },
    template: `<button @click="count++">
      Times Clicked: {{ count }}
    </button>`,
});

app.mount('#vue');
