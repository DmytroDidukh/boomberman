import firebase from "firebase";
require("firebase/firestore");

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_APP_ID,
    databaseUrl: process.env.REACT_APP_DATABASE_URL,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

firebase.initializeApp(config);
const db = firebase.firestore();

export const postUsersLeaderboard = (data) => {
    db.collection("leaderboard").add({
        ...data
    })
        .then((docRef) => {
            console.log("Document written");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export const getTopTenUsersLeaderboard = async () => {
    const leaderboardData = []

    const response = await db
        .collection("leaderboard")
        .orderBy('time', "asc")
        .limit(10)
        .get()


    response.docs.forEach(doc => leaderboardData.push(doc.data()))
    console.log(leaderboardData)
}
