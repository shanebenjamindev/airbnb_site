import React, { useState } from "react";
import {  Form, Input, DatePicker, Switch, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { PostPhongAction } from "../../../../redux/Actions/PhongActions";
import { GetDsViTriIDAction } from "../../../../redux/Actions/ViTriDatVeAction";

export default function AddRoom(props) {
  const { RangePicker } = DatePicker;
  const [componentSize, setComponentSize] = useState("default");
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  const { PostPhong } = useSelector((state) => state.DSPhongTheoVitriReducer);
  const Formik = useFormik({
    initialValues: {
      id: 0,
      tenPhong: "",
      khach: 0,
      phongNgu: 0,
      giuong: 0,
      phongTam: 0,
      moTa: "",
      giaTien: 0,
      mayGiat: true,
      banLa: true,
      tivi: true,
      dieuHoa: true,
      wifi: true,
      bep: true,
      doXe: true,
      hoBoi: true,
      banUi: true,
      maViTri: 0,
      hinhAnh: "",
    },
    validationSchema: Yup.object({
      tenPhong: Yup.string().required("Tên phòng không được để trống"),
      moTa: Yup.string().required("Mô tả không được để trống"),
      giaTien: Yup.string().required("Giá Tiền không được để trống"),
      maViTri: Yup.string().required("Mã Vị Trí không được để trống"),
      hinhAnh: Yup.string().required("Hình ảng không được để trống"),
      phongNgu: Yup.string().required("Phòng Ngủ không được để trống"),
      giuong: Yup.string().required("Giường không được để trống"),
      phongTam: Yup.string().required("Phòng tắm không được để trống"),
    }),
    onSubmit: (value) => {
      console.log(value);
      dispatch(PostPhongAction(value))
      dispatch(GetDsViTriIDAction(value))
    },
  });

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onSubmitCapture={Formik.handleSubmit}
    >
      <h3 style={{ fontSize: 30, fontWeight: 600 }}>
        Thêm Mới Phòng
      </h3>

      <div className="mt-5" >
        <Form.Item label="Tên Phòng" className="text-dark">
          <Input
            className="text-dark"
            style={{ width: "71%" }}
            name="tenPhong"
            type="text"
            value={Formik.values.tenPhong}
            onChange={Formik.handleChange}
            placeholder="Nhập Vào Tên Phòng"
          />
          {Formik.touched.tenPhong && Formik.errors.tenPhong ? (
            <div className="text-danger ml-2">{Formik.errors.tenPhong}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Số Lượng Khách">
          <Input
            className=""
            style={{ width: "70%" }}
            name="khach"
            type="text"
            value={Formik.values.khach}
            onChange={Formik.handleChange}
            placeholder="Nhập Vào số lượng Khách"
          />
          {Formik.touched.khach && Formik.errors.khach ? (
            <div className="text-danger ml-4">{Formik.errors.khach}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Phòng ngủ">
          <Input
            className=""
            style={{ width: "70%" }}
            name="phongNgu"
            type="text"
            value={Formik.values.phongNgu}
            onChange={Formik.handleChange}
            placeholder="Nhập Vào số lượng phòng ngủ"
          />
          {Formik.touched.phongNgu && Formik.errors.phongNgu ? (
            <div className="text-danger ml-4">{Formik.errors.phongNgu}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Giường">
          <Input
            className=""
            style={{ width: "70%" }}
            name="giuong"
            type="text"
            value={Formik.values.giuong}
            onChange={Formik.handleChange}
            placeholder="Nhập Vào số lượng giường"
          />
          {Formik.touched.giuong && Formik.errors.giuong ? (
            <div className="text-danger ml-4">{Formik.errors.giuong}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Phòng tắm">
          <Input
            className=""
            style={{ width: "70%" }}
            name="phongTam"
            type="text"
            value={Formik.values.phongTam}
            onChange={Formik.handleChange}
            placeholder="Nhập Vào số lượng phòng tắm"
          />
          {Formik.touched.phongTam && Formik.errors.phongTam ? (
            <div className="text-danger ml-4">{Formik.errors.phongTam}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <Input
            className=""
            style={{ width: "70%" }}
            name="hinhAnh"
            type="text"
            value={Formik.values.hinhAnh}
            onChange={Formik.handleChange}
            placeholder="Thêm link hình ảnh"
          />
          {Formik.touched.hinhAnh && Formik.errors.hinhAnh ? (
            <div className="text-danger ml-4">{Formik.errors.hinhAnh}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            className=""
            style={{ width: "70%" }}
            name="moTa"
            type="text"
            value={Formik.values.moTa}
            onChange={Formik.handleChange}
            placeholder="Nhập Vào Mô tả"
          />
          {Formik.touched.moTa && Formik.errors.moTa ? (
            <div className="text-danger ml-4">{Formik.errors.moTa}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Giá Tiền">
          <Input
            className=""
            style={{ width: "70%" }}
            name="giaTien"
            type="text"
            value={Formik.values.giaTien}
            onChange={Formik.handleChange}
            placeholder="Nhập Vào Giá Tiền"
          />
          {Formik.touched.giaTien && Formik.errors.giaTien ? (
            <div className="text-danger ml-4">{Formik.errors.giaTien}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Điều Hòa" valuePropName="checked">
          <Switch
            onChange={(value) => {
              Formik.setFieldValue("dieuHoa", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Máy Giặt" valuePropName="checked">
          <Switch
            onChange={(value) => {
              Formik.setFieldValue("mayGiat", value);
            }}
          />
        </Form.Item>
        <Form.Item label="bàn là" valuePropName="checked">
          <Switch
            onChange={(value) => {
              Formik.setFieldValue("banLa", value);
            }}
          />
        </Form.Item>
        <Form.Item label="bàn ủi" valuePropName="checked">
          <Switch
            onChange={(value) => {
              Formik.setFieldValue("banUi", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Tivi" valuePropName="checked">
          <Switch
            onChange={(value) => {
              Formik.setFieldValue("tivi", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Wifi" valuePropName="checked">
          <Switch
            onChange={(value) => {
              Formik.setFieldValue("wifi", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Bếp" valuePropName="checked">
          <Switch
            onChange={(value) => {
              Formik.setFieldValue("bep", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Đỗ Xe" valuePropName="checked">
          <Switch
            onChange={(value) => {
              Formik.setFieldValue("doXe", value);
            }}
          />
        </Form.Item>
        <Form.Item label="hồ Bơi" valuePropName="checked">
          <Switch
            onChange={(value) => {
              Formik.setFieldValue("hoBoi", value);
            }}
          />
        </Form.Item>
        <Form.Item label="Tác Vụ">
          <Button className="btn bg-primary  text-white" htmlType="submit">
            Thêm Phòng
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
