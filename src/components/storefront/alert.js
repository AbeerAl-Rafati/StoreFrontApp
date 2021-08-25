import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

import { Alert } from "@material-ui/lab";

import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions";

function SimpleAlerts(props) {
  return (
    <>
      {props.cart.map((book) => {
        return (
          <div>
            <Alert
              onClose={() => {
                // props.removeFromCart(book);
              }}
              style={{
                marginRight: "0",
                marginLeft: "90%",
                marginTop: "0",
                fontSize: "0.5rem",
              }}
            >
              {book.name}
            </Alert>
          </div>
        );
      })}
    </>
  );
}

function mapStateToProps(state) {
  return { cart: state.cart };
}
const mapDispatchToProps = { removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleAlerts);
