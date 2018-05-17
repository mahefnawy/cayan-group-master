import React, { Component } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
import './EachProject.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import './Header/Header.css';
import './PhotoTour/PhotoTour.css';
import './Plans/Plans.css';
import './Privileges/Privileges.css';
import './Location/Location.css';
import './overview/overview.css'
import Getintouchprojects from '../../Reusable/Getintouchprojects/Getintouchprojects.js';
import Footer from '../../Reusable/Footer/Footer.js';
import ProjectsCarousel from '../../Reusable/ProjectsCarousel/ProjectsCarousel.js';

import { projects } from '../../Data/projects';

import Slider from 'react-slick'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import GoogleMapReact from 'google-map-react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

let actions = require('../../../actions');
const AnyReactComponent = ({ marker }) => <img src={'https://res.cloudinary.com/dd5e5iszi/image/upload/v1525080534/map/map-logo.svg'}/>;
const AnyReactComponent3 = ({ marker }) => <img src={'https://res.cloudinary.com/dd5e5iszi/image/upload/v1525080534/map/taksim.svg'}/>;

const AnyReactComponent2 = ({ marker }) => <img src={'https://res.cloudinary.com/dd5e5iszi/image/upload/v1525080534/map/airport.svg'}/>;

let allProjects = projects
class EachProject extends Component {
      state = {
      selectedOption: '',
      isTop: true,
    }

    // let switchCurrency = this.props.switchCurrency
 componentDidMount() {

    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 3000;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });

      // console.log(`Selected: ${selectedOption.label}`);
      console.log(selectedOption.label)

    }

      static defaultProps = {
      center: {lat: 41.016431,lng: 28.653232},
      zoom: 11,
    };

  render() {

    const { selectedOption } = this.state;
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;
    const data = content.page.eachProject
    const product = find(allProjects, { id: this.props.match.params.id });
    const currentProduct = product;
    const locationLat = product.lat
    const locationLng = product.lng

    const centerProject = {lat: product.lat,lng: product.lng }

    var pageTitle = () => {
      document.title = "Cayan Group | Property " + currentProduct.id ;
      // pageTitle()
    }
    pageTitle()
    console.log(currentProduct.id)
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    return (
      <div >
        <Navbar data={content.page.navbar} switchLanguage={switchLanguage}/>
         <div className={this.state.isTop ? 'down pop-up' : 'up pop-up'}>
           <div className='row'>
           <div className="pop-up-image col s12"><img src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1525186412/extras/ikram-website-3.png"/></div>
           <div className="pop-up-input col s12">
           <div>
              <h6>IKRAM CHAFI</h6>
              <a href="#contact-section " className={"waves-effect waves-light btn " + data.classInfoAr}>{data.askforhelp}</a>
           </div>

           </div>

          </div>
         </div>
          <section className={"header col s12 cayan-"+ currentProduct.id} >
            <div className="project-code">
              <h3 id="product-code">PROPERTY{currentProduct.id}</h3>
            </div>
            <div className="project-details row">
              <div className="project-details-wrapper">
                <div className="project-details-each col s4 l4">
                  <div className="image col s12 location-icons">
                  <i className="ion-ios-location"></i>
                  </div>
                  <div className="text col s12">
                    <p className={data.classInfoAr}>{data.location}</p>
                    <p className={data.classInfoEn}>{currentProduct.location}</p>
                    <p className={data.classInfoAr}>{currentProduct.locationAr}</p>
                  </div>
                </div>
                <div className="project-details-each col s4 l4">
                  <div className="image col s12 delivery-icons">
                  <i className="ion-key"></i>
                  </div>
                  <div className="text col s12">
                    <p className={data.classInfoAr}>{data.delivery}</p>
                    <p className={data.classInfoEn}>{currentProduct.deliveryDate}</p>
                    <p className={data.classInfoAr}>{currentProduct.deliveryDateAr}</p>
                  </div>
                </div>
                <div className="project-details-each col s4 l4">
                  <div className="image col s12 type-icons">
                  <i className="ion-ios-home"></i>
                  </div>
                  <div className="text col s12">
                    <p className={data.classInfoAr}>{data.type}</p>
                    <p className="nutural">{currentProduct.typesAll}</p>
                  </div>
                </div>
                <div className="project-details-each col s4 l4">
                <div className="image col s12 area-icons">
                <i className="ion-ios-browsers"></i>
                </div>
                <div className="text col s12">
                  <p className={data.classInfoAr}>{data.area}</p>
                  <p className="nutural">{currentProduct.area}</p>
                </div>
              </div>
                <div className="project-details-each col s4 l4">
                <div className="image col s12 installments-icons">
                <i className="ion-ios-pricetags"></i>
                </div>
                <div className="text col s12">
                  <p className={data.classInfoAr}>{data.installments}</p>

                  <p className={data.classInfoEn}>{currentProduct.installment} months installments</p>
                  <p className={data.classInfoAr}>{currentProduct.installment} شهر تقسيط </p>
                </div>
              </div>
                <div className="project-details-each col s4 l4">
                <div className="image col s12 status-icons">
                <i className="ion-social-usd"></i>
                </div>
                <div className="text col s12">
                  <p className={data.classInfoAr}>{data.status}</p>
                  <p className={data.classInfoEn}>{currentProduct.downPayment}% Downpayment</p>
                  <p className={data.classInfoAr}>{currentProduct.downPayment}% دفعة اولى</p>
                </div>
              </div>
              </div>
            </div>
          </section>

          <section className="overview">
            <div className="container">
              <div className="row">
                <div className="text">
                  <h2 className={data.classTitle}>{data.overview}</h2>
                  <hr/>
                </div>
                <div className="description ">
                  <div className="description-text description-text-price col s12 m3 right">
                    <h1 className={"starting " + data.classTitle}>{data.starting}</h1>
                    <h1 className="price">${currentProduct.priceMin.USD.toLocaleString()}</h1>
                  </div>
                  <div className="description-text description-text-p col s12 m9 left">
                    <p className={data.classInfoEn}>{currentProduct.description}</p>
                    <p className={data.classInfoAr}>{currentProduct.descriptionAr}</p>
                  </div>

                </div>
              </div>
            </div>

          </section>
            <section className="photo-tour col s12">
              <div className="container">
                <div className="row">
                  <div className="text">
                    <h2 className={data.classTitle}>{data.photo}</h2>
                    <hr/>
                  </div>
                  <div className="images col s12">
                    <div className="left-btn col s1">
                      <p>PREV</p>
                    </div>
                         <Slider {...settings}>
                          {currentProduct.images.map((images)=>{return(<div className="image-each">
                            <img src={images} alt="projects, real estate, istanbul, turkey,cayan group"/>
                          </div>)})}
                        </Slider>
                    <div className="right-btn col s1">
                      <p>NEXT</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="privilages">
                <div className="container">
                  <div className="row">
                    <div className="text">
                      <h2 className={data.classTitle}>{data.privileges}</h2>
                      <hr />
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image parks">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.parks}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image family">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.family}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image pool">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.pool}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image security">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.security}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image cafes">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.cafes}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image resturants">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.resturants}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image gym">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.fitness}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image trails">

                      </div>
                      <div className="text-each">
                        <p className={data.classInfoAr}>{data.trails}</p>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="photo-tour col s12">
                <div className="container">
                  <div className="row">
                    <div className="text">
                      <h2 className={data.classTitle}>{data.apartmentsPhotos}</h2>
                      <hr/>
                    </div>
                    <div className="images col s12">
                      <div className="left-btn col s1">
                        <p>PREV</p>
                      </div>
                           <Slider {...settings}>
                            {currentProduct.interior.map((interior)=>{return(<div className="image-each">
                              <img src={interior} alt="projects, real estate, istanbul, turkey,cayan group"/>
                            </div>)})}
                          </Slider>
                      <div className="right-btn col s1">
                        <p>NEXT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            <section className="plans col s12">
                <div className="container">
                  <div className="row">
                    <div className="text">
                      <h2 className={data.classTitle}>{data.plans}</h2>
                      <hr/>
                    </div>
                    <Tabs>

                      <TabList>
                      {currentProduct.types.map((type)=>{return(
                        <Tab>{type.type}</Tab>
                        )})}
                      </TabList>
                      {currentProduct.types.map((type)=>{return(

                      <TabPanel>
                      <div className="plan-image s12 m8 left">
                        <img src={type.plan} alt="projects, real estate, istanbul, turkey,cayan group"/>
                      </div>
                      <div className="plan-info s12 m4 right">
                        <div className="price">
                          <h3>${type.minPrice.USD.toLocaleString()}  - ${type.maxPrice.USD.toLocaleString()} </h3>

                        </div>
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
                        <div className="area">
                          <h3 className={data.classInfoAr} >{type.minArea}m - {type.maxArea}m</h3>
                        </div>
                        <a href="#contact-section">
                          <button type="button" name="button" className={data.classInfoAr}>
                              {data.button}
                          </button>
                        </a>
                      </div>
                      </TabPanel>
                      )})}
                    </Tabs>

                  </div>
                </div>
              </section>
              <section className="location">
                  <div className="container">
                    <div className="row">
                      <div className="text">
                        <h2 className={data.classTitle}>{data.nearBy}</h2>
                        <hr/>
                      </div>
                      {/*
                      <div className="tabs col s12 row">
                        <ul>
                          <li>
                            <div className="airport"></div>
                            <p>{data.ataturk}</p>
                          </li>
                          <li>
                            <div className="airport"></div>
                            <p>{data.airport}</p>
                          </li>
                          <li>
                            <div className="taksim"></div>
                            <p>{data.taksim}</p>
                          </li>

                        </ul>
                      </div>
*/}
                    </div>
                  </div>
                  <div className="map  col s10">

                    <GoogleMapReact
                      bootstrapURLKeys={{ key: "AIzaSyCqSra2dJrK9aHJW9sRaHtdkVhx2luhbf0" }}
                      defaultCenter={centerProject}
                      defaultZoom={this.props.zoom}
                    >
                      <AnyReactComponent
                        lat={locationLat}
                        lng={locationLng}
                      />
                      <AnyReactComponent2
                        lat={40.989335}
                        lng={ 28.802444}
                      />
                      <AnyReactComponent3
                        lat={41.047102}
                        lng={28.962483}
                      />
                    </GoogleMapReact>
                  </div>
                </section>
                  { currentProduct.id == 107 ?
                    <div className="ad-img container">
                      <a href="/projects/11" className={"ad-link-107 ad-link " + data.classTitle} target="_blank">

                      </a>
                    </div>
                      :
                    currentProduct.id == 11 ?
                      <div className="ad-img container">
                        <a href="/projects/107" className={"ad-link-11 ad-link " + data.classTitle} target="_blank">

                        </a>
                      </div>
                      :
                      null
                  }
                  {/*{ currentProduct.id == 11 ?
                    <div className="ad-img container">
                      <a href="/projects/107" className={"ad-link-11 " + data.classTitle} target="_blank">

                      </a>
                    </div>
                      :
                      null
                  }*/}
                <div className="text">
                  <h2 className={"related-projects " + data.classTitle}>{data.titleRelated}</h2>
                <hr />
                </div>

                <ProjectsCarousel data={content.page.Home.ProjectsCarousel}/>
                <Getintouchprojects data={content.page.getintouch}/>
                <Footer data={content.page.footer}/>
                <Action />

      </div>
    );
  }
}

export default connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(EachProject);
