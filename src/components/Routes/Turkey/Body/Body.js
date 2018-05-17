import React, { Component } from 'react';

import './Body.css';
import Getintouch from '../../../Reusable/Getintouch/Getintouch.js';

class Body extends Component {
  render() {
    const data = this.props.data;
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;
    return (
      <div className="turkey-outter">
        <div className="container">
          <div className="row">
            <div className="sections residency">

                <div className="sections-text residency row">
                  <h5 className={data.classTitle}>{data.titleResidency}</h5>
                  <hr/>
                  <img className={"float-image " + data.classImage} src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1524486498/Turkey/turkey1.jpg"/>
                  <p className={data.classText}>{data.paragraphResidency}</p>
                </div>
                <div className="sections-text citizenship row">
                  <h5 className={data.classTitle}>{data.titlecitizenship}</h5>
                  <hr/>
                  <img className={"float-image " + data.classImage} src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1524486498/Turkey/turkey2.jpg"/>
                  <p className={data.classText}>{data.paragraphcitizenship}</p>
                </div>
                <div className="sections-text return-on-investment row">
                  <h5 className={data.classTitle}>{data.titlereturnoninvestment}</h5>
                  <hr/>
                  <img className={"float-image " + data.classImage} src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1524486498/Turkey/turkey3.jpg"/>
                  <p className={data.classText}>{data.paragraphreturnoninvestment}</p>
                </div>

            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Body;
