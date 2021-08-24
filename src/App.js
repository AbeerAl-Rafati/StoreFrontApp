import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/storefront/categories";
import Products from './components/storefront/products'

function App() {
  return (
    <>
      <Header />
      <Categories />

      <Products/>
      <Footer />
    </>
  );
}

export default App;
