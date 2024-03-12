import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAnmFcz8YNl_Q-Vylo5vb90ubxYeQve2PQ",
  authDomain: "diariobd-cbfcc.firebaseapp.com",
  projectId: "diariobd-cbfcc",
  storageBucket: "diariobd-cbfcc.appspot.com",
  messagingSenderId: "784117642756",
  appId: "1:784117642756:web:28e897f72d762b37422751",
  measurementId: "G-7LJHXRD260"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
