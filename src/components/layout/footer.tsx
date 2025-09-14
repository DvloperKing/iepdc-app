import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer
      id="connect"
      className="text-black pt-5 pb-4"
      style={{ backgroundColor: "#585959" }}
    >
      <div className="container">
        <div className="row">
          {/* Contacto */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">{t("footer.contact")}</h5>
            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-telephone-fill me-3 fs-4 mt-1"></i>
              <div>
                <h6 className="mb-1">{t("footer.phone")}</h6>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="tel:2142023934"
                      className="text-black text-decoration-none d-block"
                    >
                      214-202-3934
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-3 d-flex">
              <i className="bi bi-envelope-fill me-3 fs-4"></i>
              <div>
                <h6 className="mb-1">{t("footer.email")}</h6>
                <a
                  href="mailto:Pandelcielo@iepdc.com"
                  className="text-black text-decoration-none"
                >
                  Pandelcielo@iepdc.com
                </a>
              </div>
            </div>
            <div className="d-flex">
              <i className="bi bi-geo-alt-fill me-3 fs-4"></i>
              <div>
                <h6 className="mb-1">{t("footer.address")}</h6>
                <a
                  href="https://maps.apple.com/?q=825+Murdock+Rd,Dallas,TX,75217"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  825 Murdock Rd, Dallas, TX 75217, Estados Unidos{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Redes Sociales */}
        <div className="col-md-4 mb-4 text-md-start text-center">
          <h5 className="fw-bold mb-3">{t("footer.social")}</h5>
          <div className="d-flex gap-3 justify-content-md-start justify-content-center">
            <a
              href="https://www.facebook.com/pan.delcielo.75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black fs-4"
              title="Facebook"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UC9eIeVm13jYAoBUUtbZtLqA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black fs-4"
              title="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-light opacity-25" />
      <div className="text-center small mt-3">
        <p className="mb-0 text-black fw-bold">
          © {currentYear} | IEPDC. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
