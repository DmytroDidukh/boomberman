import db from "./db";

export const savePlayerToLeaderboard = (data) => {
    db.collection("leaderboard")
        .add(data)
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export const getTopTenPlayers = async (gameMode) => {
    try {
        const leaderboardData = []
        const response = await db
            .collection("leaderboard")
            .orderBy('gameTime', "asc")
            .limit(10)
            .where('gameMode', '==', gameMode)
            .get()

        response.docs.forEach(doc => leaderboardData.push(doc.data()))
        return leaderboardData
    } catch (e) {
        console.error(e)
    }
}

export const checkPlayerExist = async (username, gameMode) => {
    try {
        const response = await db
            .collection("leaderboard")
            .where('username', '==', username)
            .where('gameMode', '==', gameMode)
            .get()

        if (!response.empty) {
            const snapshot = response.docs[0];
            const data = snapshot.data();
            data.id = snapshot.id
            return data
        }

        return null
    } catch (e) {
        console.error(e)
    }
}

export const updateExistedPlayer = (id, gameTime) => {
    db.collection("leaderboard")
        .doc(id)
        .update({gameTime})
        .catch((e) => console.error(e))
}
