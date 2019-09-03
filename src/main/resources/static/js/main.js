import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/App.vue'

Vue.use(VueResource)

new Vue({
    el: '#app',
    render: a=> a(App)
})

/*



var messageApi = Vue.resource('/message{/id}');

Vue.component('message-form', {

});

Vue.component('message-row', {

});

Vue.component('messages-list', {

});

var app = new Vue({

    template:


});
*/
