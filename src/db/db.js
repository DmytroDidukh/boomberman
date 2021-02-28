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

export const postPLayerToLeaderboard = (data) => {

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

export const getTopTenPlayersLeaderboard = async (gameMode) => {
    const leaderboardData = []

    const response = await db
        .collection("leaderboard")
        .orderBy('time', "asc")
        .limit(10)
        .where('gameMode', '==', gameMode)
        .get()

    response.docs.forEach(doc => leaderboardData.push(doc.data()))
    return leaderboardData
}

export const checkPlayerExist = async (username, gameMode) => {
    const leaderboardData = []

    const response = await db
        .collection("leaderboard")
        .where('username', '==', username)
        .where('gameMode', '==', gameMode)
        .get()

    if (!response.empty) {
        const snapshot = response.docs[0];
        const data = snapshot.data();
        data.id = snapshot.id
        console.log(data)
    } else {
        console.log('not found')
    }

    //response.docs.forEach(doc => leaderboardData.push(doc.data()))
    console.log(leaderboardData)
}

export const updateExistedPlayer = (id, time) => {
    db.collection("leaderboard")
        .doc(id)
        .update(time)
        .then(() => console.log('Updated'))
        .catch((e) => console.error(e))
}


