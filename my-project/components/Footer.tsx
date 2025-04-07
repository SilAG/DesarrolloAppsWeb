import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTiktok, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white px-4 py-3 font-['Press_Start_2P'] text-[10px]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Texto izquierda */}
        <p className="flex items-center">Gracias por su confianza!</p>

        {/* Texto derecha + íconos */}
        <div className="flex items-center gap-3">
          <span className="flex items-center">Contáctenos!</span>

          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebookF} className="text-white text-xl" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} className="text-white text-xl" />
          </a>
          <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faTiktok} className="text-white text-xl" />
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faYoutube} className="text-white text-xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}
