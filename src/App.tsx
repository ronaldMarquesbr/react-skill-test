import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ContactBanner from "./components/ContactBanner";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-md p-0 overflow-visible d-flex flex-column align-items-center">
      <Header></Header>
      <ContactBanner />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
