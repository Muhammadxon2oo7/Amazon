import React from 'react'
import c from "./First-footer.module.css"
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import US from 'country-flag-icons/react/3x2/US'
import RU from 'country-flag-icons/react/3x2/RU'
import UZ from 'country-flag-icons/react/3x2/UZ'
const FirstFooter = () => {
    const { t } = useTranslation();
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

    <div className={c.footer}>
        <div className={c.container}>
            <div className={c.list__one}>
                <p className={c.title}>
                    Get to Know Us
                </p>
                <ul>
                    <li><Link  className={c.link}>Careers</Link></li>
                    <li><Link  className={c.link}>Blog</Link></li>
                    <li><Link  className={c.link}>About Amazon</Link></li>
                    <li><Link  className={c.link}>Investor Relations</Link></li>
                    <li><Link  className={c.link}>Amazon Devices</Link></li>
                    <li><Link  className={c.link}>Amazon Science</Link></li>
                </ul>
            </div>
            <div className={c.link__two}>
                <p className={c.title}>	
                    Make Money with Us
                </p>
                <ul>
                    <li><Link  className={c.link}>Sell products on Amazon</Link></li>
                    <li><Link  className={c.link}>Sell on Amazon Business</Link></li>
                    <li><Link  className={c.link}>Sell apps on Amazon</Link></li>
                    <li><Link  className={c.link}>Become an Affiliate</Link></li>
                    <li><Link  className={c.link}>Advertise Your Products</Link></li>
                    <li><Link  className={c.link}>Self-Publish with Us</Link></li>
                    <li><Link  className={c.link}>Host an Amazon Hub</Link></li>
                    <li><Link  className={c.link}>See More Make Money with Us</Link></li>
                </ul>
            </div>
            <div className={c.three}>
                <p className={c.title}>	
                    Amazon Payment Products
                </p>
                <ul>
                    <li><Link  className={c.link}>Amazon Business Card</Link></li>
                    <li><Link  className={c.link}>Shop with Points</Link></li>
                    <li><Link  className={c.link}>Reload Your Balance</Link></li>
                    <li><Link  className={c.link}>Amazon Currency Converter</Link></li>
                </ul>
            </div>
            <div className={c.link__four}>
                <p className={c.title}>	
                    Let Us Help You
                </p>
                <ul>
                    <li><Link  className={c.link}>Amazon and COVID-19</Link></li>
                    <li><Link  className={c.link}>Your Account</Link></li>
                    <li><Link  className={c.link}>Your Orders</Link></li>
                    <li><Link  className={c.link}>Shipping Rates & Policies</Link></li>
                    <li><Link  className={c.link}>Returns & Replacements</Link></li>
                    <li><Link  className={c.link}>Manage Your Content and Devices</Link></li>
                    <li><Link  className={c.link}>Amazon Assistant</Link></li>
                    <li><Link  className={c.link}>Help</Link></li>
                </ul>
            </div>
        </div>
        <div className={c.footer__bottom}>
            <div className={c.bottom__wrapper}>
                <div className="logo">
                    <img className={c.logo} src={logo} alt="" />
                </div>
        <div className={c.change__language}>
        {
          localStorage.getItem("lang")=== "en"?
          <US title="United States" className={c.flag} style={{width:"25px"}}/>
          :
          localStorage.getItem("lang")=== "ru"?
          <RU title="United States" className={c.flag} style={{width:"25px"}}/>
          :
          localStorage.getItem("lang")=== "uz"?
          <UZ title="United States" className={c.flag} style={{width:"25px"}}/>
          :console.log("error")
        }
        <select onChange={changeWebsiteLang} className={c.selectt}>
         {

          langs.map(langItem => 
            <option className={c.option}   selected={localStorage.getItem("lang") === langItem ? true  : false} key={uuidv4()} value={langItem}>{langItem.toUpperCase()}</option>  
          )
         }
        </select>
      </div>
            </div>
        </div>
    </div>
  )
}

export default FirstFooter   