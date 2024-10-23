function ContactForm() {
  return (
    <div className="d-flex flex-column gap-4 contact-form-container">
      <h2>Entre em contato conosco</h2>

      <p className="fs-5 fw-light">
        Preencha os campos abaixo para entrar <br /> em contato
      </p>

      <form className="contact-form">
        <div className="mb-4">
          <input type="text" id="nameInput" placeholder="Nome" />
        </div>
        <div className="mb-4">
          <input type="email" id="emailInput" placeholder="Email" />
        </div>
        <div className="mb-4">
          <input type="text" id="titleInput" placeholder="Título" />
        </div>
        <div className="mb-4">
          <textarea name="descriptionInput" placeholder="Descrição"></textarea>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default ContactForm;
