import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function AddModal({ open, onCancel, onOk }) {
    const [form] = Form.useForm();

    const validationRules = {
        email: [
            {
                required: true,
                message: 'Email is required',
            },
            {
                type: 'email',
                message: 'Invalid email format',
            },
        ],
        name: [
            {
                required: true,
                message: 'Tên is required',
            },
            {
                min: 4,
                message: 'Tên must be at least 4 characters',
            },
        ],
        password: [
            {
                required: true,
                message: 'Mật khẩu is required',
            },
            {
                min: 8,
                message: 'Mật khẩu must be at least 8 characters',
            },
            // You can add more password validation rules here (e.g., uppercase, lowercase, digits, special characters)
        ],
        birthday: [
            {
                required: true,
                message: 'Ngày sinh is required',
            },
            {
                type: 'date',
                message: 'Invalid date format',
            },
            // You can add more date validation rules here (e.g., minimum age, specific date range)
        ],
        gender: [
            {
                required: true,
                message: 'Giới tính is required',
            },
        ],
        role: [
            {
                required: true,
                message: 'Chức vụ is required',
            },
        ],
    };

    const handleOk = () => {
        form.validateFields()
            .then((values) => {
                // Handle your add logic here using the "values" object
                onOk(values);
                form.resetFields();
            })
            .catch((errorInfo) => {
                console.error('Validation error:', errorInfo);
            });
    };

    return (
        <Modal
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 13 }}
            open={open}
            title="Add User"
            onOk={handleOk}
            onCancel={onCancel}
        >
            <Form form={form}>
                <Form.Item
                    label="Email"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 13 }}
                    name="email"
                    rules={validationRules.email}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Tên"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 13 }}
                    name="name"
                    rules={validationRules.name}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 13 }}
                    name="password"
                    rules={validationRules.password}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Ngày sinh"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 13 }}
                    name="birthday"
                    rules={validationRules.birthday}
                >
                    <Input type='date' />
                </Form.Item>

                <Form.Item
                    label="Giới tính"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 13 }}
                    name="gender"
                    rules={validationRules.gender}
                >
                    <Select
                        style={{ width: 200 }}
                        placeholder="Chọn giới tính"
                    >
                        <Option value={true}>Nam</Option>
                        <Option value={false}>Nữ</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Chức vụ"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 13 }}
                    name="role"
                    rules={validationRules.role}
                >
                    <Select
                        placeholder="Chọn role"
                        style={{ width: 200 }}
                    >
                        <Option value="ADMIN">ADMIN</Option>
                        <Option value="USER">USER</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
}
