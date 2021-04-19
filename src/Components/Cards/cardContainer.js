import React from "react";
import Cards from "./index";
import "../Cards/style.scss"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {DataArray} from "../../constants"

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
        >{
            DataArray.map((item) => (
                <Grid item xs={12} sm={6} md={4}>
                    <Cards
                        imgUrl={item.img}
                        title={item.title}
                        date={item.date}
                        text={item.text}
                    />
                </Grid>
            ))

        }

        </Grid>
    )
}

export default CardContainer