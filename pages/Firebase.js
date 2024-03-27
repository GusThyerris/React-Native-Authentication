import Firebase from 'firebase';
import 'firebase/storange';

const firebaseConfig = {
    
}
if(!Firebase.apps.length){

    Firebase.initializeApp(firebaseConfig);

}

const bdstore = Firebase.firestore();
export default bdstore;