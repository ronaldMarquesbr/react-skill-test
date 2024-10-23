import svgFile from "../assets/logo.svg";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={svgFile} style={{ height: "3.75rem" }} className="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item text-center">
              <a href="#" className="nav-link list-item-link fw-semibold">
                Home
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="#" className="nav-link list-item-link fw-semibold">
                Institucional
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="#" className="nav-link list-item-link fw-semibold">
                Serviços
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="#" className="nav-link list-item-link fw-semibold">
                Projetos
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="#" className="nav-link list-item-link fw-semibold">
                Clientes
              </a>
            </li>
            <li className="nav-item text-center">
              <a href="#" className="nav-link list-item-link fw-semibold">
                Pessoas
              </a>
            </li>
            <li className="nav-item text-center">
              <a
                href="#"
                className="nav-link active list-item-link fw-semibold"
              >
                Contato
              </a>
            </li>
            <li className="nav-item text-center active">
              <a href="#" className="nav-link list-item-link fw-semibold">
                Por que a CKTR?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
