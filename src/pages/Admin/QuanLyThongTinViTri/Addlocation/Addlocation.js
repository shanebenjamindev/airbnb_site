import React, { useState } from "react";
import { Form, Input, DatePicker,  Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { PostViTriAction } from "../../../../redux/Actions/ViTriDatVeAction";




export default function AddLocation(props) {
  const { RangePicker } = DatePicker;
  const [componentSize, setComponentSize] = useState('default');
  const [componentDisabled, setComponentDisabled] = useState(true);
 
  const [imgSrc, setImgSrc] = useState("");
  const { PostViTri } = useSelector(state => state.DSVitri)
  console.log({ PostViTri })
  const dispatch = useDispatch();
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const Formik = useFormik({
    initialValues: {
      id: 0,
      tenViTri: "",
      tinhThanh: "",
      quocGia: "",
      hinhAnh: '',
    },
    validationSchema: Yup.object({
      tenViTri:Yup.string().required('Tên Vị trí không được để trống'),
      tinhThanh:Yup.string().required('Tỉnh thành không được để trống'),
      quocGia:Yup.string().required('Quốc Gia không được để trống'),
      hinhAnh:Yup.string().required('Hình ảnh không được để trống'),
    }),
    onSubmit: (value) => {
      console.log(value);
      dispatch(PostViTriAction(value))
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
className='table1'
    onSubmitCapture={Formik.handleSubmit}
  >
      <h3  style={{ fontSize: 30, fontWeight: 600 }}>
        Thêm Mới Vị Trí
      </h3>

      <div className="mt-5 form-admin">
        <Form.Item label="Tên Vị Trí" className="text-dark">
          <Input
            className="text-dark"
            style={{ width: "71%" }}
            name="tenViTri"
            type="text"
            value={Formik.values.tenViTri}
            onChange={Formik.handleChange}
            placeholder="Nhập Vào Vị Trí"
          />
          {Formik.touched.tenViTri && Formik.errors.tenViTri ? (
            <div className="text-danger ml-2">{Formik.errors.tenViTri}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Tỉnh Thành">
          <Input
            className=""
            style={{ width: "70%" }}
            name="tinhThanh"
            type="text"
            value={Formik.values.tinhThanh}
            onChange={Formik.handleChange}
            placeholder="Nhập Vào Tỉnh Thành"
          />
          {Formik.touched.tinhThanh && Formik.errors.tinhThanh ? (
            <div className="text-danger ml-4">{Formik.errors.tinhThanh}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Quốc Gia">
          <Input
            className=""
            style={{ width: "70%" }}
            name="quocGia"
            type="text"
            value={Formik.values.quocGia}
            onChange={Formik.handleChange}
            placeholder="Nhập Vào Quốc Gia"
          />
          {Formik.touched.quocGia && Formik.errors.quocGia ? (
            <div className="text-danger ml-4">{Formik.errors.quocGia}</div>
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
        <Form.Item label="Tác Vụ">
          <Button className="btn bg-primary  text-white" htmlType="submit">
            Thêm Vị Trí
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
