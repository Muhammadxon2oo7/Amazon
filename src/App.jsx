import './App.css';
import Header from './components/header/Header'
import MiniHeader from './components/mini-header/MiniHeader';
import { Backtotop, Overlay } from './utils';
import Routes from './routes';
import Sidebar from './components/sidebar/Sidebar';
import { useState, useEffect } from 'react';
import FirstFooter from './components/first-footer/FirstFooter';
import LastFooter from './components/last-Footer/LastFooter';
function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isNavbarSearchActive, setIsNavbarSearchActive] = useState(false);
  useEffect(() => {
    if(isSidebarActive || isNavbarSearchActive){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [isSidebarActive, isNavbarSearchActive])
  return (
    <div>
      <Header setIsNavbarSearchActive={setIsNavbarSearchActive}/>
      <MiniHeader setIsSidebarActive={setIsSidebarActive}/>
      <Sidebar isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive}/>
      <Routes/>
      <Backtotop/>
      <FirstFooter/>
      <LastFooter/>
      {isSidebarActive && <Overlay type="sidebar" state={isSidebarActive} callback={setIsSidebarActive}/>}
      {isNavbarSearchActive && <Overlay type="navbar" state={isNavbarSearchActive} callback={setIsNavbarSearchActive}/>}
    </div>
  );
}

export default App;