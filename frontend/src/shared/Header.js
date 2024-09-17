const Header = () => {
  return (
    <ul className="nav justify-content-end bg-light">
      <li className="nav-item" >
        <a className="nav-link active text-reset" aria-current="page" href="/home" >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-reset" href="/contact" >
          Contact Us
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-reset" href="/login" rel="noopener noreferrer" target="_blank" >
          Sign Up
        </a>
      </li>
    </ul>
  );
};

export default Header;
