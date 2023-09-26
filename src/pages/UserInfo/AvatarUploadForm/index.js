import React from 'react';
import { Upload, Button, Form, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AvatarUploadForm = () => {
    const onFinish = (values) => {
      // Handle the form submission (e.g., upload the avatar)
      console.log('Form values:', values);
      // You can add your API call to upload the avatar here
      // Remember to handle success and error cases
      message.success('Avatar uploaded successfully');
    };
  
    return (
      <Form onFinish={onFinish}>
        {/* Avatar Upload */}
        <Form.Item
          label="Avatar"
          name="avatar"
          rules={[
            {
              required: true,
              message: 'Please upload your avatar!',
            },
          ]}
        >
          <Upload
            name="avatar"
            action="/your-upload-api-endpoint" // Replace with your actual API endpoint
            listType="picture-card"
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Upload Avatar</Button>
          </Upload>
        </Form.Item>
  
        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default AvatarUploadForm;
  