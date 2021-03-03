import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EmojiObjectsIcon from '../../node_modules/@material-ui/icons/EmojiObjects';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {

    return (
        <>
            <AppBar position="static" className="bg-warning">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className="iconBtn">
                       <EmojiObjectsIcon fontSize="large" /> 
                    </IconButton>
                    <Typography variant="h5">
                        <span className="brandName">Google Keep Clone</span>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;