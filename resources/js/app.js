import $ from 'jquery';
import './bootstrap';
import VeeValidate, { Validator } from 'vee-validate';
import de from 'vee-validate/dist/locale/de';
import ar from 'vee-validate/dist/locale/ar';
import fa from 'vee-validate/dist/locale/fa';
import fr from 'vee-validate/dist/locale/fr';
import nl from 'vee-validate/dist/locale/nl';
import tr from 'vee-validate/dist/locale/tr';
import axios from 'axios';
// Require Vue
window.Vue = require('vue');
window.jQuery = window.$ = $;
window.VeeValidate = VeeValidate;
window.axios = axios;

Vue.use(VeeValidate, {
    dictionary: {
        ar: ar,
        de: de,
        fa: fa,
        fr: fr,
        nl: nl,
        tr: tr,
    },
    events: 'input|change|blur',
});

Vue.prototype.$http = axios


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Initialize Vue
const app = new Vue({
    el: '#app',
});