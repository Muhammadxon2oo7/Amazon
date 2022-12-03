import React, { useEffect, useRef, useState } from 'react'
import c from "./Little-carusel.module.css";
import JsonImages from "../../dummy-dada-carusel-imgs.json"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import { useTranslation } from 'react-i18next';

const Littlecarusel = () => {
  const [imageCount, setImageCount] = useState(0);
  const imageCon = useRef();




  useEffect(() => {
    imageCon.current.scrollLeft = imageCount * 235;
  }, [imageCount]);

  const { t } = useTranslation();
  const [changeLanguage, setChangeLanguage] = useState()
  const [activeLanguage, setActiveLanguage] = useState();
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
    
    <div className={c.littleCarusel}>
      
      <p className={c.title} >
        {t("Top Sellers in Books for you")}
      </p>
      <button className={c.leftBtn} 
      onClick={() => {
        if (imageCount === 0) {
          setImageCount(JsonImages.length - 6);
        } else {
          setImageCount((imageCount) => imageCount - 1);
        }
      }}
      >
      <AiOutlineLeft/>
      </button>
      <div ref={imageCon} className={c.carusel__wrapper} >
      {

        JsonImages.map((caruselItem, index) =>
          <img key={index} className={c.imageO} src={caruselItem.image} alt="" ></img>
        )
        
      }      
        
      </div>
      <button className={c.rightBtn}
      onClick={() => {
        if (imageCount === JsonImages.length - 6) {
          setImageCount(0);
        } else {
          setImageCount((imageCount) => imageCount + 1);
        }
      }}
      >
        <AiOutlineRight/>
      </button>
    </div>
  )
}

export default Littlecarusel

