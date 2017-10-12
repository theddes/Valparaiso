import Vue from 'vue'

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: 'AIzaSyCSlbBPPJkmdrmES8Wrlus6DiICaJn8cXQ',
    authDomain: 'valparaiso-ab5d2.firebaseapp.com',
    databaseURL: 'https://valparaiso-ab5d2.firebaseio.com',
    projectId: 'valparaiso-ab5d2',
    storageBucket: 'valparaiso-ab5d2.appspot.com',
    messagingSenderId: '1103704817'
}
const Firebase = firebase.initializeApp(config)

Vue.mixin({
    created: function () {
        this.$_firebase = Firebase
    }
})
