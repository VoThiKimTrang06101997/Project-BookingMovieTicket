import axios from "axios";
import { quanLyPhimService } from "../services/QuanLyPhimService";


import { SET_CAROUSEL } from "../types/CarouselType";

export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachBanner();
            // Đưa lên Reducer
            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors);
        };
    }
};
