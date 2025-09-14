import "bootstrap-icons/font/bootstrap-icons.css";
import { useTranslation } from "react-i18next";
import "../../assets/styles/header.css";

/** COMPONENTE HEADER DESKTOP **/
function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <button
          className="nav-link border-0 bg-transparent d-flex align-items-center gap-1 fw-bold"
          style={{ color: "#8c8c8c" }}
          onClick={toggleLanguage}
        >
          <i className="bi bi-globe"></i>
          {i18n.language === "en" ? "EN | ES" : "ES | EN"}
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold">
            <li className="nav-item">
              <span className="nav-link ">{t("home")}</span>
            </li>
            <li className="nav-item">
              <span className="nav-link ">{t("about")}</span>
            </li>
            {/* <li className="nav-item">
              <span className="nav-link ">{t("home")}</span>
            </li>
            <li className="nav-item">
              <span className="nav-link ">{t("home")}</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">{t("home")}</span>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
