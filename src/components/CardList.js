import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";


function CardList({ name, classes, image, to }) {

    return (
        <Card className={classes.item}>
            <CardMedia className={classes.media} image={image} />
            <CardContent>
                <Typography component="p" variant="h6"  >{name}</Typography>
                <Link className="details" to={to}>Detalles</Link>
            </CardContent>
        </Card>

    )
}

export default withStyles({
    item: {
        minWidth: "300px",
        margin: "1em",
        textAlign: "center",
        boxSizing: "border-box",
        margin:"2em"
    },
    media: {
        minHeight: "250px"
    }
})(CardList);