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
  DeletePhongAction,
  PhongAction,
} from "../../../redux/Actions/PhongActions";
import "../Dashboard/Dashboard.css";

export default function AdminRoom(props) {
  const { Phong } = useSelector((state) => state.DSPhongTheoVitriReducer);
  console.log({ Phong });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PhongAction());
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
      title: "hình  Ảnh",
      dataIndex: "hinhAnh",
      width: "20%",
      render: (text, room, index) => {
        return (
          <Fragment>
            <img
              src={room.hinhAnh}
              alt={room.tenPhim}
              width={100}
              height={200}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://piscum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Tên Phòng",
      dataIndex: "tenPhong",
      sorter: (a, b) => {
        let tenPhongA = a.tenPhong.toLowerCase().trim();
        let tenPhongB = b.tenPhong.toLowerCase().trim();
        if (tenPhongA > tenPhongB) {
          return 1;
        }
        return -1;
      },
      width: "20%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      sorter: (a, b) => {
        let motaA = a.moTa.toLowerCase().trim();
        let moTaB = b.moTa.toLowerCase().trim();
        if (motaA > moTaB) {
          return 1;
        }
        return -1;
      },
      render: (text, room, index) => {
        return (
          <Fragment key={index}>
            {room.moTa.length > 50
              ? room.moTa.substr(0, 50) + "..."
              : room.moTa}
          </Fragment>
        );
      },
      width: "20%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Khách",
      dataIndex: "khach",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "5%",

      sorter: (a, b) => a.khach - b.khach,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hành  Động",
      dataIndex: "id",
      render: (text, room, index) => {
        return (
          <Fragment key={index}>
            <NavLink
              style={{ fontSize: 20 }}
              className=" text-primary mr-3  "
              to={`/admin/room/edit/${room.id}`}
            >
              <EditOutlined />
            </NavLink>
            <span
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa " + " " + room.tenPhong)) {
                  dispatch(DeletePhongAction(room.id));
                }
              }}
              style={{ fontSize: 20, cursor: "pointer" }}
              className=" text-danger mr-3 p-2 "
            >
              <DeleteOutlined />
            </span>
            <NavLink
              style={{ fontSize: 20 }}
              className=" text-success mr-3 p-2"
              to={`/admin/showtime/${room.id}`}
            >
              <CalendarOutlined />
            </NavLink>
          </Fragment>
        );
      },
      width: "20%",
      sortDirections: ["descend", "ascend"],
    },
  ];
  const data = Phong;
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
      <h3 style={{ fontSize: 30, fontWeight: 600 }}>Quản Lý Thông Tin Phòng</h3>
      <Button className="mb-3">
        <NavLink to="/admin/room/addnew">Thêm Phòng</NavLink>
      </Button>

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
