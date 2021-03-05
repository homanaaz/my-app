import React from "react";

const Header = () => (
   <div className="">
	 <div className="header-container">
	 
        <div className="header-title-section">
		<div>
		  <a className="header-title-item">Momentio</a>
		</div>
		<div className="header-menu-item menu-item-sm">
            <button className="secondary-button-sm"><span className="menu-button-icon"></span>Menu</button>
          </div>
		</div>
        <div className="header-menu-section">
		<div>
		  <a className="header-menu-item">Herrineringen</a>
		</div>
		<div>
		  <a className="header-menu-item">E-testament</a>
		</div>
         <div>
		  <a className="header-menu-item">Doneer</a>
		</div>
		<div>
		  <a className="header-menu-item">Over ons</a>
		</div>
          
          <div className="header-menu-item">
            <button className="secondary-button-sm">Aanmelden</button>
          </div>
          <div className="header-menu-item">Inloggen</div>
        </div>
      </div>
    </div>
)

export default Header;
