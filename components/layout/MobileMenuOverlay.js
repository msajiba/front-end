import React, { useState } from 'react'

const MobileMenuOverlay = ({showMenu, menuCloseHandler}) => {
    const [closeMenu, setCloseMenu] = useState(false);
    const showMenuHandler = ()=>{
        setCloseMenu(!closeMenu);
        menuCloseHandler({
            closeMenu: closeMenu
        })
    }
  return (
    <div className="mobile-menu-overlay" style={{visibility: showMenu? "visible" : "", opacity: showMenu? 1: 0}} onClick={showMenuHandler}></div>
  )
}

export default MobileMenuOverlay