import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import c from "./Products.module.css"
import {BsStarFill,BsStarHalf} from "react-icons/bs"
import { useTranslation } from 'react-i18next';
const Explore = () => {

  const [productData, setProductData] = useState([])

  const { t } = useTranslation();
  const [changeLanguage, setChangeLanguage] = useState()
  const [activeLanguage, setActiveLanguage] = useState();
  const [selectedOption, setSelectedOption] = useState("all");
  const { i18n } = useTranslation();


  const changeWebsiteLang = (e) => {
    i18n.changeLanguage(e.target.value || "uz");
  }

  useEffect(() => {
    fetch("http://localhost:8000/v2/allproducts")
      .then(response => response.json())
      .then(data => setProductData(data))
  }, [])


  return (
    <div className={c.explore}>
      <div className={c.explore__title}>
        <p>
        {t("RESULTS")}
        </p>
        <i>
        {t("RESULTS_i")}
        </i>
      </div>
     
      <div className={c.product__cards__wrapper}>
      {
          productData.map(({image, name, _id , ratings,price

          }) =>
            <div  className={c.product__card} key={_id}>
              <Link className={c.product__card__link} to={`/explorenow/${_id}`}>
              <img src={image[0].url} alt="" />
              <h1 className={c.product__card__title}>{name}</h1>
              <div className={c.product__star}>
              {
                ratings % 1 === 0 ?
                new Array(ratings).fill("#").map(star =>
                  <BsStarFill/>
                )
                :
                <>
                {
                new Array(Math.floor(ratings)).fill("#").map(star =>
                  <BsStarFill/>
                )
                }
                <BsStarHalf/>
                </>
              }
              </div>
              <br/>
              <b className={c.product__price}>$ {price} - $ {price}</b>
              </Link>
            </div>
          )
      }
      </div>
    </div>
  )
}

export default Explore