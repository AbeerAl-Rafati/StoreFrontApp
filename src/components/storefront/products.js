import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
//----------------------------//

import { connect } from "react-redux";
import { decreaseStock, addToCart } from "../../redux/actions";

//-------------------------------------//
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function RecipeReviewCard(props) {
  function handleClick(any) {
    props.decreaseStock(any);
    props.addToCart(any);
  }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {console.log(props.products.activeProducts)}
      {props.products.activeProducts.map((product) => {
        return (
          <Card
            className={classes.root}
            key={product.name}
            style={{
              display: "inline-block",
              margin: "4rem",
            }}
          >
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={product.name}
              subheader={product.author}
            />
            <CardMedia
              className={classes.media}
              image={product.image}
              title="damian"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: {product.price}$
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"></IconButton>
              <IconButton aria-label="share">
                <ShoppingCartIcon
                  onClick={() => {
                    handleClick(product);
                  }}
                />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>{product.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </>
  );
}

function mapStateToProps(state) {
  return {
    category: state.categories.activeCategory,
    products: state.products,
  };
}
const mapDispatchToProps = {
  decreaseStock,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeReviewCard);
