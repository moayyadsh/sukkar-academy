import './App.css'
import logo from './assets/Group 21.png'

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaMapMarkerAlt,
} from 'react-icons/fa'

function App() {
  return (
    <div className="container">
      <div className="content">
        <img src={logo} alt="Sukkar Academy" className="logo" />

        <div className="buttons">

                    <a
            href="https://whatsapp.com/channel/0029Vb7sUHyHltYJBbI3fW01"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <span className="btn-text">
              Whatsapp Channel  
              </span>
            <FaWhatsapp className="icon" />
          </a>
          <a
            href="https://wa.me/message/3QXQOVTQFSLBG1"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <span className="btn-text">
             Whatsapp
            </span>
            <FaWhatsapp className="icon" />
          </a>



          <a
            href="https://www.instagram.com/sukkar.edu.academy?igsh=d2VzZGIzNHl0cW0z&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <span className="btn-text">
              Instagram
            </span>
            <FaInstagram className="icon" />
          </a>

          <a
            href="https://www.facebook.com/share/15mpGWqXqc/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <span className="btn-text">
              Facebook
            </span>
            <FaFacebook className="icon" />
          </a>

          <a
            href="https://t.me/SukkarAcademy"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <span className="btn-text">
              Telegram
            </span>
            <FaTelegram className="icon" />
          </a>
        </div>

        <a
          href="https://goo.gl/maps/i3DFrWC25vaxbBkXA?g_st=awb"
          target="_blank"
          rel="noreferrer"
          className="location-link"
        >
          <span>Academy Location</span>
          <FaMapMarkerAlt />
        </a>
      </div>
    </div>
  )
}

export default App