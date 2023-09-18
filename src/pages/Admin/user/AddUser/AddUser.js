import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, Button } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { PostUserAction } from "../../../../redux/Actions/QLNDAction";
import moment from "moment";

export default function AddUser(props) {
  const { RangePicker } = DatePicker;
  const [componentSize, setComponentSize] = useState("default");
  const [componentDisabled, setComponentDisabled] = useState(true);
  const { PostUser } = useSelector((state) => state.QLNDReducer);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const Formik = useFormik({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
    },
    onSubmit: (value) => {
      console.log(value, "nười dùng");
      dispatch(PostUserAction(value));
    },
  });

  const handlechangeDataPicker = (value) => {
    let birthday = moment(value).format("DD/MM/YYYY");
    Formik.setFieldValue("birthday", birthday);
  };
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
      <h3 style={{ fontSize: 30, fontWeight: 600 }}>Thêm Người Dùng Mới</h3>

      <div className="mt-5">
        <Form.Item label="Name">
          <Input
            name="name"
            type="text"
            value={Formik.values.name}
            onChange={Formik.handleChange}
          />
          {Formik.touched.name && Formik.errors.name ? (
            <span className="text-danger ml-4">{Formik.errors.name}</span>
          ) : null}
        </Form.Item>
        <Form.Item label="Password">
          <Input
            name="password"
            type="text"
            value={Formik.values.password}
            onChange={Formik.handleChange}
          />
          {Formik.touched.password && Formik.errors.password ? (
            <div className="text-danger ml-4">{Formik.errors.password}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Email">
          <Input
            name="email"
            type="text"
            value={Formik.values.email}
            onChange={Formik.handleChange}
          />
          {Formik.touched.email && Formik.errors.email ? (
            <div className="text-danger " style={{ marginLeft: "54px" }}>
              {Formik.errors.email}
            </div>
          ) : null}
        </Form.Item>
        <Form.Item label="Số Điện Thoại">
          <Input
            name="phone"
            type="text"
            value={Formik.values.phone}
            onChange={Formik.handleChange}
          />
          {Formik.touched.phone && Formik.errors.phone ? (
            <div className="text-danger ">{Formik.errors.phone}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Role">
          <Input
            name="role"
            type="text"
            value={Formik.values.role}
            onChange={Formik.handleChange}
          />
          {Formik.touched.role && Formik.errors.role ? (
            <div style={{ marginLeft: "42px" }} className="text-danger ">
              {Formik.errors.role}
            </div>
          ) : null}
        </Form.Item>
        <Form.Item label="birthday">
          <DatePicker onChange={handlechangeDataPicker} />
          {Formik.touched.birthday && Formik.errors.birthday ? (
            <div className="text-danger ">{Formik.errors.birthday}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Tác Vụ">
          <Button htmlType="submit" className="btn bg-primary  text-white">
            Thêm
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
