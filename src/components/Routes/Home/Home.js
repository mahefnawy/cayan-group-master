import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';

import ReactPixel from 'react-facebook-pixel';

import './Home.css';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Footer from '../../Reusable/Footer/Footer.js';
import Action from '../../Reusable/Action/Action.js';
import ProjectsCarousel from '../../Reusable/ProjectsCarousel/ProjectsCarousel.js';
import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Header from './Header/Header.js';
import Info from './Info/Info.js';
import Whyus from './Whyus/Whyus.js';
import Testimonial from './Testimonial/Testimonial.js';
import Turkey from './Turkey/turkey.js';
let actions = require('../../../actions');

class Home extends Component {
  render() {
    const advancedMatching = {
      em: 'eahefnawy@gmail.com'
    }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/pixel-with-ads/conversion-tracking#advanced_match
    const options = {
      autoConfig: true, // set pixel's autoConfig
      debug: false, // enable logs
    };
    ReactPixel.init('781042682039671', advancedMatching, options);
    ReactPixel.pageView(); // For tracking page view

    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;


    if (content) {
      return ( <
        div className = "home" >
        <
        Action / >
        <
        Navbar data = {
          content.page.navbar
        }
        switchLanguage = {
          switchLanguage
        }
        /> <
        Header data = {
          content.page.Home.header
        }
        /> <
        Info data = {
          content.page.Home.info
        }
        />
        <div className="container">
          <h1 className={'body-h1 '+ content.page.Home.ProjectsCarousel.classTitle}>{content.page.Home.ProjectsCarousel.title}</h1>
        </div>

        <
        ProjectsCarousel data = {
          content.page.Home.ProjectsCarousel
        }
        />
        <
        Turkey data = {
          content.page.Home.Turkey
        }

        />
        <
        Whyus data = {
          content.page.Home.whyus
        }
        /> <
        Testimonial data = {
          content.page.Home.testimonials
        }
        /> <
        Getintouch data = {
          content.page.getintouch
        }
        /> <
        Footer data = {
          content.page.footer
        }
        /> <
        /div>
      )
    } else {
      return;
    }

  }
}


export default connect(
  (state) => ({
    content: state.content
  }),
  (dispatch) => ({
    switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))
  })
)(Home);
