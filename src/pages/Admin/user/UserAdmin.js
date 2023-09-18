import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";
import {
  AudioOutlined,
  DeleteOutlined,
  EditOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import {
  DeleteUserAction,
  GetUserAction,
} from "../../../redux/Actions/QLNDAction";
import "../Dashboard/Dashboard.css";

function User(props) {
  const { DSUser } = useSelector((state) => state.QLNDReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserAction());
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "5%",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Họ Tên",
      dataIndex: "name",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "10%",
      sorter: (a, b) => a.hoTen - b.hoTen,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "email",
      dataIndex: "email",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "10%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Ngày Sinh",
      dataIndex: "birthday",
      width: "10%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "role",
      dataIndex: "role",
      width: "10%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hành  Động",
      dataIndex: "id",
      render: (text, ttnd, index) => {
        return (
          <Fragment key={index}>
            <NavLink
              style={{ fontSize: 20 }}
              className=" text-primary mr-3 p-2"
              to={`/admin/user/edituser/${ttnd.id}`}
            >
              <EditOutlined />
            </NavLink>
            <span
              onClick={() => {
                dispatch(DeleteUserAction(ttnd.id));
              }}
              style={{ fontSize: 20, cursor: "pointer" }}
              className=" text-danger mr-3 p-2"
            >
              <DeleteOutlined></DeleteOutlined>
            </span>
          </Fragment>
        );
      },
      width: "10%",
      sortDirections: ["descend", "ascend"],
    },
  ];

  const data = DSUser;
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) => {
    console.log(value);
    dispatch(GetUserAction(value));
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="container">
      <h3 style={{ fontSize: 30, fontWeight: 600 }}>Quản Lý Người Dùng</h3>
      <Button className="mb-3">
        <NavLink to="/admin/user/adduser">Thêm Người Dùng</NavLink>
      </Button>
      <Search
        className="mb-4"
        placeholder="search account"
        onSearch={onSearch}
        enterButton
      />

      <Table
        className="table1"
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"id"}
      />
    </div>
  );
}

export default User;
