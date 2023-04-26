import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

function StartFirebase() {
    const config = {
        apiKey: "AIzaSyDXficcXq2t4vZCnU6-zpuqVdYhWgn36eg",
        authDomain: "esp-datalogger2.firebaseapp.com",
        databaseURL: "https://esp-datalogger2-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "esp-datalogger2",
        storageBucket: "esp-datalogger2.appspot.com",
        messagingSenderId: "975554010794",
        appId: "1:975554010794:web:01fdd5e3c598e48657bad3"
      };

    const app = initializeApp(config);
    return getDatabase(app);

}

export default StartFirebase;
