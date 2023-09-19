import React, {  useEffect, useState } from 'react';
import {
  Form,
  Input,
  DatePicker,
  InputNumber,
  Button,
  Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { PhongThueAction, PutPhongAction } from '../../../../redux/Actions/PhongActions';



const Edit = (props) => {
 //hàm từ thư viện
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [componentSize, setComponentSize] = useState('default');
  const [imgSrc, setImgSrc] = useState('');
  //

  //call api
  const {PutPhong,PhongThue} = useSelector(state=>state.DSPhongTheoVitriReducer)
  const dispatch = useDispatch();

  useEffect(() => {   
    let {id} = props.computedMatch.params
    console.log(props,'id')
    dispatch(PhongThueAction(id))
   },[])
  
  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: PhongThue.id,
      tenPhong: PhongThue.tenPhong,
      khach: PhongThue.khach,
      phongNgu: PhongThue.phongNgu,
      giuong: PhongThue.giuong,
      phongTam: PhongThue.phongTam,
      moTa: PhongThue.moTa,
      giaTien: PhongThue.giaTien,
      mayGiat: PhongThue.mayGiat,
      banLa: PhongThue.banLa,
      tivi: PhongThue.tivi,
      wifi: PhongThue.wifi,
      dieuHoa: PhongThue.dieuHoa,
      bep: PhongThue.bep,
      doXe:PhongThue.doXe,
      hoBoi: PhongThue.hoBoi,
      banUi: PhongThue.banUi,
      maViTri: PhongThue.maViTri,
      hinhAnh: PhongThue.hinhAnh,
    },

    onSubmit: (values) => {
      console.log('values', values);
     
      dispatch(PutPhongAction(PhongThue.id,values))
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
      Cập Nhật Phòng
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
      </Form.Item>
      <Form.Item label="Điều Hòa" valuePropName="checked">
        <Switch
        onChange={async(value)=> {await Formik.setFieldValue('dieuHoa',value)}} checked={Formik.values.dieuHoa}
        />
      </Form.Item>
      <Form.Item label="Máy Giặt" valuePropName="checked">
        <Switch
         onChange={async(value)=> {await Formik.setFieldValue('mayGiat',value)}} checked={Formik.values.mayGiat}
        />
      </Form.Item>
      <Form.Item label="bàn là" valuePropName="checked">
        <Switch
         onChange={async(value)=> {await Formik.setFieldValue('banLa',value)}} checked={Formik.values.banLa}
        />
      </Form.Item>
      <Form.Item label="bàn ủi" valuePropName="checked">
        <Switch
          onChange={async(value)=> {await Formik.setFieldValue('banUi',value)}} checked={Formik.values.banUi}
        />
      </Form.Item>
      <Form.Item label="Tivi" valuePropName="checked">
        <Switch
          onChange={async(value)=> {await Formik.setFieldValue('tivi',value)}} checked={Formik.values.tivi}
        />
      </Form.Item>
      <Form.Item label="Wifi" valuePropName="checked">
        <Switch
         onChange={async(value)=> {await Formik.setFieldValue('wifi',value)}} checked={Formik.values.wifi}
        />
      </Form.Item>
      <Form.Item label="Bếp" valuePropName="checked">
        <Switch
        onChange={async(value)=> {await Formik.setFieldValue('bep',value)}} checked={Formik.values.bep}
        />
      </Form.Item>
      <Form.Item label="Đỗ Xe" valuePropName="checked">
        <Switch
         onChange={async(value)=> {await Formik.setFieldValue('doXe',value)}} checked={Formik.values.doXe}
        />
      </Form.Item>
      <Form.Item label="hồ Bơi" valuePropName="checked">
        <Switch
           onChange={async(value)=> {await Formik.setFieldValue('sapChieu',value)}} checked={Formik.values.hoBoi}
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



export default Edit;