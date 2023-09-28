import React, { useEffect, useState } from "react";
import { Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { actAddCity, actDeleteCity, actEditCity, actListCity } from "../../../redux/actions/actCity";
import './manage-location.css'
import LocationForm from "./LocationForm";

export default function AdminLocation(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actListCity())
  }, [dispatch]);

  const { data } = useSelector(state => state.cityReducer)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [formData, setFormData] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredUserData, setFilteredUserData] = useState(null);


  const showModal = (mode, cityData) => {
    setModalMode(mode);

    setFormData(cityData);

    setIsModalVisible(true);
  };

  const handleModalOk = (id, newData) => {
    if (modalMode === "add") {
      if (!id) {
        dispatch(actAddCity(newData))
      }

    } else if (modalMode === "edit") {
      dispatch(actEditCity(id, newData))
    }
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearch = () => {
    const filteredData = data.filter((city) => {
      const { tenViTri, tinhThanh, id } = city;
      const keyword = searchKeyword.toLowerCase();
      return (
        tenViTri.toLowerCase().includes(keyword) ||
        tinhThanh.toLowerCase().includes(keyword) ||
        id.toString().includes(keyword)
      );
    });

    setFilteredUserData(filteredData);
  };


  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      value: (city, index) => {
        return <span key={index}>{city.id}</span>;
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
      render: (city, index) => {
        return (
          <div>
            <img
              src={city}
              alt={city.tenViTri}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://piscum.photos/id/${index}/50/50`;
              }}
            />
          </div>
        );
      },
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
    },
    {
      title: "Hành  Động",
      render: (city, index) => {
        return (
          <div key={index} className="d-md-flex justify-content-around">
            <button
              onClick={() => showModal("edit", city)}
              className="btn btn-outline-info"
            >
              <EditOutlined />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                if (window.confirm("Bạn có muốn xóa " + city.tenViTri)) {
                  dispatch(actDeleteCity(city.id))
                }
              }}
              className="btn btn-outline-danger"
            >
              <DeleteOutlined />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="container">
      <div>
        <h3 className="main__Title my-2 text-center">Quản Lý Vị Trí</h3>
        <LocationForm open={isModalVisible} formData={formData} onCancel={handleModalCancel} onOk={handleModalOk} mode={modalMode} />

        <div className=" justify-content-center d-flex align-items-center mb-2">
          <button className="btn__Primary" onClick={() => showModal("add", null)}>Thêm Vị Trí</button>
          <div className='text-center w-50 mx-2'>
            <input
              type="text"
              className='form-control'
              placeholder="Tìm theo tên tỉnh thành, id"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          <button className="btn__Primary" onClick={() => handleSearch()}>Tìm kiếm</button>
        </div>


        <div className="bg-white table-responsive" >
          {data && (
            <Table
              className="table"
              dataSource={filteredUserData !== null ? filteredUserData : data}
              columns={columns}
              rowKey={"id"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
