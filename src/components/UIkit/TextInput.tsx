import React from 'react'
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'

const useStyles  = makeStyles({
    full:  {
        marginBottom: 16,
    },
    half: {
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 16,
        minWidth:  130,
        width: 'calc(50% -16px)'
    }
})

type Props =  {
    // ここで props の型を定義していく。
    fullWidth: boolean,
    label: string,
    multiline: boolean,
    required: boolean,
    rows: number,
    value: string | number,
    type: string,
    autoComplete?: string,
    onChange: (e: any) => void
}

const TextInput: React.FC<Props> = (props) =>  {
    const classes = useStyles();
    const textStyle = props.fullWidth ? classes.full : classes.half 
    return(
        <TextField
            className={textStyle}
            fullWidth={props.fullWidth}
            label={props.label}
            margin="dense"
            multiline={props.multiline}
            required={props.required}
            rows={props.rows}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
        />
    )
}

export default TextInput