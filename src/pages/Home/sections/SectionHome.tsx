import { useMediaQuery } from "react-responsive";

const SectionHome = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const bgImage = isMobile
    ? "/public/img/bg_desktop.jpg"
    : "/public/img/bg_desktop.jpg";
  return (
    <section
      data-aos="fade-up"
      id="home"
      className="hero-section position-relative text-white text-center d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", zIndex: 1 }}
      />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1
          className="fw-bold display-4"
          style={{
            fontSize: isMobile ? "2rem" : "4rem",
          }}
        >
          IGLESIA EVANGELICA PAN DEL CIELO
        </h1>

        <p
          className="lead  mt-2"
          style={{
            textShadow: "1px 1px 0px rgba(0,0,0,1)",
            color: "#ffffffff",
          }}
        >
          SOMOS UN PUEBLO BUSCANDO AGRADAR A DIOS
        </p>
      </div>
    </section>
  );
};

export default SectionHome;
