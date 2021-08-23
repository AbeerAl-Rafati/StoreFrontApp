import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/store/categories";
import Products from './components/store/products'

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
