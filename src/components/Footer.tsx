import Logo from "../assets/logo.svg";
import CertificadoA from "../assets/certificado1.avif";
import CertificadoB from "../assets/certificado2.avif";
import CertificadoC from "../assets/certificado3.avif";

function Footer() {
  return (
    <footer className="border-top d-flex" style={{ width: "100vw" }}>
      <div className="container justify-content-center align-items-md-start align-items-center my-5 py-3 d-flex flex-column flex-md-row gap-5 text-center text-md-start">
        <div className="d-flex flex-column column gap-3 align-items-md-start align-items-center">
          <img
            src={Logo}
            style={{ width: "fit-content" }}
            height="30rem"
            alt="logo CKTR"
          />
          <p className="fw-light">CKTR, a sua melhor escolha</p>
          <div>Siga nos no Instagram e Linkedin</div>
        </div>
        <div>
          <ul style={{ listStyleType: "none", lineHeight: "2rem", padding: 0 }}>
            <li className="fw-bold">
              <a
                className="link-underline link-underline-opacity-0 text-black"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="fw-bold">
              <a
                className="link-underline link-underline-opacity-0 text-black"
                href="#"
              >
                Institucional
              </a>
            </li>
            <li className="fw-bold">
              <a
                className="link-underline link-underline-opacity-0 text-black"
                href="#"
              >
                Serviços
              </a>
            </li>
            <li className="fw-bold">
              <a
                className="link-underline link-underline-opacity-0 text-black"
                href="#"
              >
                Projetos
              </a>
            </li>
            <li className="fw-bold">
              <a
                className="link-underline link-underline-opacity-0 text-black"
                href="#"
              >
                Clientes
              </a>
            </li>
            <li className="fw-bold">
              <a
                className="link-underline link-underline-opacity-0 text-black"
                href="#"
              >
                Por que a CKTR?
              </a>
            </li>
            <li className="fw-bold">
              <a
                className="link-underline link-underline-opacity-0 text-black"
                href="#"
              >
                Pessoas
              </a>
            </li>
            <li className="fw-bold">
              <a
                className="link-underline link-underline-opacity-0 text-black"
                href="#"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-column gap-3">
          <h4 className="fs-5 fw-bold ">Certificações</h4>
          <div className="d-flex flex-lg-row flex-column gap-4">
            <img height="80rem" src={CertificadoA} alt="" />
            <img height="80rem" src={CertificadoB} alt="" />
            <img height="80rem" src={CertificadoC} alt="" />
          </div>
        </div>

        <div className="d-flex flex-column gap-2">
          <strong className="fs-5">Atendimento</strong>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              lineHeight: "2.125rem",
            }}
          >
            <li className="d-flex align-items-center gap-2">
              <svg
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                ></path>
              </svg>
              <p className="fw-light m-0">comercial@cktr.com.br</p>
            </li>
            <li className="d-flex align-items-center gap-2">
              <svg
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"
                ></path>
              </svg>
              <p className="fw-light m-0">+ 55 (41) 2169-8200</p>
            </li>
            <li className="d-flex align-items-center gap-2">
              <svg
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4z"
                ></path>
              </svg>
              <p className="fw-light m-0">Trabalhe conosco</p>
            </li>
            <li className="d-flex align-items-center gap-2">
              <svg
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4zm9.5 4c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4"
                ></path>
              </svg>
              <p className="fw-light m-0">Canal de denúncias</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
