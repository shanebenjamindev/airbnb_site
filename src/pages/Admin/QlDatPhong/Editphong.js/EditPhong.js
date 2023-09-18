import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { GetApiDatPhongIDAction, PutApiDatPhongIDAction } from "../../../../redux/Actions/QuanLyDatPhongAction";

const EditPhong = (props) => {
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");

  const { GetApiDatPhongId } = useSelector((state) => state.QlDatPhongReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.computedMatch.params;
    console.log(id, "id");
    dispatch(GetApiDatPhongIDAction(id));
  }, []);

  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id:  GetApiDatPhongId.id,
      maPhong:  GetApiDatPhongId.maPhong,
      ngayDen:  GetApiDatPhongId.ngayDen,
      ngayDi:  GetApiDatPhongId.ngayDi,
      soLuongKhach:  GetApiDatPhongId.soLuongKhach,
      maNguoiDung:  GetApiDatPhongId.maNguoiDung,
    },

    onSubmit: (values) => {
      let { id } = props.computedMatch.params;
      dispatch(PutApiDatPhongIDAction(id, values));
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
      <h3 style={{ fontSize: 30, fontWeight: 600 }}>Câp nhật Phòng</h3>

      <div className="mt-5">
        <Form.Item label="Mã người Dùng" className="text-dark">
          <Input
            className="text-dark"
            style={{ width: "71%" }}
            name="maNguoiDung"
            type="text"
            value={Formik.values.maNguoiDung}
            onChange={Formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Mã Phòng">
          <Input
            className=""
            style={{ width: "70%" }}
            name="maPhong"
            type="text"
            value={Formik.values.maPhong}
            onChange={Formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Số Lượng Khách">
          <Input
            className=""
            style={{ width: "70%" }}
            name="soLuongKhach"
            type="text"
            value={Formik.values.soLuongKhach}
            onChange={Formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Ngày Đến">
        <Input
        style={{ width: "70%" }}
          type="date"
          name="ngayDen"
          value={Formik.values.ngayDen}
          onChange={Formik.handleChange}
          className="form-comment"
        />
      </Form.Item>
      <Form.Item label="Ngày Đi">
        <Input
        style={{ width: "70%" }}
          type="date"
          name="ngayDi"
          value={Formik.values.ngayDi}
          onChange={Formik.handleChange}
          className="form-comment"
        />
      </Form.Item>
        <Form.Item label="Tác Vụ">
          <Button className="btn bg-primary  text-white" htmlType="submit">
            Cập Nhật 
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default EditPhong;
