import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

function ToDo() {
  const navigate = useNavigate();
  const [form] = Form.useForm();


  const handleViewAllPosts = () => {
    navigate("/view-todos", { replace: true });
  };

  const clearFields = () => {
    form.resetFields();
  };

  const onFinish = (values: any) => {
    console.log(values);

    axios
      .post("http://localhost:8000/todos", values, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        alert("Successfully added");
        clearFields();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <Form
        name="wrap"
        labelCol={{
          flex: "110px",
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="ID"
          name="id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ToDo;
