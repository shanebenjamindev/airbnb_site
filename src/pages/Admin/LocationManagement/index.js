import React, { Fragment, useEffect, useState } from "react";
import { Button, Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { actDeleteCity, actListCity } from "../../../redux/types/actions";
import './manage-location.css'
import LocationModal from "./LocationModal";

export default function AdminLocation(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actListCity())
  }, [dispatch]);

  const DsViTri = useSelector(state => state.cityReducer.data)

  if (DsViTri) {
    var data = DsViTri;
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [formData, setFormData] = useState(null); // Initialize with an empty object

  const showModal = (mode, editData) => {
    setModalMode(mode);
    setFormData(editData); // Initialize with empty data or editData if provided
    setIsModalVisible(true);
  };

  const handleModalOk = (newData) => {
    // Handle the form submission based on modalMode (add or edit)
    if (modalMode === "add") {
      
      console.log('Added Data:', newData);

    } else if (modalMode === "edit") {
      // Handle editing logic here
      console.log('Edited Data:', newData);
      // Update your state or dispatch actions as needed
    }
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

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
              <button
                onClick={() => showModal("edit", city)}
                className="btn btn-outline-info"
              >
                <EditOutlined />
              </button>
              <span
                onClick={() => {
                  if (window.confirm("Bạn có muốn xóa " + city.tenViTri)) {
                    dispatch(actDeleteCity(city.id))
                  }
                  console.log(city.id, "Ma vị trí cần xóa");
                }}
                style={{ fontSize: 20, cursor: "pointer" }}
                className="btn btn-outline-danger"
              >
                <DeleteOutlined />
              </span>
            </div>
          </Fragment >
        );
      },
      sortDirections: ["descend", "ascend"],
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
  };

  return (
    <div className="container">
      <h3 className="main__Title">Quản Lý Vị Trí</h3>
      <Button className="mb-3 main__p" onClick={() => showModal("add")}>Thêm Vị Trí</Button>
      {/* Add Location Modal */}
      <LocationModal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        onOk={handleModalOk}
        mode={modalMode}
        data={formData}
      />

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
