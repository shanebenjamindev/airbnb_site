import React, {  useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {GetDsViTriIDAction, PutViTriIDAction } from '../../../../redux/Actions/ViTriDatVeAction';



const Editlocation = (props) => {
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [componentSize, setComponentSize] = useState('default');
  const [imgSrc, setImgSrc] = useState('');


  const {DSVitriId} = useSelector(state=>state.DSVitri)
  const dispatch = useDispatch();

  useEffect(() => {   
    let {id} = props.computedMatch.params
    dispatch(GetDsViTriIDAction(id))
   },[])
  
  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: 0,
      tenViTri:DSVitriId.tenViTri,
      tinhThanh:DSVitriId.tinhThanh,
      quocGia: DSVitriId.quocGia,
      hinhAnh: DSVitriId.hinhAnh,
    },

    onSubmit: (values) => {
      let {id} = props.computedMatch.params
      dispatch(PutViTriIDAction(id,values))
    }
  })

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
      <h3  style={{ fontSize: 30, fontWeight: 600 }}>
        Câp nhật Vị Trí
      </h3>

      <div className="mt-5">
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
        </Form.Item>
        <Form.Item label="Tác Vụ">
          <Button className="btn bg-primary  text-white" htmlType="submit">
            Cập Nhật Vị Trí
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};



export default Editlocation;