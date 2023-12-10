import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import Homepage from './customer/pages/Homepage/Homepage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <Homepage/> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
