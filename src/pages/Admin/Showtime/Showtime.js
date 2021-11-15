import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Select } from "antd";
import { Cascader, DatePicker, InputNumber } from "antd";
import { quanLyRapService } from "../../../redux/services/QuanLyRapService";
import { useFormik } from "formik";
import moment from "moment";
import { quanLyDatVeService } from "../../../redux/services/QuanLyDatVeService";

export default function ShowTime(props) {
  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
      try {
          const result = await quanLyDatVeService.taoLichChieu(values);
          alert(result.data.content);
      } catch (error) {
        console.log("error", error.response?.data);
      }
    },
  });
  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });
  console.log(state.heThongRapChieu);

  useEffect(async () => {
    try {
      let result = await quanLyRapService.layThongTinHeThongRap();
      setState({
        ...state,
        heThongRapChieu: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  }, []);

  const handleChangeHeThongRap = async (values) => {
    // Từ hệ thống rạp Call API lấy thông tin rạp
    try {
      let result = await quanLyRapService.layThongTinCumRap(values);
      // Gán giá trị cụm rạp vào state.cumRap
      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };

  const handleChangeCumRap = (values) => {
      formik.setFieldValue("maRap", values)
  };

  const onOk = (values) => {
    formik.setFieldValue("ngayChieuGioChieu", moment(values).format("DD/MM/YYYY hh:mm:ss"))
    console.log("values", moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };

  const onChangeDate = (values) => {
    formik.setFieldValue("ngayChieuGioChieu", moment(values).format("DD/MM/YYYY hh:mm:ss"))
    console.log("values", moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };

  const onChangeInputNumber = (values) => {
    formik.setFieldValue("giaVe", values);
  };

  const convertSelectHeThongRap = () => {
    //  options={state.heThongRapChieu?.map((htr,index) => {return {label:htr.tenHeThongRap, value:htr.tenHeThongRap}})
    return state.heThongRapChieu?.map((htr, index) => {
      return { label: htr.tenHeThongRap, value: htr.tenHeThongRap };
    });
  };

  console.log(props.match.params);
  let film = {};
  if(localStorage.getItem("filmParams")) {
      film = JSON.parse(localStorage.getItem("filmParams"))
  }




  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onSubmitCapture={formik.handleSubmit}
        
      >
        <h3 className="text-2xl" style={{ color: "red" }}>
          Tạo lịch chiếu - {props.match.params.tenphim}
        </h3>
        <img src={film.hinhAnh} alt="" width={200} height={100} />
        <Form.Item label="Hệ thống rạp">
          <Select
            options={convertSelectHeThongRap()}
            onChange={handleChangeHeThongRap}
            placeholder="Chọn hệ thống rạp"
          />
        </Form.Item>

        <Form.Item label="Cụm rạp">
          <Select
            options={state.cumRapChieu?.map((cumRap, index) => ({
              label: cumRap.tenCumRap,
              value: cumRap.maCumRap,
            }))}
            onChange={handleChangeCumRap}
            placeholder="Chọn cụm rạp"
          />
        </Form.Item>

        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime onChange={onChangeDate} onOk={onOk} />
        </Form.Item>

        <Form.Item label="Giá vé">
          <InputNumber
            // min={75000}
            // max={150000}
            defaultValue={3}
            onChange={onChangeInputNumber}
          />
        </Form.Item>

        <Form.Item label="Chức năng">
          <Button htmlType="submit">Tạo lịch chiếu</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
