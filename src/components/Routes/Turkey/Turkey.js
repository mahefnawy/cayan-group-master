import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Turkey.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Body from './Body/Body.js';

import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Footer from '../../Reusable/Footer/Footer.js';



let actions = require('../../../actions');


class Turkey extends Component {
  render() {
            const content = this.props.content;
            const data = content.page.turkey;
            const switchLanguage = this.props.switchLanguage;
    return (
      <div className="turkey-page">
        <Action />
        <Navbar data={content.page.navbar} switchLanguage={switchLanguage}/>

              <div className="turkey-outter">
                <div className="container">
                  <div className="row">
                    <div className="sections residency">

                        <div className="sections-text residency row">
                          <h5 className={data.classTitle}>{data.titleResidency}</h5>
                          <hr/>
                          <img className={"float-image " + data.classImage} src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1524486498/Turkey/turkey1.jpg"/>
                          <h6 className={data.classText}>{data.paragraphResidency1}</h6>

                          <p className={data.classText}>{data.paragraphResidency1_1}</p>
                          <h6 className={data.classText}>{data.paragraphcResidency2}</h6>
                          <p className={data.classText}>{data.paragraphResidency2_1}</p>
                          <h6 className={data.classText}>{data.paragraphResidency3}</h6>
                          <p className={data.classText}>{data.paragraphResidency3_1}</p>
                          <h6 className={data.classText}>{data.paragraphResidency4}</h6>
                          <p className={data.classText}>{data.paragraphResidency4_1}</p>

                          <p className={data.classText}>{data.source}: <a href='https://www.8rbtna.com/تفاصيل-المعلومة-1/جميع-انواع-الاقامات-و-كيفية-استخراجها-في-تركيا–206'>www.8rbtna.com</a></p>
                        </div>
                        <div className="sections-text citizenship row">
                          <h5 className={data.classTitle}>{data.titlecitizenship}</h5>
                          <hr/>
                          <img className={"float-image " + data.classImage} src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1524486498/Turkey/turkey2.jpg"/>
                          <p className={data.classText}>{data.paragraphcitizenship1}</p>
                          <p className={data.classText}>{data.paragraphcitizenship2}</p>
                          <p className={data.classText}>{data.paragraphcitizenship3}</p>
                          <p className={data.classText}>{data.paragraphcitizenship4}</p>
                          <p className={data.classText}>{data.source}: <a href='https://aa.com.tr/en/economy/new-turkish-citizenship-rules-to-encourage-investment/725992'>www.aa.com.tr</a></p>
                        </div>
                        <div className="sections-text return-on-investment row">
                          <h5 className={data.classTitle}>{data.titlereturnoninvestment}</h5>
                          <hr/>
                          <img className={"float-image " + data.classImage} src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1524486498/Turkey/turkey3.jpg"/>
                          <p className={data.classText}>{data.paragraphreturnoninvestment1}</p>
                          <p className={data.classText}>{data.paragraphreturnoninvestment2}</p>
                          <p className={data.classText}>{data.paragraphreturnoninvestment3}</p>
                          <p className={data.classText}>{data.paragraphreturnoninvestment4}</p>
                          <p className={data.classText}>{data.source}: <a href='http://www.invest.gov.tr/ar-SA/turkey/factsandfigures/Pages/Economy.aspx'>www.invest.gov.tr</a></p>
                        </div>
                    <Getintouch data={content.page.getintouch}/>
                    </div>
                    </div>
                </div>
              </div>

        <Footer data={content.page.footer}/>

      </div>
    );
  }
}

export default connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(Turkey);
