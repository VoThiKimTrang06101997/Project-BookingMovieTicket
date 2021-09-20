import _ from 'lodash';
import React from 'react'
import { useSelector } from 'react-redux'
import WebLogo from "../../../../assets/img/web-logo.png";
import { AppleOutlined, FacebookOutlined } from '@ant-design/icons'

export default function Footer(props) {
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer);

    const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) => _.pick(heThongRap, ['maHeThongRap', 'tenHeThongRap', 'logo']));

    console.log('arr', arrHeThongRap);
    return (
        <footer className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50 bg-gray-500">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a href="#" className="flex justify-center space-x-3 md:justify-start text-black">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                                <img src={WebLogo} alt={WebLogo} />
                            </div>
                            <span className="self-center text-2xl font-semibold text-red-800">Tix Cinema</span>
                        </a>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium text-white">PARTNER</p>
                        <div className="grid grid-cols-3" style={{ color: "white" }}>
                            {arrHeThongRap.map((htr, index) => {
                                return <div key={index}>
                                    <img src={htr.logo} style={{ width: 50 }} />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3 text-white">
                        <p className="pb-1 text-lg font-medium">Mobile app</p>
                        <div className="flex text-white">
                            <div className="mr-5">
                                <AppleOutlined className="text-2xl" />
                            </div>
                            <div>
                                <FacebookOutlined className="text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2021 All rights reserved</span>
                        <a href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
