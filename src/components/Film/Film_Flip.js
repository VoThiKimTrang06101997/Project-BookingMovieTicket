import React, { useState } from 'react'
import { PlayCircleOutlined } from "@ant-design/icons";
import '../Film/Film_Flip.css'
import ModalVideo from "react-modal-video";
import styled from 'styled-components';

export default function Film_Flip(props) {
    const { item } = props;
    const [isOpen, setOpen] = useState(false);
    const [trailer, setTrailer] = useState(false);

    let url = item.trailer.substring(30);
    return (
        <Wraper>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={item.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} />
                    </div>
                    <div className="flip-card-back" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.9)' }} >
                        <div style={{ position: 'absolute', top: 0, left: 0 }}>
                            <img src={item.hinhAnh} alt="Avatar" style={{ width: 300, height: 300 }} />
                        </div>
                        <div className="w-full h-full" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div>
                                <div className="rounded-full cursor-pointer"><PlayCircleOutlined style={{ fontSize: '50px' }} onClick={() => {
                                    setOpen(true);
                                    setTrailer(url);
                                }} />

                                </div>
                                <div className="text-2xl mt-2 font-bold">{item.tenPhim}</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bg-orange-300 text-center cursor-pointer py-2 bg-indigo-300 text-success-50 font-bold"> ĐẶT VÉ</div>
            </div >
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId={trailer}
                onClose={() => setOpen(false)}
            />
        </Wraper>
    )
}

const Wraper = styled.section`
flip-card{
    position: absolute;
    top: 0;
    left: 0;
    .ModalVideo {
        position: relative;
        overflow: hidden;
    }
}
`
