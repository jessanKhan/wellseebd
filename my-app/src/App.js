import Header from '../src/Components/Header/header'
import AboutUs from '../src/Components/AboutUs/aboutUs'
import ContactUs from './Components/ContactUs/contactUs';
import Social from './Components/Social/social';
import Ecommerce from './Components/Ecommerce/ecommerce';
import AdminHeader from './Components/Admin/Header/header'
import { Route, Link ,Routes} from "react-router-dom";
import Home from './Components/Admin/home'

const LandingPage = () => {
  return (
    <>
    <div className="container">
      <Header />
      <AboutUs />
      <Social />
      <Ecommerce />
      <ContactUs />
      <Home />
    </div>
    </>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<Home />} />
    </Routes>
  );
}

export default App;
