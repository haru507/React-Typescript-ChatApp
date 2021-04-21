import React, { useState, useCallback } from "react";
import { TextInput, PrimaryButton } from "../components/UIkit";

const Chats = () => {
    const [message, setMessage] = useState('')

    const sendMessage = useCallback( (e) => {
        setMessage(e.target.value)
    }, [])

    return(
        <>
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
                label={"メッセージを送信"}
                onClick={ () => console.log(message)}
            />
        </>
    )
}

export default Chats