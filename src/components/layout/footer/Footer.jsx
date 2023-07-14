import "./Footer.css";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className={"footer"}>
        <p>Creado por Laborde Juan Francisco</p>
        <p>
          <FaRegCopyright /> Copyright - Todos los derechos reservados
        </p>
        <div className="redes">
          <a
            href="https://www.facebook.com/juanfrancisco.laborde.1/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook style={{ color: "#ffffff" }} />
          </a>
          <a
            href="https://www.instagram.com/juanfranlaborde_/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram style={{ color: "#ffffff" }} />
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp style={{ color: "#ffffff" }} />
          </a>
        </div>
      </div>
    </>
  );
};
