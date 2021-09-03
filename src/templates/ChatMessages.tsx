import { useState, useCallback, useContext, useEffect } from "react";
import { TextInput, PrimaryButton } from "../components/UIkit";
import DisplayMessage from "./DisplayMessage";
import { UserAuthContext } from '../Contexts/UserAuthContext';

interface Lists {
    message: string | number;
}

const ChatMessages: React.FC = (props: any) => {
    const [message, setMessage] = useState('')
    const [lists, setLists] = useState<Lists[]>([])
    const {state} = useContext(UserAuthContext)

    const sendMessage = useCallback( (e) => {
        setMessage(e.target.value)
    }, [])

    const pushSubmitButton = () => {
        if(message === ''){
            return
        }
        setLists( (prevLists) => [...prevLists, {message}] )
        setMessage('')
    }

    useEffect( () => {
        state.id === null && props.history.push("/signin")
    },[])

    return(
        <>
            <DisplayMessage items={lists} />

            <div className="sideBySide">
                <TextInput
                    fullWidth={true}
                    label={"メッセージを入力してください。"}
                    multiline={false}
                    required={true}
                    rows={1}
                    value={message}
                    type={"text"}
                    onChange={sendMessage}
                />
                <PrimaryButton
                    className="classes.button"
                    label={"送信"}
                    onClick={ () => pushSubmitButton() }
                />
            </div>
        </>
    )
}

export default ChatMessages