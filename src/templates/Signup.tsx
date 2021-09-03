import React, {useState, useCallback, useEffect} from 'react'
import { PrimaryButton, TextInput } from "../components/UIkit";
import { Link } from 'react-router-dom';
import { auth } from '../firebase'

const Signup = (props: any) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("")

    const inputEmail = useCallback( (e)  => {
        setEmail(e.target.value)
    },[])

    const inputUsername = useCallback( (e)  => {
        setUsername(e.target.value)
    },[])

    const inputPassword = useCallback( (e)  => {
        setPassword(e.target.value)
    },[])

    const inputConfirmPassword = useCallback( (e)  => {
        setConfirmPassword(e.target.value)
    },[])

    useEffect( () => {
        auth.onAuthStateChanged( user => {
            // ログインしている場合、ホームへリダイレクト
            user && props.history.push("/")
        })
    },  [])

    return(
        <div className="positionCorrection">
            <h2>ログイン</h2>

            <TextInput
                fullWidth={true}
                label={"メールアドレス"}
                multiline={false}
                required={true}
                rows={1}
                value={email}
                type={"email"}
                onChange={inputEmail}
            />
            <TextInput
                fullWidth={true}
                label={"ユーザ名"}
                multiline={false}
                required={true}
                rows={1}
                value={username}
                type={"text"}
                onChange={inputUsername}
            />
            <TextInput
                fullWidth={true}
                label={"パスワード（半角英数字で6文字以上）"}
                multiline={false}
                required={true}
                rows={1}
                value={password}
                type={"password"}
                onChange={inputPassword}
            />
            <TextInput
                fullWidth={true}
                label={"パスワードの再確認"}
                multiline={false}
                required={true}
                rows={1}
                value={confirmPassword}
                type={"password"}
                onChange={inputConfirmPassword}
            />
            <Link to="/signin">会員登録が既に済んでいない方はこちら</Link><br />
            <PrimaryButton
                label={"ログイン"}
                onClick={ async () => {
                    console.log(email, username, password, confirmPassword)
                    try{
                        await auth.createUserWithEmailAndPassword(email, password)
                        // できたら、Firestoreに登録
                        alert("登録が完了しました")
                        props.history.push('/signin')
                    }catch(e){
                        alert(e.message)
                    }
                }}
            />
        </div>
    )
}

export default Signup