import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

export const GifExpertApp = () => {

    const useStyles = makeStyles((theme) => ({

        root: {
            flexGrow: 1,
        },

        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,

        },

    }));

    const classes = useStyles();

    const [categories, setCategories] = useState([]);


    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}> <AddCategory setCategories={setCategories} />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <br></br>

                {
                    categories.map(category => (
                        <GiftGrid
                            key={category}
                            category={category}
                        />

                    ))
                }
            </Grid>

        </>
    )
}

export default GifExpertApp;

