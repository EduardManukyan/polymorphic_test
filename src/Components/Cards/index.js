import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        maxWidth: 600,

    },
    img: {
        background: '#DFDFDF 0% 0% no-repeat padding-box',
        opacity: 1,
    },
    div: {
        padding: 10,
    }
});

function Cards({
                   imgUrl,
                   title,
                   date,
                   text,
                   style,
                   imgStyle
               }) {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Card style={style} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        img={imgUrl}
                        className={classes.img}
                        component="img"
                        alt="Contemplative Reptile"
                        height="250"
                        image={imgUrl}
                        title="Contemplative Reptile"
                        style={imgStyle}
                    />
                </CardActionArea>
                <div>
                    <h3>{title}</h3>
                    <h6>{date}</h6>
                    <span>{text}</span>
                </div>
            </Card>
        </div>

    )
}

export default Cards