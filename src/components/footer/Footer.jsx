import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h6>ENVIOS A TODO EL PAIS</h6>

      </div>
      <div className="footer-sns">
        <div className="design-by">REDES SOCIALES</div>
        <div className="sns-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram instagram "></i></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook" ></i>
          </a>

          <a href="mailto:@mail.com"
            target="_blank"
            rel="noreferrer">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <a href="https://wa.me/+" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp whatsapp"></i></a>


        </div>
        <div className="footer-contact">

          <h5>BUENOS AIRES </h5>

          <h5>©Diseñado por Dany</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;