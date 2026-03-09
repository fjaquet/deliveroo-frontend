// import logo from "../assets/img/Deliveroo-logo.png";
import logo from "../assets/img/1280px-Deliveroo_logo.svg.png";

const Header = ({ name, description, picture }) => {
  return (
    <header>
      <div className="header__topBar">
        <div className="container">
          <img className="header__logo" src={logo} alt="logo" />
        </div>
      </div>

      <div className="container">
        <div className="header__content">
          <div className="header__text">
            <h1>{name}</h1>
            <p className="header__description">{description}</p>
          </div>
          <img className="header__image" src={picture} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
