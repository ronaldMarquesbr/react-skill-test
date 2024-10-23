function ContactList() {
  return (
    <div className="contact-list">
      <h2>Contatos</h2>
      <p>Abaixo estão as opções para contatos</p>

      <ul>
        <li>
          <h4 className="fs-5 fw-bold">Matriz</h4>
          <p className="fs-6">
            Rua Desembargador Westphalen, 2779,
            <br />
            Curitiba, PR
          </p>
        </li>
        <li>
          <h4 className="fs-5 fw-bold">Telefone</h4>
          <p className="fs-6">+ 55 (41) 2169-8200</p>
        </li>
        <li>
          <h4 className="fs-5 fw-bold">E-mail</h4>
          <p className="fs-6">comercial@cktr.com.br</p>
        </li>
        <li>
          <h4 className="fs-5 fw-bold">Atendimento</h4>
          <p className="fs-6">Segunda a Sexta das 08:00 as 18:00 horas</p>
        </li>
      </ul>
    </div>
  );
}

export default ContactList;
