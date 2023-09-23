import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "antd";
import { AudioOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { NavLink } from "react-router-dom";
import "../Dashboard/Dashboard.css";
import { actHomeListRoom } from "../../../redux/types/actions";

export default function RoomManagement() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actHomeListRoom());
  }, []);

  const { data, loading, error } = useSelector((state) => state.homeListRoomReducer);
  
  if (loading) {
    return <div>loading...</div>
  } else if (error) {
    console.log(error);
  }
  else if (data) {
    var listRoomData = data.data
    console.log(listRoomData);
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "UserCode",
      dataIndex: "maNguoiDung",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      sorter: (a, b) => a.maNguoiDung - b.maNguoiDung,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "CodeRoom",
      dataIndex: "maPhong",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      sorter: (a, b) => a.maPhong - b.maPhong,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "ArrivalDate",
      dataIndex: "ngayDen",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Date of department",
      dataIndex: "ngayDi",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: " the number of guests",
      dataIndex: "soLuongKhach",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hành  Động",
      dataIndex: "id",
      render: (text, room, index) => {
        return (
          <Fragment key={index}>
            <NavLink
              className=" text-primary mr-3"
              style={{ fontSize: 20 }}
              to={`/admin/manage-room-edit?${room.id}`}
            >
              <EditOutlined />
            </NavLink>
            <span
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa Phòng " + " " + room.id)) {
                  // dispatch((room.id));
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
      sortDirections: ["descend", "ascend"],
    },
  ];

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
    // console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div className="container">
      <h3 className="main__Title">Quản Lý Phòng</h3>
      <Button className="mb-3 main__p">
        <NavLink to="/admin/manage-locations/add-location">Thêm Vị Trí</NavLink>
      </Button>

      <div className="bg-white container main__p" style={{ overflowX: "auto" }}>
        <Table
          className=""
          columns={columns}
          dataSource={listRoomData}
          onChange={onChange}
          rowKey={"id"}
        />
      </div>
    </div>);
}
