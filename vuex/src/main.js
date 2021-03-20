import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import axios from "axios";

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store
}).$mount('#app')

axios({
    url: "http://123.207.32.32:8000/home/multidata"
}).then((result) => {
    // console.log(result);
})

import {request} from "@/network/request";

request({
    url: "/home/multidata"
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})