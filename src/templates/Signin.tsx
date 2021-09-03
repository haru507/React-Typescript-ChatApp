import React, {useState, useCallback, useEffect, useContext} from 'react'
import { PrimaryButton, TextInput } from "../components/UIkit";
import { Link } from 'react-router-dom';
import {UserAuthContext} from "../Contexts/UserAuthContext"

const Signin = (props: any) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { state } = useContext(UserAuthContext)

    const inputEmail = useCallback( (e)  => {
        setEmail(e.target.value)
    },[])

    const inputPassword = useCallback( (e)  => {
        setPassword(e.target.value)
    },[])

    useEffect( () => {
        state.id && props.history.push("/")
    },[])

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
                label={"パスワード"}
                multiline={false}
                required={true}
                rows={1}
                value={password}
                type="password"
                autoComplete={"current-password"}
                onChange={inputPassword}
            />
            <Link to="/signup">まだ会員登録が済んでいない方はこちら</Link><br />
            <PrimaryButton
                label={"ログイン"}
                onClick={ () => console.log(email, password) }
            />
        </div>
    )
}

export default Signin