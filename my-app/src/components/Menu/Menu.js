import React from 'react';

import classes from './Menu.css';
import MenuItem from './MenuItem'
const Menu = () => {
  return (
    <div className="menu">
      <MenuItem text="الصفحة الرئيسية" link="/"/>

      <MenuItem text="اتصل بي"link="/contact_me"/>

      <MenuItem text="من أنا؟" link="/whoAmI"/>

    </div>
  );
};

export default Menu ;
