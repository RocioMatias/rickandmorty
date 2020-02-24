
import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Typography, Toolbar, InputBase } from "@material-ui/core";
// import SearchIcon from '@material-ui/icons/Search';


function Nav(props) {

    const { classes } = props;

    return (
        <AppBar className="classes.NavColor" position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" component="p">Rick and Morty</Typography>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'Search' }}
                />

            </Toolbar>
        </AppBar>
    )
}


export default withStyles({
    NavColor: {
        backgroundColor: '#1C2833'
    }
})(Nav)