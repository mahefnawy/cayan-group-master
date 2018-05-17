import React, { Component } from 'react';
import './turkey.css';

import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react';
import "video-react/dist/video-react.css";
class Turkey extends Component {
  render() {
    const data = this.props.data;
    return (
            <section className="turkey">
              <div className="container">
                <div className="row">
                  <div className="video">
                    <Player
                      poster="http://res.cloudinary.com/dd5e5iszi/image/upload/c_scale,h_527,w_937/v1524315396/videos/video-poster.jpg"
                    >

                      <source src="4k istanbul video 1.mp4" />
                      <ControlBar>
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={30} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton disabled

                        />
                        <VolumeMenuButton />
                      </ControlBar>
                    </Player>
                  </div>
                  <div className="container">
                    <div className="turkey-info">
                      <h1 className={data.classTitle}>{data.title}</h1>
                      <hr />
                      <p className={data.classTitle}>{data.paragraph}</p>
                      <h1 className={data.classTitle}>{data.title2}</h1>
                      <hr />
                      <div className="turkey-info-icons col s12">
                        <div className="turkey-info-icons-each col s12 m4">
                        <a href="/Turkey">
                          <div className="icon  id"></div>
                          <div className="turkey-info-each-text">
                            <h6 className={data.classTitle}>{data.titleIcon3}</h6>
                            <hr/>
                            <p className={data.classTitle}>{data.pIcon3}</p>
                          </div>
                        </a>
                        </div>
                        <div className="turkey-info-icons-each col s12 m4">
                        <a href="/Turkey">
                          <div className="icon passport"></div>
                          <div className="turkey-info-each-text">
                            <h6 className={data.classTitle}>{data.titleIcon2}</h6>
                            <hr/>
                            <p className={data.classTitle}>{data.pIcon2}</p>
                          </div>
                        </a>
                        </div>
                        <div className="turkey-info-icons-each col s12 m4">
                        <a href="/Turkey">
                          <div className="icon graph"></div>
                          <div className="turkey-info-each-text">
                            <h6 className={data.classTitle}>{data.titleIcon1}</h6>
                            <hr/>
                            <p className={data.classTitle}>{data.pIcon1}</p>
                          </div>
                        </a>
                        </div>
                      </div>
                  </div>
                  </div>

                </div>
              </div>
            </section>
    );
  }
}

export default Turkey;
