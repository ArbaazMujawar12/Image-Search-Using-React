import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <div className="social-icons mb-3">
          <a href="https://www.instagram.com/i_am_aim__" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/arbaaz-mujawar-370809269" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com/arbaaz.mujawar.7" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaFacebook size={24} />
          </a>
        </div>
        <p className="mb-0">
          Copyright &copy; 2024 : Designed By <span className="text-info">ARBAAZ MUJAWAR</span>
        </p>
      </div>
    </footer>
  );
}