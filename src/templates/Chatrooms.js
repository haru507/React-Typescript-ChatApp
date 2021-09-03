import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    body: {
        display: 'flex',
        marginLeft: 30,
        marginBottom: 5,
        marginTop: 5
    },
    text: {
        lineHeight: 'normal',
        color: '#fff'
    },
    box: {
        marginLeft: 10,
    }
});

const Chatrooms = () => {
    const classes = useStyles();

    return(
        <>
        <Link to="/chat">
            <div className={classes.body}>
                <Avatar>H</Avatar>
                <div className={classes.box}>
                    <p className={classes.text}>
                        Name<br />
                        subText
                    </p>
                </div>
            </div>
        </Link>
            <div className={classes.body}>
                <Avatar>H</Avatar>
                <div className={classes.box}>
                    <p className={classes.text}>
                        Name<br />
                        subText
                    </p>
                </div>
            </div>
        </>
    )
}

export default Chatrooms