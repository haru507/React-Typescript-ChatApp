import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles( (theme: Theme) => {
    createStyles({
        button: {
            backgroundColor: theme.palette.primary.main,
            color:  '#000',
            fontSize: 16,
            height: 30,
            marginBottom: 16,
            width: 256,
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
            }
        }
    })
})

interface Props {
    className?: string,
    variant?: string,
    onClick: () => void,
    label: string
}

const PrimaryButton: React.FC<Props> = (props) => {
    const classes =  useStyles();
    const buttonStyle = props.className

    return(
        <Button
            className={props.className}
            variant="contained"
            onClick={ () => props.onClick()}
        >
            {props.label}
        </Button>
    )
}

export default PrimaryButton