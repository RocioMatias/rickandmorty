import React, { Fragment } from 'react';
import Card from './CardList';
import '../App.css';
import { Grid } from '@material-ui/core';

const List = ({ items }) => {

    // console.log(items)
    return (
        <Fragment>
            <Grid container justify="center">

                {items.map(i => {
                    return <Card to={`/details/${i.id}`} name={i.name} image={`${i.image}`} />
                })
                }

            </Grid>

        </Fragment>

    );
};

export default List;


