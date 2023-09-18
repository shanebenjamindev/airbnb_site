import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";
import {
  AudioOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DeleteViTriIDAction, getDsViTriAction } from "../../../redux/Actions/ViTriDatVeAction";
import "../Dashboard/Dashboard.css";

export default function QlLocation(props) {
  const {DsViTri} = useSelector(state=>state.DSVitri)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getDsViTriAction())
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "20%",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tên Vị Trí",
      dataIndex: "tenViTri",
      width: "20%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      width: "20%",
      render: (text, location, index) => {
        return (
          <Fragment>
            <img
              src={location.hinhAnh}
              alt={location.tenViTri}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://piscum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tỉnh Thành",
      dataIndex: "tinhThanh",
      sorter: (a, b) => {
        let tinhThanhA = a.tinhThanh.toLowerCase().trim();
        let tinhThanhB = b.tinhThanh.toLowerCase().trim();
        if (tinhThanhA > tinhThanhB) {
          return 1;
        }
        return -1;
      },
      width: "20%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Quốc Gia",
      dataIndex: "quocGia",
      sorter: (a, b) => {
        let quocGiaA = a.quocGia.toLowerCase().trim();
        let quocGiaB = b.quocGia.toLowerCase().trim();
        if (quocGiaA > quocGiaB) {
          return 1;
        }
        return -1;
      },
      render: (text, tinhThanh, index) => {
        return (
          <Fragment key={index}>
            {tinhThanh.quocGia.length > 50
              ? tinhThanh.quocGia.substr(0, 50) + "..."
              : tinhThanh.quocGia}
          </Fragment>
        );
      },
      width: "20%",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hành  Động",
      dataIndex: "id",
      render: (text, action, index) => {
        return (
          <Fragment key={index}>
            <NavLink
              className=" text-primary mr-3" style={{fontSize:20}}
              to={`/admin/location/edit/${action.id}`}
            >
              <EditOutlined/>
            </NavLink>
            <span
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa " + " " + action.tenViTri)) {
                    dispatch(DeleteViTriIDAction(action.id))
                }
                console.log(action.id, "ma vị trí cần xóa");
              }}
              style={{ fontSize: 20, cursor: "pointer" }}
              className=" text-danger mr-3 p-2 "
            >
              <DeleteOutlined/>
            </span>
          </Fragment>
        );
      },
      width: "20%",
      sortDirections: ["descend", "ascend"],
    },
  ];
  const data = DsViTri;
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
    console.log("params", pagination, filters);
  };

  return (
    <div className="container">
      <h3 style={{ fontSize: 30, fontWeight: 600 }}>Quản Lý Vị Trí</h3>
      <Button className="mb-3">
        <NavLink to="/admin/location/addnew">Thêm Vị Trí</NavLink>
      </Button>

      <Table
        className=" table1"
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"id"}
      />
    </div>
  );
}
