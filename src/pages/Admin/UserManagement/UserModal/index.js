import React, { useState } from 'react';
import { Modal, Button, Form, Upload, Input, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function UserModal({ open, onCancel, formData }) {
  const [form] = Form.useForm();

  return (
    <Modal
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 13 }}
      open={open}
      title="User Infomation"
      onCancel={onCancel}
      footer={false}
    >
      <Form form={form}>
        <Form.Item
          label="Email"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 13 }}
        >
          <Input value={formData ? formData.email : ''} />
        </Form.Item>

        <Form.Item
          label="Tên"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 13 }}
        >
          <Input value={formData ? formData.name : ''} />
        </Form.Item>

        <Form.Item
          label="Giới tính"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 13 }}
        >
          <Select
            value={formData ? formData.gender : ""}
            style={{ width: 200 }}
          >
            <Option value={true}>Nam</Option>
            <Option value={false}>Nữ</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="role"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 13 }}
        >
          <Select
            value={formData ? formData.role : ""}
            style={{ width: 200 }}
          >
            <Option value="default" disabled>Chọn role</Option>
            <Option value="ADMIN">ADMIN</Option>
            <Option value="USER">USER</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal >
  );
}
