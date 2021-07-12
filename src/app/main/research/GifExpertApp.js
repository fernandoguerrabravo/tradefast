import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid2 } from './components/GiftGrid2'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { ListResearchTools } from './components/ListResearchTools';
import ListResearchTable from './components/ListResearchTable';
import { SearchResearch } from './components/SearchResearch';


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


    const [escondidoinicial, setescondidoinicial] = useState(

        {
            escondidoinicial: true

        }
    );

    return (
        <>
            <Grid container spacing={3}>

                <Grid item xs={12}>


                    {escondidoinicial.escondidoinicial ? <Paper className={classes.paper}><ListResearchTools setescondidoinicial={setescondidoinicial} /></Paper> : null}


                </Grid>

                <Grid item xs={12}>


                    {escondidoinicial.escondidoinicial ? <Paper className={classes.paper}><ListResearchTable /></Paper> : null}


                </Grid>

                <Grid item xs={12}>

                    {escondidoinicial.escondidoinicial ? null : <SearchResearch setescondidoinicial={setescondidoinicial} />}

                </Grid>

            </Grid>
        </>
    )
}

export default GifExpertApp;

