import React from "react";
import './Header.css'
import { AppBar,Grid,IconButton,InputBase,Toolbar,Badge,makeStyles, createMuiTheme } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SearchIcon from "@material-ui/icons/Search";


const useStyle = makeStyles(theme =>({
    root:{
        backgroundColor:'#fff',
        paddingLeft:'320px',
    },
    searchInput:{
        opacity:'0.6',
        padding:` 0px ${theme.spacing(1)}px`,
        fontSize:'0.8rem',
        '&:hover':{
          backgroundColor:'#f2f2f2'
    },
    '& .MuiSvgIcon-root':{
      marginRight:theme.spacing(1)
    }
  },
//   btnRoot:{
//  backgroundColor:'green'
//   },
//     btnLabel:{
//       backgroundColor:'red'
//     }

}))

const Header=()=>{
    const classes =useStyle()
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <InputBase
                placeholder="Search Topics"
                className={classes.searchInput}
                startAdornment={<SearchIcon fontSize="small" />}
              />
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsNoneIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color="primary">
                  <ChatBubbleOutlineIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <PowerSettingsNewIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );};
export default Header

