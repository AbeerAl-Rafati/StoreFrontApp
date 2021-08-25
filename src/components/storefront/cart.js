import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
let total = 0;
function TextFieldSizes(props) {
  const classes = useStyles();

  return (
    <div style={{ margin: "2% 20%" }}>
      {console.log(props)}
      <h3>Order Summary</h3>
      {props.cart.map((book) => {
        return (
          <div>
            {book.name}
            <span
              style={{ color: "red", marginLeft: "2rem" }}
              onClick={() => {
                // props.removeFromCart(book);
              }}
            >
              Remove
            </span>
          </div>
        );
      })}
      <h3>Total Price</h3>
      {props.cart.map((book) => {
        return (total += book.price);
      })}
      <div style={{ marginBottom: "4rem" }}></div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            label="Full name"
            id="standard-size-small"
            defaultValue="Full name"
            size="small"
          />
          <TextField
            label="Credit Card#"
            id="standard-size-small"
            defaultValue="333 222 444 444"
            size="small"
          />
        </div>
        <div>
          <TextField
            label="Address"
            id="standard-size-small"
            defaultValue="Address"
            size="small"
          />
          <TextField
            type="date"
            label="Expiration"
            id="standard-size-small"
            defaultValue=""
            size="small"
          />
        </div>
        <div>
          <TextField
            label="City"
            id="standard-size-small"
            defaultValue="City"
            size="small"
          />
          <TextField
            label="CVV"
            id="standard-size-small"
            defaultValue="222"
            size="small"
          />
        </div>
        <div>
          <TextField
            label="State"
            id="standard-size-small"
            defaultValue="State"
            size="small"
          />
        </div>
        <div>
          <TextField
            label="Zip"
            id="standard-size-small"
            defaultValue="Zip"
            size="small"
          />
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(TextFieldSizes);
