import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import MapImage from "../assets/mapa.jpg";

function ContactSection() {
  return (
    <div className="d-flex flex-column flex-md-row my-5 gap-lg-5 gap-4 gap-md-3 align-items-xl-start align-items-center">
      <ContactForm />
      <ContactList />
      <div>
        <img
          src={MapImage}
          alt="Mapa das localizacoes da loja"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default ContactSection;
