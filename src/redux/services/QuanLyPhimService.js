import { DOMAIN, GROUPID } from "../../utilities/settings/config";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService {
    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get('http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner')
    }

    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    
    themPhimUploadHinh = (formData) => {
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
    }

    layThongTinPhim = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
}

export const quanLyPhimService = new QuanLyPhimService();

