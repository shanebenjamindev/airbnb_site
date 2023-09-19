import React, { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import {
  PutUserIdAction,
  UserIdAction,
} from "../../../../redux/Actions/QLNDAction";
import moment from "moment";

const EditUser = (props) => {
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [componentSize, setComponentSize] = useState("default");

  const { UserId } = useSelector((state) => state.QLNDReducer);
  console.log(UserId, "ds user id");

  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.computedMatch.params;
    console.log(id, "tài khoản người dùng");
    console.log(props, "props");
    dispatch(UserIdAction(id));
  }, []);

  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: UserId.id,
      name: UserId.name,
      email: UserId.email,
      phone: UserId.phone,
      birthday: UserId.birthday,
      gender: UserId.gender,
      role: UserId.role,
    },

    onSubmit: (values) => {
      let { id } = props.computedMatch.params;
      console.log("values", values);
      dispatch(PutUserIdAction(id, values));
    },
  });
  const handlechangeDataPicker = (value) => {
    let birthday = moment(value).format("DD/MM/YYYY");
    Formik.setFieldValue("birthday", birthday);
    console.log(birthday, "set");
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
      <div className="mt-5">
        <Form.Item label="ID" className="form-label" style={{ color: "white" }}>
          <Input
            name="id"
            type="number"
            value={Formik.values.id}
            onChange={Formik.handleChange}
          />
        </Form.Item>
        <Form.Item
          label="Name"
          className="form-label"
          style={{ color: "white" }}
        >
          <Input
            name="name"
            type="text"
            value={Formik.values.name}
            onChange={Formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            name="email"
            type="text"
            value={Formik.values.email}
            onChange={Formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Phone">
          <Input
            name="phone"
            type="number"
            value={Formik.values.phone}
            onChange={Formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="birthDay">
          <DatePicker className="ml-3" onChange={handlechangeDataPicker} />
        </Form.Item>
        <Form.Item label="gender">
          <Input
            name="gender"
            type="text"
            value={Formik.values.gender}
            onChange={Formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="role">
          <Input
            name="role"
            type="text"
            value={Formik.values.role}
            onChange={Formik.handleChange}
          />
        </Form.Item>
        <Form.Item label="Tác Vụ">
          <Button htmlType="submit" className="btn bg-primary  text-white">
            Save
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default EditUser;
