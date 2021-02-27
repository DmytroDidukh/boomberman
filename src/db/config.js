import firebase from "firebase";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_APP_ID,
    databaseUrl: process.env.REACT_APP_DATABASE_URL,
}

firebase.initializeApp(config);
const db = firebase.database();

export const postUsersLeaderboard = ({username, time}) => {

    db.ref('leaderboard/')
        .set({
            username,
            time,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export const getUsersLeaderboard = (data) => {

    db.child("leaderboard")
        .get()
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}


