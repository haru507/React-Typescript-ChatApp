import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    useScrollTrigger,
    Slide,
    Typography,
} from "@material-ui/core";
import { Link } from 'react-router-dom'

interface Props {
    window?: () => Window;
    children?: React.ReactElement;
}

const HideOnSCroll = (props: Props) => {
    const  { children, window } = props
    const trigger =  useScrollTrigger ({ target: window ? window() : undefined });

    return(
        <Slide appear={false} direction="down" in={!trigger} >
            {children}
        </Slide>
    );
}

const AppHeaderBar = (props: Props) =>  {
    return(
        <React.Fragment>
            <CssBaseline />
            <HideOnSCroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Link to="/">
                            <Typography variant="h6">Chat App</Typography>
                        </Link>
                        <div style={{ flexGrow: 1, marginRight: 15 }}></div>
                        <Link to="/signin" style={{ marginRight: 15, fontSize: 17 }}>Login</Link>
                    </Toolbar>
                </AppBar>
            </HideOnSCroll>
        </React.Fragment>
    )
}

export default AppHeaderBar;