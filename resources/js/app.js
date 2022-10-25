import './bootstrap';

// Require Vue
window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Initialize Vue
const app = new Vue({
    el: '#app',
});