import React, { Component } from 'react';
import './Testimonial.css';
import Slider from 'react-slick';
class Testimonial extends Component {
  render() {
    const data = this.props.data;
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          autoplay: false,
          autoplaySpeed: 5000
  };
    return (
            <section className="testimonials">
                <div className="container">
                  <h1 className={"body-h1 " + data.classAr}>{data.title}</h1>
                  <Slider className="owl-carousel testimonials-carousel">
                    <div className="testimonials-each">
                      <div className="col s2 l1"></div>
                      <div className="testimonials-each-text col s10 l10">
                        <p className={data.classAr}>{data.first}</p>
                        <span className={data.classAr}>{data.firstName}</span>
                      </div>
                    </div>
                    <div className="testimonials-each">
                      <div className="col s2"></div>
                      <div className="testimonials-each-text col s10">
                        <p className={data.classAr}>{data.second}</p>
                        <span className={data.classAr}>{data.secondName}</span>
                      </div>
                    </div>
                    <div className="testimonials-each">
                      <div className="col s2"></div>
                      <div className="testimonials-each-text col s10">
                        <p className={data.classAr}>{data.third}</p>
                        <span className={data.classAr}>{data.thirdName}</span>
                      </div>
                    </div>
                    {/*
                    <div className="testimonials-each">
                      <div className="col s2" ></div>
                      <div className="testimonials-each-text col s10">
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .</p>
                        <span>Ahmed Hassan</span>
                      </div>
                    </div>
                    */}
                  </Slider>
                </div>
              </section>
    );
  }
}

export default Testimonial;
