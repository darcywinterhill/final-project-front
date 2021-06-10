import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import PaletteIcon from '@material-ui/icons/Palette'
import PersonIcon from '@material-ui/icons/Person'
import EventIcon from '@material-ui/icons/Event'
import MessageIcon from '@material-ui/icons/Message'
import HomeIcon from '@material-ui/icons/Home'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import styled from 'styled-components/macro'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const MiniDrawer = ({ header, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          style={{
            backgroundColor: '#581314',
            height: '100px'
          }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon 
              style={{
                fontSize: '35px'
              }}/>
          </IconButton>
          <Typography
            variant='h1'
            noWrap
              style={{
                fontFamily: 'Noto Serif SC',
                fontSize: '30px',
                fontWeight: 'bolder'
              }}
          >
            TANTVERK
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
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
      >
        <div 
          style={{
            backgroundColor: '#2a2522',
            height: '100px'
          }}
          className={classes.toolbar}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? 
            <ChevronRightIcon
              style={{
                color: '#ffffff',
                fontSize: '35px'
              }}
            /> :
            <ChevronLeftIcon
              style={{
                color: '#ffffff',
                fontSize: '35px'
              }}
            />}
          </IconButton>
        </div>
        <Divider />
        <List>

        <NavLink to='/'>
          <ListItem
            button
            key='HEM'
            style={{backgroundColor: '#bc0a1e'}}
          >
            <ListItemIcon>
              <HomeIcon style={{color: '#ffffff'}} />
            </ListItemIcon>
            <ListItemText
             primary='HEM'
             style={{color: '#ffffff'}}
            />
          </ListItem>
        </NavLink>

        <NavLink to='/collage'>
          <ListItem 
            button
            key='HANTVERK'
            style={{backgroundColor: '#d6c667'}}
          >
            <ListItemIcon>
              <PaletteIcon style={{color: '#ffffff'}}/>
            </ListItemIcon>
            <ListItemText
              primary='HANTVERK'
              style={{color: '#ffffff'}}
            />
          </ListItem>
        </NavLink>

        <NavLink to='/about'>
          <ListItem
           button
           key='OM'
           style={{backgroundColor: '#f65f69'}}
          >
            <ListItemIcon>
              <PersonIcon
                style={{color: '#ffffff'}}
              />
            </ListItemIcon>
            <ListItemText
              primary='OM'
              style={{color: '#ffffff'}}
            />
          </ListItem>
        </NavLink>

        <NavLink to='/events'>
          <ListItem
            button
            key='SEVÄRT'
            style={{backgroundColor: '#e70410'}}
          >
            <ListItemIcon>
              <EventIcon 
                style={{color: '#ffffff'}}
              />
            </ListItemIcon>
            <ListItemText
              primary='SEVÄRT'
              style={{color: '#ffffff'}}
            />
          </ListItem>
        </NavLink>

        <NavLink to='/bulletin'>
          <ListItem
            button
            key='ANSLAGSTAVLA'
            style={{backgroundColor: '#70731b'}}
          >
            <ListItemIcon>
              <MessageIcon
                style={{color: '#ffffff'}}
              />
            </ListItemIcon>
            <ListItemText
              primary='ANSLAGSTAVLA'
              style={{color: '#ffffff'}}
            />
          </ListItem>
        </NavLink>

        <MailLink href='mailto:darcy.winterhill@gmail.com'>
          <ListItem
            button
            key='KONTAKT'
            style={{backgroundColor: '#ffffff'}}
          >
            <ListItemIcon>
              <MailOutlineIcon
                style={{color: '#2a2522'}}
              />
            </ListItemIcon>
            <ListItemText
              primary='KONTAKT'
              style={{color: '#2a2522'}}
            />
          </ListItem>
          </MailLink>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} style={{paddingTop: '100px'}} />
          {children}
      </main>
    </div>
  );
}

export default MiniDrawer

const NavLink = styled(Link)`
  color: #2a2522;
  text-decoration: none;
`
const MailLink = styled.a`
  color: #2a2522;
  text-decoration: none;
`