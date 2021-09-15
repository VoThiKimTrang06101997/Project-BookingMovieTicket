import React from 'react'
import { useSelector } from 'react-redux'
import style from "../Checkout/Checkout.module.css";

export default function Checkout(props) {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    return (
        <div className="min-h-screen mt-5">
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div className="flex flex-col items-center mt-5">

                        <div className="bg-black" style={{ width: '80%', height: 15 }}>

                        </div>

                        <div className={`${style['trapezoid']} text-center`}>
                            <h3 className="mt-3 text text-red-900 font-bold">Màn hình</h3>
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <h3 className="text-green-400 text-center text-2xl">0 đ</h3>
                    <hr />
                    <h3 className="text-xl">Lật mặt 48h</h3>
                    <p>Địa điểm: BHD Star - Vincom 3/2</p>
                    <p>Ngày chiếu: 25/04/2021 - 12:05 RẠP 5</p>
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 font-bold text-lg">Ghế</span>
                        </div>
                        <div className="text-right">
                            <span className="text-green-800 text-lg">0 đ</span>
                        </div>
                    </div>
                    <hr />
                    <div className="my-5">
                        <i className="font-bold">Email</i> <br />
                        {userLogin.email}
                    </div>
                    <hr />
                    <div className="my-5">
                        <i className="font-bold">Phone</i> <br />
                        {userLogin.soDT}
                    </div>
                    <hr />
                    <div className="mb-0 h-full flex flex-col justify-center items-center" style={{ marginBottom: 0 }}>
                        <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl">
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
