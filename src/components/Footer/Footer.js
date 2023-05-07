import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
        return (
        <footer className="Footer">
        <p>&copy; {currentYear} Brooke Finister</p>
      </footer>
    )
  }

export default Footer;