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
// import { DeleteViTriIDAction, getDsViTriAction } from "../../../redux/Actions/ViTriDatVeAction";
import { actDeleteCity, actListCity } from "../../../redux/types/actions";
import './manage-location.css'

export default function QlLocation(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actListCity())
  }, []);

  const DsViTri = useSelector(state => state.cityReducer.data)
  if (DsViTri) {
    var data = DsViTri;
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
      title: "Tên Vị Trí",
      dataIndex: "tenViTri",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
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
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hành  Động",
      dataIndex: "id",
      render: (text, city, index) => {
        return (
          <Fragment key={index}>
            <div className="d-md-flex justify-content-around">
              <NavLink
                className="text-info btn btn-outline-info" style={{ fontSize: 20 }}
                to={`/admin/location/edit/${city.id}`}
              >
                <EditOutlined />
              </NavLink>
              <span
                onClick={() => {
                  if (window.confirm("Bạn có muốn xóa " + " " + city.tenViTri)) {
                    dispatch(actDeleteCity(city.id))
                  }
                  console.log(city.id, "ma vị trí cần xóa");
                }}
                style={{ fontSize: 20, cursor: "pointer" }}
                className="btn btn-outline-danger"
              >
                <DeleteOutlined />
              </span>
            </div>
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
  };

  return (
    <div className="container">
      <h3 className="main__Title">Quản Lý Vị Trí</h3>
      <Button className="mb-3 main__p">
        <NavLink to="/admin/manage-locations/add-location">Thêm Vị Trí</NavLink>
      </Button>

      <div className="bg-white container main__p" style={{ overflowX: "auto" }}>
        <Table
          className=""
          columns={columns}
          dataSource={data}
          onChange={onChange}
          rowKey={"id"}
        />
      </div>
    </div>
  );
}
