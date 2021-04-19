import React from "react";
import Cards from "./index";
import "../Cards/style.scss"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px",
        textAlign: 'center',
    }
});

function CardContainer() {
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={2}
            className={classes.gridContainer}
            justify="center"
        >
            <Grid item xs={12} sm={6} md={4}>
                <Cards/>
            </Grid>


            <Grid item xs={12} sm={6} md={4}>
                <Cards/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Cards/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Cards/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Cards/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Cards/>
            </Grid>
        </Grid>
    )
}

export default CardContainer