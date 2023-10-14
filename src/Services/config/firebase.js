// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyArnet-hj5jlK9EtdbrlMKZKIZK0GBC2IY',
  authDomain: 'pintrest-clone-c3ed0.firebaseapp.com',
  projectId: 'pintrest-clone-c3ed0',
  storageBucket: 'pintrest-clone-c3ed0.appspot.com',
  messagingSenderId: '439366656493',
  appId: '1:439366656493:web:8061c0da7896ed1add87e4',
  measurementId: 'G-FJL76649LZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
