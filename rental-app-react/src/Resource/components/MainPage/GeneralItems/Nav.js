// import React, { Component } from 'react';
// import NavItem from './NavItems/NavItem'
import Logo from './NavItems/Logo'
import Toggle from './NavItems/Toggle';
import {NavItem} from 'reactstrap'
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
const menus = [
  {
    name:'Home',
    to :'/',
    exact:true
  },
  {
    name:'Posts',
    to:'/list-post',
    exact:false
  },
  {
    name:'Owners',
    to:'/list-owner',
    exact:false
  },
  {
    name:'Login',
    to:'/login',
    exact:false
  },
];
const MenuLink = ({label, to , activeOnlyExact}) =>{
  return (
    <Route
      path={to}
      exact={activeOnlyExact}
      children = {({match})=>{
        let active = match ? 'active' : '';
        return (
            <li className="nav-link">
                <Link to={to}>
                    {label}
                </Link>           
            </li>
          
        )
      }}
    />
  );
}
class Nav extends Component {
    render(){

        return (
            <nav className="nav">
            <div className="nav-menu flex-row">
                    <Logo></Logo>
                    <Toggle></Toggle>
                    <div className="social text-gray">
                    <ul className="nav-items">
                        {this.showMenu(menus)}
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
    showMenu = (menus) =>{
      let result = null;
      if(menus.length >0){
        result = menus.map((menu,index)=>{
          return (
            <MenuLink
              key={index}
              label = {menu.name}
              to = {menu.to}
              activeOnlyExact = {menu.exact}
            />
          )
        })
      }
      return result;
    }
}

export default Nav;
