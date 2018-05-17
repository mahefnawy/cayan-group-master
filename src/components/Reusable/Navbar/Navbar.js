import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import '../../../data/content.json'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const content = require('../../../reducer');

class Navbar extends Component {
    state = {
    selectedOption: 'USD',
  }
  // let switchCurrency = this.props.switchCurrency

  handleChange = (selectedOption) => {

    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);

  }
  showSettings (event) {
    event.preventDefault();

  }
  render() {

        const { selectedOption } = this.state;
        const content = this.props.content;
        const data = this.props.data;
        let switchLanguage = this.props.switchLanguage;

    return (
      <div id="navbar-id">
        <i onClick={ this.showSettings } className="material-icons sidenav-trigger right"></i>
        <Menu className={data.class}>
          <img className="sidenav-logo" src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1522222933/other/home-page-logo.png" alt="cayan group logo"/>
          <li className="link-wrapper">
            <NavLink activeClassName="selected" className="menu-item" exact to="/">{data.home}</NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink activeClassName="selected" className="menu-item" exact to="/projects">{data.projects}</NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink activeClassName="selected" className="menu-item" exact to="/services">{data.services}</NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink activeClassName="selected" className="menu-item" exact to="/about">{data.about}</NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink activeClassName="selected" className="menu-item" exact to="/contact">{data.contact}</NavLink>
          </li>

        </Menu>
        <div className="navbar-fixed ">
          <nav className="normal-nav">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo"><img className="responsive-img col s2" src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1522221061/other/logo-nav.png" alt="cayan group logo"/></a>

              <ul className={"nav-links center hide-on-med-and-down  col s6 " + data.class}>

                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link" exact to="/">{data.home}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/projects">{data.projects}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/services">{data.services}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/about">{data.about}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/contact">{data.contact}</NavLink>
                </li>

              </ul>
              <ul className="right hide-on-med-and-down language col s4">
                <li className="dropdown-button right"><a onClick={switchLanguage.bind(this,'en')} className="language-a">Eng</a></li>
                <li className="dropdown-button right"><a onClick={switchLanguage.bind(this,'ar')} className="language-a">عربي</a></li>
                <li className="currency">

                </li>
                <li className="right callus">
                  <a className="left" href="#contact-section">{data.callus}</a>
                </li>
              </ul>
              {/*
              <Select
                      name="form-field-name"
                      value={selectedOption}
                      onChange={this.handleChange}
                      placeholder= '$'
                      options={[
                        { value: 'USD', label: 'USD' },
                        { value: 'TRY', label: 'TRY' },
                        { value: 'SAR', label: 'SAR' },
                        { value: 'AED', label: 'AED' },
                      ]}
                    />
*/}
            </div>

          </nav>
        </div>

      </div>
    );
  }

}

export default Navbar;
