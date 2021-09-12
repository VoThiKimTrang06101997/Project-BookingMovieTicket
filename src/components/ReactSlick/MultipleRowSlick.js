import React, { Component} from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styleSlick from "../ReactSlick/MultipleRowSlick.module.css";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import { SET_PHIM_DANG_CHIEU } from "../../redux/types/QuanLyPhimType";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );
  


  const renderFilms = () => {
    const { item } = props;
    const { data } = props;
    

    return props.arrFilm.slice(0, 12).map((item, index) => {
      return (
        <div className="mt-2" key={index}>
          <Film_Flip item={item} />
        </div>
      );
    });
  };
  let activeClassDangchieu =
    dangChieu === true ? "active_Film" : "none_active_Film";
  let activeClassSapChieu =
    sapChieu === true ? "active_Film" : "none_active_Film";

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <button
        className={`${styleSlick[activeClassDangchieu]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`}
        onClick={() => {
          const action = { type: SET_PHIM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        PHIM ĐANG CHIẾU
      </button>
      <button
        className={` ${styleSlick[activeClassSapChieu]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
        onClick={() => {
          const action = { type: SET_PHIM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        PHIM SẮP CHIẾU
      </button>
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
