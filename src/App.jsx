import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  navbarData,
  mainContentData,
  dealsData,
  serviceData,
  tyreSold,
} from "./utils/jsonData.js";
import NavbarSection from "./components/navbar.jsx";
import MainSection from "./components/mainSection.jsx";
import Deals from "./components/deals.jsx";
import ServiceOffered from "./components/serviceOffered.jsx";
import TyresSold from "./components/tyresSold.jsx";
import Breadcrumb from "./components/breadCrums.jsx";
import PaymentMode from "./components/paymentMode.jsx";
import Footer from "./components/footer.jsx";
const App = () => {
  return (
    <div className="main">
      <NavbarSection navbarData={navbarData} />
      <MainSection mainContentData={mainContentData} />
      <Deals dealsData={dealsData} />
      <ServiceOffered serviceData={serviceData} />
      <TyresSold tyreSold={tyreSold} />
      <Breadcrumb />
      <PaymentMode />
      <Footer />
    </div>
  );
};

export default App;
