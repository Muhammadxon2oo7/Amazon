import logo from '../../assets/images/logo.png';
import signUpE from '../../assets/images/signup-enable.svg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import "./Header.css";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import US from 'country-flag-icons/react/3x2/US'
import RU from 'country-flag-icons/react/3x2/RU'
import UZ from 'country-flag-icons/react/3x2/UZ'
import {Link} from "react-router-dom"
function Header({setIsNavbarSearchActive}) {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("all");
  const { i18n } = useTranslation();

  const langs = [
    "uz", 
    "ru",
    "en"
  ]
  
  const changeWebsiteLang = (e) => {
    i18n.changeLanguage(e.target.value || "uz");
  }



  return (
    <header className="main-header">
      <div className="header__logo-wrapper">
        <a href="/" className="logo__link">
          <img className="header__logo" src={logo} alt="" />
        </a>
      </div>
      <div className="header__delivery-address">
        <HiOutlineLocationMarker className="address-icon" />
        <div className="delivery__location">
          <p>{t("delivery_label")}</p>
          <b>{t("country")}</b>
        </div>
      </div>
      <div className="header__search-wrapper">
        <select className="search__select" style={selectedOption.length <= 7 ? {width:`${selectedOption.length * 14}px`} : {width:`${selectedOption.length * 10}px`}} onChange={(e) => {setSelectedOption(e.target.value)}}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="personal care">Personal Care</option>
          <option value="toys & babies">Toys and Babies</option>
        </select>
        <input type="text"  className="search__input" onBlur={() => {setIsNavbarSearchActive(false)}} onFocus={() => {setIsNavbarSearchActive(true)}}/>
        <button>
          <FiSearch />
        </button>
         
      </div>
      <div className="change__language">
        {
          localStorage.getItem("lang")=== "en"?
          <US title="United States" className="flag"/>
          :
          localStorage.getItem("lang")=== "ru"?
          <RU title="United States" className="flag" />
          :
          localStorage.getItem("lang")=== "uz"?
          <UZ title="United States" className="flag" />
          :console.log("error")
        }
        <select onChange={changeWebsiteLang} className="select">
         {

          langs.map(langItem => 
            <option className='option'   selected={localStorage.getItem("lang") === langItem ? true  : false} key={uuidv4()} value={langItem}>{langItem.toUpperCase()}</option>  
          )
         }
        </select>
      </div>
      <div className='btns__wrapper'>
      <button className="sign__upBtn">
        <Link to="/signup" className="signup__link">
         {t("register")} <img src={signUpE} alt="" />
        </Link>
      </button>
      <button className="sign__upBtn more">
        <Link to="/login" className="signup__link">
        {t("Log in")} <img src={signUpE} alt="" />
        </Link>
      </button>
      </div>
    </header>
  );
}

export default Header;