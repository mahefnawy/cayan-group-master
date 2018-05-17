import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Contact.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';


import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Footer from '../../Reusable/Footer/Footer.js';


let actions = require('../../../actions');







class Contact extends Component {
  render() {
    const content = this.props.content;
    const data = content.page.content;
    const switchLanguage = this.props.switchLanguage;
    var pageTitle = () => {
      document.title = " Real Estate Istanbul, Turkey  | Contact "  ;

    }
    pageTitle()
    return (
      <div className="contact-us">
        <Action />
        <Navbar data={content.page.navbar} switchLanguage={switchLanguage}/>

        <div className="container contact-background">
          <div className="container contact-text">
            <div className="row">
              <h1 className={"body-h1 " + data.classTitle}>{data.title}</h1>
              <p className={data.classTitle}>{data.paragraph}</p>
            </div>

          </div>
          <Getintouch data={content.page.getintouch}/>
        </div>

        <Footer data={content.page.footer}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(Contact);
