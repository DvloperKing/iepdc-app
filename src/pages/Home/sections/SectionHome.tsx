import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

const SectionHome = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { t } = useTranslation();
  const bgImage = isMobile
    ? "https://res.cloudinary.com/dwcat0xhk/image/upload/f_auto,q_auto/v1757818891/bg_desktop_ilrfbx.jpg"
    : "https://res.cloudinary.com/dwcat0xhk/image/upload/f_auto,q_auto/v1757818891/bg_desktop_ilrfbx.jpg";
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
          className="fw-bold display-4 text-uppercase"
          style={{
            fontSize: isMobile ? "2rem" : "4rem",
          }}
        >
          {t("Home.title")}
        </h1>

        <p
          className="lead  mt-2 text-uppercase"
          style={{
            textShadow: "1px 1px 0px rgba(0,0,0,1)",
            color: "#ffffffff",
          }}
        >
          {t("Home.subtitle")}
        </p>
      </div>
    </section>
  );
};

export default SectionHome;
