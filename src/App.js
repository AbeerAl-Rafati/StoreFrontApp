import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/storefront/categories";
import Products from "./components/storefront/products";
import Cart from "./components/storefront/cart";
import Massage from "./components/storefront/alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Categories />
            <Massage />
            <Products />

            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/cart">
            <Header />
            <Cart />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
