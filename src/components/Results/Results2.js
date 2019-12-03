import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import RedoIcon from '@material-ui/icons/Redo';
import FoodResults from "./FoodResults.js";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft:"10px",
        marginRight:"10px",
        flexGrow: 1,
        display: 'flex',
    },
    background:{
        backgroundColor:"#f4f4f4"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#2E0854",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: "#2E0854",
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,

        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    pos: {
        color:"#2E0854",
        textTransform: "uppercase",
        paddingBottom:"10px",
    },
    header: {
        textTransform: "uppercase",
    },
    textBox: {
        paddingBottom:"10px"
    }
}));

export default function Results2() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <div className={classes.background}>
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        What2Eat
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Typography className={classes.header}
                    style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        transform: "rotate(180deg)",
                        margin:"10%",
                        marginTop:"40px",
                        marginBottom:"20px",
                        fontSize: "35px"
                    }}>Happiness
                </Typography>
                <Card className={classes.textBox}>
                    <CardContent>
                        <Typography className={classes.pos} color="textSecondary">
                            Why
                        </Typography>
                        <Typography variant="body2" component="p">
                            Happiness was detected in<br /> the text that you have <br />inputted. To maintain your <br />happiness eat the foods <br />showcased on this <br />page. To find where you can <br />find theses foods in meals in <br />restaurants near you click <br />on the learn more button <br />found under each food.
                        </Typography>
                    </CardContent>
                </Card>

                <Divider />
                <List>
                    {['Redo'].map((text, index) => (

                        <ListItemLink href="/">
                            <ListItemIcon disableRipple="true">{<RedoIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemLink>


                    ))}
                    {['Home'].map((text, index) => (

                        <ListItemLink href="/">
                            <ListItemIcon disableRipple="true">{<HomeIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemLink>


                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            <FoodResults/>
            </main>
        </div>
        </div>
    );
}