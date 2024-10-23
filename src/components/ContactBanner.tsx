import sectionImage from "../assets/contato.avif";

function SectionContent() {
  return (
    <div
      className="text-center p-5"
      style={{
        backgroundImage: `url(${sectionImage})`,
        backgroundSize: "cover",
        width: "100vw",
      }}
    >
      <h1 className="text-white">Contatos</h1>
    </div>
  );
}

export default SectionContent;
