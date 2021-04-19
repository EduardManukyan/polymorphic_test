import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        // height:400
        // width: 370,
        // display: "inline-block",
    },
    img: {
        background: '#DFDFDF 0% 0% no-repeat padding-box',
        opacity: 1,
    },
    div: {
        padding: 10,
        // height:400

        // display: 'inline-block',
    }
});

function Cards({}) {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.img}
                        component="img"
                        alt="Contemplative Reptile"
                        height="250"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
                <div>
                    <h3>Something I need to tell you</h3>
                    <h6>MAY 16, 2016</h6>
                    <span>Mauris sed odio tincidunt, volutpat gue, commodo dui. Phasellus hendrerit condi ntum vehicula.</span>
                </div>
            </Card>
        </div>

    )
}

export default Cards