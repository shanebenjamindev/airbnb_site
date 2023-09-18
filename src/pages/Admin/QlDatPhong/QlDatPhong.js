import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteDatPhongIDAction,
  GetApiDatPhongAction,
} from "../../../redux/Actions/QuanLyDatPhongAction";
import { Table } from "antd";
import { AudioOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { NavLink } from "react-router-dom";
import "../Dashboard/Dashboard.css";

export default function QlDatPhong(props) {
  const { GetApiDatPhong } = useSelector((state) => state.QlDatPhongReducer);
  console.log({ GetApiDatPhong });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetApiDatPhongAction());
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
      title: "UserCode",
      dataIndex: "maNguoiDung",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "5%",
      sorter: (a, b) => a.maNguoiDung - b.maNguoiDung,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "CodeRoom",
      dataIndex: "maPhong",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "5%",
      sorter: (a, b) => a.maPhong - b.maPhong,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "ArrivalDate",
      dataIndex: "ngayDen",
      width: "20%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Date of department",
      dataIndex: "ngayDi",
      width: "20%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: " the number of guests",
      dataIndex: "soLuongKhach",
      width: "5%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hành  Động",
      dataIndex: "id",
      render: (text, ttnd, index) => {
        return (
          <Fragment key={index}>
            <NavLink
              className=" text-primary mr-3"
              style={{ fontSize: 20 }}
              to={`/admin/Booking/edit/${ttnd.id}`}
            >
              <EditOutlined />
            </NavLink>
            <span
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa Phòng " + " " + ttnd.id)) {
                  dispatch(DeleteDatPhongIDAction(ttnd.id));
                }
              }}
              style={{ fontSize: 20, cursor: "pointer" }}
              className=" text-danger mr-3 p-2"
            >
              <DeleteOutlined></DeleteOutlined>
            </span>
          </Fragment>
        );
      },
      width: "5%",
      sortDirections: ["descend", "ascend"],
    },
  ];
  const data = GetApiDatPhong;
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="container">
      <h3 style={{ fontSize: 30, fontWeight: 600 }}>Quản Lý Đặt Phòng</h3>
      <Table
        className="mt-3 table1"
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"id"}
      />
    </div>
  );
}
