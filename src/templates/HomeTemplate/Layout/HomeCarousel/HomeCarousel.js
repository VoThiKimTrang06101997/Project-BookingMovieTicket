import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';
import playVideo from "../../../../assets/img/play-video.png";
import ModalVideo from "react-modal-video";
import Banner1 from "../../../../assets/img/banner1.jpg";
import Banner2 from "../../../../assets/img/banner2.png";
import Banner3 from "../../../../assets/img/banner3.jpg";
import styled from 'styled-components';


const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
};
export default function HomeCarousel(props) {
    const { arrImg } = useSelector(state => state.CarouselReducer);
    const dispatch = useDispatch();
    // Sẽ tự kích hoạt khi Component Load ra
    useEffect(() => {
        // Loại 1: Action = {type: '', data}
        // Loại 2: Phải cài MiddleWare: callBackFunction (dispatch)
        dispatch(getCarouselAction());
    }, []);

    const [isOpen, setOpen] = useState(false);
    const [trailer, setTrailer] = useState(false);

    // const renderImg = () => {
    //     return arrImg.map((item, index) => {
    //         return <div key={index}>
    //             <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
    //                 <img src={item.hinhAnh} className="w-full h-full opacity-0" alt={item.hinhAnh} />
    //             </div>
    //         </div>
    //     })
    // }
    return (
        <Wrapper>
            <section className="bannerTix" id="bannerTix">
                <div className="bannerTix__wrap">
                    <div className="banner__img">
                        <Carousel autoplay>
                            {/* {renderImg()} */}
                            <div>
                                <div style={contentStyle}>
                                    <img src={Banner1} alt="BannerImage" />
                                </div>
                                <button
                                    type="button"
                                    className="btn-play-trailer"
                                >
                                    <img
                                        src={playVideo}
                                        onClick={() => {
                                            setOpen(true);
                                            setTrailer("fNE3wgaHr18");
                                        }}
                                        alt="play trailer"
                                    />
                                </button>
                            </div>
                            <div>
                                <div style={contentStyle}>
                                    <img src={Banner2} alt="BannerImage" />
                                </div>
                                <button
                                    type="button"
                                    className="btn-play-trailer"
                                >
                                    <img
                                        src={playVideo}
                                        onClick={() => {
                                            setOpen(true);
                                            setTrailer("jluSu8Rw6YE");
                                        }}
                                        alt="play trailer"
                                    />
                                </button>
                            </div>
                            <div>
                                <div style={contentStyle} className="h-full">
                                    <img src="http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png" alt="BannerImage" />
                                </div>
                                <button
                                    type="button"
                                    className="btn-play-trailer"
                                >
                                    <img
                                        src={playVideo}
                                        onClick={() => {
                                            setOpen(true);
                                            setTrailer("uqJ9u7GSaYM");
                                        }}
                                        alt="play trailer"
                                    />
                                </button>
                            </div>
                            <div>
                                <div style={contentStyle}>
                                    <img src={Banner3} alt="BannerImage" />
                                </div>
                            </div>

                        </Carousel>
                        <ModalVideo
                            channel="youtube"
                            autoplay
                            isOpen={isOpen}
                            videoId={trailer}
                            onClose={() => setOpen(false)}
                        />
                    </div>
                </div>
            </section >
        </Wrapper >
    )
}

const Wrapper = styled.section`
.bannerTix{
    position: relative;
    .bannerTix__wrap {
        position: relative;
        .banner__img{
            position: relative;
            .ant-carousel .slick-dots-bottom{
                margin: 0 !important;
                padding: 0 !important;
            }
        .ant-carousel .slick-slide img{
            width: 100%;   
        }
        .ant-carousel .slick-dots li button{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 75px;
            color: red;
        }
        .btn-play-trailer img{
                align-items: center;
                padding: 5px 600px;
                overflow: hidden;
                position: relative;
                margin-top: -450px;
                margin-left: 50px;
        }
        .modal-video{
            align-items: center;
                padding: 5px 550px;
                overflow: hidden;
                position: relative;
                margin-top: -450px;
                margin-left: 50px;
        }
        .ant-carousel .slick-dots .slick-dots-bottom {
            margin: 0 !important;
            padding: 0 !important;
        }
    }
    }
}
`