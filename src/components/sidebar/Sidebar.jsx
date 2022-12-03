import React,{ useState }  from 'react';
import "./Sidebar.css";
import { FiX } from 'react-icons/fi'
import {HiUserCircle} from "react-icons/hi"
import JsonList from "../../dummy-data-sidebar.json"
import JsonListuz from "../../dummy-data-sidebarUz.json"
import JsonListru from "../../dummy-sidebarRu.json"
import { Link } from 'react-router-dom';
import {AiOutlineRight} from "react-icons/ai"
import {HiArrowLeft} from "react-icons/hi"
import { v4 as uuidv4 } from 'uuid';
import {AiFillCaretDown , AiFillCaretUp} from "react-icons/ai"
import sidebarOpen from "../../dummy-data-sidebar-open.json"
import sidebarOpenru from "../../dummy-sidebaropen-ru.json"
import sidebarOpenuz from "../../dummy-sidebaropenuz.json"
import { useTranslation } from 'react-i18next';
const Sidebar = ({isSidebarActive, setIsSidebarActive}) => {
  const [sidebarItemOpen,SidebarFun]= useState(false);
  const [sidebarItemOpenTwo,SidebarFunTwo]= useState(false);
  const [owerflowitem,owerflowFun]= useState(false);
  const { t } = useTranslation();
 



  return (

    <div className={isSidebarActive === true ? "sidebar sidebaractive" : "sidebar"}>
      <div className="title">
        <HiUserCircle className='user'/> 
        <p>
          {
            localStorage.getItem("user")?t("sidebar__title_u") +" , "+ localStorage.getItem("user")
            :<><Link className='sidebartitle_p' to="/signup">{t("sidebar__title")}</Link></>
          }</p>
      </div>
    <FiX className='icon__exit' onClick={() => {setIsSidebarActive(false)}}/>
    <div className="sidebar__items__wrapper">
      <div className="sidebar__item_one">
        <div className="item__title">
          <p>
            {t("Devices")}
          </p>
        </div>
        <div className="sidebar__lists">
          <ul key={uuidv4()}>
          {
            localStorage.getItem("lang") === "en"?
            JsonList.map(sidebarListItem =>
              sidebarListItem.one.map(sidebarchild =>
                <li key={uuidv4()}  className='sidebar__item__li'>
                  <Link key={uuidv4()} to="/" className='sidebar__item__link' id={sidebarchild.id} onClick={(e)=>{
                    localStorage.setItem("text", e.target.textContent)
                    SidebarFun(true)
                  }}>{sidebarchild.title}<AiOutlineRight/></Link>
                </li>
              )
            ):
            localStorage.getItem("lang") === "ru"?
            JsonListru.map(sidebarListItem =>
              sidebarListItem.one.map(sidebarchild =>
                <li key={uuidv4()}  className='sidebar__item__li'>
                  <Link key={uuidv4()} to="/" className='sidebar__item__link' id={sidebarchild.id} onClick={(e)=>{
                    localStorage.setItem("text", e.target.textContent)
                    SidebarFun(true)
                  }}>{sidebarchild.title}<AiOutlineRight/></Link>
                </li>
              )
            ):
            localStorage.getItem("lang") === "uz"?
            JsonListuz.map(sidebarListItem =>
              sidebarListItem.one.map(sidebarchild =>
                <li key={uuidv4()}  className='sidebar__item__li'>
                  <Link key={uuidv4()} to="/" className='sidebar__item__link' id={sidebarchild.id} onClick={(e)=>{
                    localStorage.setItem("text", e.target.textContent)
                    SidebarFun(true)
                  }}>{sidebarchild.title}<AiOutlineRight/></Link>
                </li>
              )
            ):console.log("hato")
            
          }
          </ul>
        </div>
        
      </div>
      <div className="sidebar__item_two">
        <div className="item__title">
          <p>
          {t("Department")}
          </p>
        </div>
        <div className="sidebar__lists">
          <ul key={uuidv4()} className="sidebar__owerflow">
          {
            localStorage.getItem("lang") === "en"?
            JsonList.map(sidebarListItem =>
              sidebarListItem.two.map(sidebarchild =>
                <li key={uuidv4()}  className='sidebar__item__li'>
                  <Link key={uuidv4()} to="/" className='sidebar__item__link' id={sidebarchild.id} onClick={(e)=>{
                    localStorage.setItem("text", e.target.textContent)
                    SidebarFun(true)
                  }}>{sidebarchild.title}<AiOutlineRight/></Link>
                </li>
              )
            ):
            localStorage.getItem("lang") === "ru"?
            JsonListru.map(sidebarListItem =>
              sidebarListItem.two.map(sidebarchild =>
                <li key={uuidv4()}  className='sidebar__item__li'>
                  <Link key={uuidv4()} to="/" className='sidebar__item__link' id={sidebarchild.id} onClick={(e)=>{
                    localStorage.setItem("text", e.target.textContent)
                    SidebarFun(true)
                  }}>{sidebarchild.title}<AiOutlineRight/></Link>
                </li>
              )
            ):
            localStorage.getItem("lang") === "uz"?
            JsonListuz.map(sidebarListItem =>
              sidebarListItem.two.map(sidebarchild =>
                <li key={uuidv4()}  className='sidebar__item__li'>
                  <Link key={uuidv4()} to="/" className='sidebar__item__link' id={sidebarchild.id} onClick={(e)=>{
                    localStorage.setItem("text", e.target.textContent)
                    SidebarFun(true)
                  }}>{sidebarchild.title}<AiOutlineRight/></Link>
                </li>
              )
            ):console.log("hato")
            
          }
          <li  className='sidebar__item__li'>
          <Link to="/" className='sidebar__item__link see' onClick={()=>{
            owerflowFun(true)
          }}>
            See All <AiFillCaretDown/>
          </Link>
          </li>
          </ul>
        </div>
      </div>
    </div>
    {
          sidebarItemOpen && (
            <div className='sidebar__one__open'>
              <div className="back__main__menu" onClick={()=>{
                SidebarFun(false)
                }}>
                <HiArrowLeft className="closeicon"/>
                <p>
                  {t("main_menu")}
                </p>
              </div>
              <div className="sidebar__one__open__title">
                <p>
                  {
                    localStorage.getItem("text")
                  }
                </p>
                
              </div>
              <div className="sidebar__list__open__wrapper">
              
                  <ul key={uuidv4()}>
                    {
                      localStorage.getItem("text") === "Amazon music" || localStorage.getItem("text") === "Амазонская музыка" || localStorage.getItem("text") === "Amazon musiqa" ?
                      localStorage.getItem("lang")=== "en"?
                      sidebarOpen.map(sidebarOpenn=>
                        sidebarOpenn.one.map(sidebartypes__one =>
                          sidebartypes__one.one.map(sidebarOpenone =>
                            <li>
                              <Link to="/" className='sidebarOpenLink'>
                                {sidebarOpenone.title}
                              </Link>
                            </li>
                          )
                        )
                      ):

                      localStorage.getItem("lang")=== "ru"?
                      sidebarOpenru.map(sidebarOpenn=>
                        sidebarOpenn.one.map(sidebartypes__one =>
                          sidebartypes__one.one.map(sidebarOpenone =>
                            <li>
                              <Link to="/" className='sidebarOpenLink'>
                                {sidebarOpenone.title}
                              </Link>
                            </li>
                          )
                        )
                      ):
                      localStorage.getItem("lang")=== "uz"?
                      sidebarOpenuz.map(sidebarOpenn=>
                        sidebarOpenn.one.map(sidebartypes__one =>
                          sidebartypes__one.two.map(sidebarOpenone =>
                            <li>
                              <Link to="/" className='sidebarOpenLink'>
                                {sidebarOpenone.title}
                              </Link>
                            </li>
                          )
                        )
                      ):console.log( " ")
                      :
                      localStorage.getItem("text") === "Kindle E-reader & Books" || localStorage.getItem("text") === "Kindle Электронная книга и книги" || localStorage.getItem("text") === "Kindle E-reader va kitoblar" ?
                      localStorage.getItem("lang")=== "en"?
                      sidebarOpen.map(sidebarOpenn=>
                        sidebarOpenn.one.map(sidebartypes__one =>
                          sidebartypes__one.two.map(sidebarOpenone =>
                            <li>
                              <Link to="/" className='sidebarOpenLink'>
                                {sidebarOpenone.title}
                              </Link>
                            </li>
                          )
                        )
                      ):

                      localStorage.getItem("lang")=== "ru"?
                      sidebarOpenru.map(sidebarOpenn=>
                        sidebarOpenn.one.map(sidebartypes__one =>
                          sidebartypes__one.two.map(sidebarOpenone =>
                            <li>
                              <Link to="/" className='sidebarOpenLink'>
                                {sidebarOpenone.title}
                              </Link>
                            </li>
                          )
                        )
                      ):
                      localStorage.getItem("lang")=== "uz"?
                      sidebarOpenuz.map(sidebarOpenn=>
                        sidebarOpenn.one.map(sidebartypes__one =>
                          sidebartypes__one.two.map(sidebarOpenone =>
                            <li>
                              <Link to="/" className='sidebarOpenLink'>
                                {sidebarOpenone.title}
                              </Link>
                            </li>
                          )
                        )
                      ):console.log( " ")
                      :
                      localStorage.getItem("text") === "Amazon Appstore" || localStorage.getItem("text") === "Магазин приложений Амазон" || localStorage.getItem("text") === "Amazon ilovalar do'koni" ?
                      localStorage.getItem("lang")=== "en"?
                      sidebarOpen.map(sidebarOpenn=>
                        sidebarOpenn.one.map(sidebartypes__one =>
                          sidebartypes__one.three.map(sidebarOpenone =>
                            <li>
                              <Link to="/" className='sidebarOpenLink'>
                                {sidebarOpenone.title}
                              </Link>
                            </li>
                          )
                        )
                      ):

                      localStorage.getItem("lang")=== "ru"?
                      sidebarOpenru.map(sidebarOpenn=>
                        sidebarOpenn.one.map(sidebartypes__one =>
                          sidebartypes__one.three.map(sidebarOpenone =>
                            <li>
                              <Link to="/" className='sidebarOpenLink'>
                                {sidebarOpenone.title}
                              </Link>
                            </li>
                          )
                        )
                      ):
                      localStorage.getItem("lang")=== "uz"?
                      sidebarOpenuz.map(sidebarOpenn=>
                        sidebarOpenn.one.map(sidebartypes__one =>
                          sidebartypes__one.three.map(sidebarOpenone =>
                            <li>
                              <Link to="/" className='sidebarOpenLink'>
                                {sidebarOpenone.title}
                              </Link>
                            </li>
                          )
                        )
                      ):console.log( " ")
                      :console.log("  ")
                    
              
                      
                    }
                  </ul>
                </div>
            </div>  
          )
    },
    {
      sidebarItemOpenTwo&&(
        <div className='sidebar__one__open'>
        <div className="back__main__menu" onClick={()=>{
          SidebarFunTwo(false)
          }}>
          <HiArrowLeft className="closeicon"/>
          <p>
          {t("main_menu")}
          </p>
        </div>
        <div className="sidebar__one__open__title">
          <p>
            {
              localStorage.getItem("text")
            }
          </p>
          
        </div>
        <div className="sidebar__list__open__wrapper">
            <ul key={uuidv4()}>
              {
                localStorage.getItem("text") === "Electronics"? sidebarOpen.map(sidebarOpenn=>
                  sidebarOpenn.two.map(sidebartypes__one =>
                    sidebartypes__one.one.map(sidebarOpenone =>
                      <li>
                        <Link to="/" className='sidebarOpenLink'>
                          {sidebarOpenone.title}
                        </Link>
                      </li>
                    )
                  )
                ) :
                localStorage.getItem("text") === "Computers"? sidebarOpen.map(sidebarOpenn=>
                  sidebarOpenn.two.map(sidebartypes__one =>
                    sidebartypes__one.two.map(sidebarOpenone =>
                      <li>
                        <Link to="/" className='sidebarOpenLink'>
                          {sidebarOpenone.title}
                        </Link>
                      </li>
                    )
                  )
                ):
                localStorage.getItem("text") === "Amazon Appstore"? sidebarOpen.map(sidebarOpenn=>
                  sidebarOpenn.one.map(sidebartypes__one =>
                    sidebartypes__one.three.map(sidebarOpenone =>
                      <li>
                        <Link to="/" className='sidebarOpenLink'>
                          {sidebarOpenone.title}
                        </Link>
                      </li>
                    )
                  )
                ):console.log("erorr")

              }
            </ul>
          </div>
      </div>  
      )
    },
    {
      owerflowitem&& (
        <>
          <ul className='owerflowul'>
            {
              JsonList.map(sidebarListItem =>
                sidebarListItem.seeAll.map(sidebarchild =>
                  <li key={uuidv4()}  className='sidebar__item__li'>
                    <Link key={uuidv4()} to="/" className='sidebar__item__link' id={sidebarchild.id} onClick={(e)=>{
                      localStorage.setItem("text", e.target.textContent)
                      SidebarFunTwo(true)
                    }}>{sidebarchild.title}<AiOutlineRight/></Link>
                  </li>
                )
              )
            }
            <li className='sidebar__item__li'>
              <Link to="/" className='sidebar__item__link see' onClick={()=>{
              owerflowFun(false)
              }}>
              See All <AiFillCaretUp/>
              </Link>
            </li>
          </ul>
        </>
      )
        
    }
    </div>
  )
}

export default Sidebar