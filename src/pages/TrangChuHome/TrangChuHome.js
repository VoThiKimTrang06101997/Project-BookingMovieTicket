import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu';
// Kết nối với Redux
import { useSelector, useDispatch } from "react-redux";
import Film from '../../components/Film/Film';
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapActions';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';


export default function TrangChuHome(props) {
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();
    console.log('propsHome', props);
    // props.match.params

    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index} />
    //     })
    // }
    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action);       //Dispatch Function từ Redux-thunk
        dispatch(layDanhSachHeThongRapAction());
    })
    return (
        <div>
            <HomeCarousel/>
            <section class="text-gray-600 body-font" >
                <div class="container px-5 py-24 mx-auto">
                    <MultipleRowSlick arrFilm={arrFilm}/>

                    {/* <div class="flex flex-wrap -m-4" style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div> */}
                </div>
            </section>
            <div className="mx-36">
                <HomeMenu heThongRapChieu={heThongRapChieu}/>
            </div>
        </div>
    )
}
