import { Chip } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

interface ListsProps {
    items: {message: string | number}[]
};

const useStyles = makeStyles( (theme: Theme) => 
    createStyles({
        root: {
            position: 'relative',
            top: 100,
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
        rightChips: {
            backgroundColor: '#00e676',
            color: 'black',
            float: 'right',
            marginBottom: 20,
        },
        leftChips: {
            backgroundColor: '#DEB887',
            color: 'black',
            paddingTop: 10,
            paddingBottom: 13,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 15
        }
    }),
)

const DisplayMessage: React.FC<ListsProps> = (props) => {

    const classes = useStyles()
    console.log(props)
    return(
        <div className={classes.root}>
        {
            props.items && props.items.map( (item, i) => (
                <div key={i}>
                    <Chip
                        label={item.message}
                        className={classes.leftChips}
                    />
                    <div className={"module-spacer--small"} />
                </div>
            ))
        }
        </div>
    )
}

export default DisplayMessage