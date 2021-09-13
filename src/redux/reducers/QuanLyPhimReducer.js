import { SET_DANH_SACH_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../types/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 5687,
            "tenPhim": "Avengers: Endgame",
            "biDanh": "avengers-endgame",
            "trailer": "https://www.youtube.com/embed/Fp9pNPdNwjI",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/avengers-endgame_gp01.jpg",
            "moTa": "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.\n",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-31T15:29:44.85",
            "danhGia": 10
        },
        {
            "maPhim": 5687,
            "tenPhim": "Avengers: Endgame",
            "biDanh": "avengers-endgame",
            "trailer": "https://www.youtube.com/embed/Fp9pNPdNwjI",
            "hinhAnh": "http://movie0706.cybersoft.edu.vn/hinhanh/avengers-endgame_gp01.jpg",
            "moTa": "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.\n",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2021-08-31T15:29:44.85",
            "danhGia": 10
        },
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],

    filmDetail: {}
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm;
            state.arrFilmDefault = state.arrFilm;
            return { ...state }
        }
        case SET_PHIM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;
            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu);
            return { ...state }
        }
        case SET_PHIM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu;
            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu);
            return { ...state }
        }
        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail;
            return {...state};
        }
        default: return { ...state }
    }
}
