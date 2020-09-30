import React from "react";
import {AppBar, Toolbar, Typography, Badge, IconButton} from "@material-ui/core";
import ListAltIcon from '@material-ui/icons/ListAlt';
import BackspaceIcon from '@material-ui/icons/Backspace';

const Header = ({count, clear}) =>{
    const styles = {
        title: {
            marginLeft: 24,
            flex: 1
        }
    }
    return (
        <AppBar position='static'>
            <Toolbar>
                <Badge badgeContent={count} color="secondary">
                    <ListAltIcon/>
                </Badge>
                <Typography variant="h6" style={styles.title}>
                    React To Do
                </Typography>
                <IconButton onClick={clear} color="inherit">
                  <BackspaceIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
