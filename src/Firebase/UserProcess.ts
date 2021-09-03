import {db, auth, FirebaseTimestamp} from '../firebase'

const userRef = db.collection('users')

export const signUp = (username: string, email: string, password: string, confirmPassword: string) => {
    return async () =>  {
        // バリデーション

        return auth.createUserWithEmailAndPassword(email, password)
            .then( result => {
                const user = result.user;
                if(user){
                    const uid = user.uid
                    const timestamp = FirebaseTimestamp.now()

                    const userInitialData = {
                        uid: uid,
                        username: username,
                        email: email,
                        created_at: timestamp,
                        updated_at: timestamp
                    }

                    userRef.doc(uid).set(userInitialData).then(async () => {
                        // ページ遷移
                    })
                }
            })
    }
}