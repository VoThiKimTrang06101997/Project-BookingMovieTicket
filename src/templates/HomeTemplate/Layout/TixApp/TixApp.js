import React from "react";
import { Carousel } from 'antd';
import styled from 'styled-components';

import mobileApp from "../../../../assets/img/app-mobile.png";
import appSlide1 from "../../../../assets/img/app-slide-1.jpg";
import appSlide2 from "../../../../assets/img/app-slide-2.jpg";
import appSlide3 from "../../../../assets/img/app-slide-3.jpg";
import appSlide4 from "../../../../assets/img/app-slide-4.jpg";
import appSlide5 from "../../../../assets/img/app-slide-5.jpg";
import appSlide6 from "../../../../assets/img/app-slide-6.jpg";
import appSlide7 from "../../../../assets/img/app-slide-7.jpg";
import appSlide8 from "../../../../assets/img/app-slide-8.jpg";
import appSlide9 from "../../../../assets/img/app-slide-9.jpg";
import appSlide10 from "../../../../assets/img/app-slide-10.jpg";

const contentStyle = {
    width: '200px',
    height: '450px',
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',

}

const h1 = {
    fontSize: '32px',
    textAlign: 'center',
    lineHeight: '1.5',
    marginBottom: '40px',
    color: 'green',
}

const p = {
    fontSize: '20px',
    color: 'white',
    padding: '0px 0 15px',
    textAlign: 'center',
}

const button = {
    background: 'green',
    fontWeight: '700',
    padding: '10px 50px',
    outline: 'none',
    border: 'none',
    borderRadius: ' 5px',
    fontSize: '16px',
    position: 'absolute',
    left: '20%',
    top: '75%'
}

const down = {
    fontSize: '18px',
    paddingTop: '15px',
    textAlign: 'center',
    position: 'absolute',
    color: 'black',
    left: '20%',
    top: '85%'
}

const a = {
    fontSize: '16px',
    color: 'blue',
    display: 'inline-block',
    TextDecoration: 'none',
    borderBottom: '1px solid white',
    textAlign: 'center',
}


const phoneImg = {
    width: '200px',
    height: '400px',
    position: 'absolute',
}

const tixAppWrap = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
}
const appLeft = {
    float: 'left',
    width: '60%'
}

const appRight = {
    float: 'right',
    width: '40%'
}

const Wraper = styled.section`
.ant-carousel .slick-dots li {
    display: none;
}
`
export default function TixApp() {
    return (
        <Wraper>
            <section className="tixApp" id="tixApp">
                <div className="tixApp-wrap container bg-red-400 text-white" style={tixAppWrap}>
                    <div className="app-item app-left" style={appLeft}>
                        <h1 style={h1}>
                            Ứng dụng tiện lợi dành cho <br />
                            người yêu điện ảnh
                        </h1>
                        <p style={p}>
                            Không chỉ đặt vé, bạn còn có thể bình luận phim, <br /> chấm điểm rạp và
                            đổi quà hấp dẫn.
                        </p>
                        <button type="button" style={button}>App miễn phí - Tải về ngay!</button>
                        <p className="down" style={down}>
                            TIX có hai phiên bản &nbsp;
                            <a style={a} href="#radom">iOS</a> &amp;&nbsp;
                            <a style={a} href="#random">Android</a>
                        </p>
                    </div>
                    <div className="app-item app-right" style={appRight}>
                        <div className="phone-img">
                            <img src={mobileApp} style={phoneImg} alt="123" />
                            <div className="slide-img">
                                <Carousel autoplay effect="fade">
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide1} alt="appImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide2} alt="appImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide3} alt="appImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide4} alt="appImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide4} alt="appImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide5} alt="appImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide6} alt="appImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide7} alt="appImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide8} alt="appImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide9} alt="appImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <div style={contentStyle}>
                                            <img src={appSlide10} alt="appImage" />
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Wraper>
    );
}

