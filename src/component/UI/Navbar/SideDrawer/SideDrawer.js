import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return( 
     <nav className={drawerClasses}>
         <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/despre">DESPRE NOI</a></li>
            <li><a href="/menu">MENU</a></li>
            <li><a href="/galerie">GALERIE</a></li>
            <li><a href="/evenimente">EVENIMENTE</a></li>
            <li><a href="/contact">CONTACT</a></li>
         </ul>
     </nav>
    )
}

export default sideDrawer;