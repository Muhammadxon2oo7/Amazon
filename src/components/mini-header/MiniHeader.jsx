import {React ,useState} from 'react';
import c from './MiniHeader.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import { useTranslation } from 'react-i18next';


const MiniHeader = ({setIsSidebarActive}) => {
  const { t } = useTranslation();
  const [changeLanguage, setChangeLanguage] = useState()
  const [activeLanguage, setActiveLanguage] = useState();
  const [selectedOption, setSelectedOption] = useState("all");
  const { i18n } = useTranslation();
  const changeWebsiteLang = (e) => {
    i18n.changeLanguage(e.target.value || "uz");
  }
  return (
    <div className={c.miniHeader}>
      <button className={c.AllBtn} onClick={() => {setIsSidebarActive(true)}}><AiOutlineMenu/> {t("sidebar_open")}</button>
      <ul className={c.list}>
        <li>{t("Deals")}</li>
        <li>{t("Service")}</li>
        <li>{t("Registry")}</li>
        <li>{t("Sell")}</li>
        <li>{t("Gift")}</li>
      </ul>
    </div>
  )
}

export default MiniHeader
