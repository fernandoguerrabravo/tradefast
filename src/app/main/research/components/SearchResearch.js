import React, { useState } from 'react'
import { GiftGrid2 } from './GiftGrid2'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { SelectedResearch } from './SelectedResearch';
import { AddCategory } from './AddCategory';



export const SearchResearch = ({ setescondidoinicial }) => {


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



    const [categories, setCategories] = useState(

        {
            selected: [],
            keyword: '',
            hidden: false,
            hidden1: false,
            hidden2: true


        }
    );

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {categories.hidden2 ? <AddCategory setCategories={setCategories} /> : null}
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <br></br>

                {categories.hidden && <GiftGrid2

                    setCategories={setCategories}
                    category={categories.keyword}
                />

                }

            </Grid>
            <Grid item xs={12}>
                {categories.hidden1 ? <SelectedResearch setescondidoinicial={setescondidoinicial} selected={categories.selected} category={categories.keyword} /> : null}
            </Grid>

        </>
    )
}


