import React, { Fragment, useEffect } from 'react'
import { Table } from "antd";
import { AudioOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { BinhLuanAction, DeleteBinhLuanAction } from '../../../redux/Actions/BinhLuanAction';

export default function Comment() {
    const {LayBinhLuan} = useSelector(state=>state.QLBinhLuanReducer)
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(BinhLuanAction())
     },[])
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
          title: "mã Phòng",
          dataIndex: "maPhong",
          value: (text, object) => {
            return <span key={object}>{text}</span>;
          },
          width: "10%",
          sorter: (a, b) => a.maPhong- b.maPhong,
          sortDirections: ["descend", "ascend"],
        },
        {
          title: "ma Nguoi Binh Luan",
          dataIndex: "maNguoiBinhLuan",
          value: (text, object) => {
            return <span key={object}>{text}</span>;
          },
          width: "10%",
          sorter: (a, b) => a.maNguoiBinhLuan - b.maNguoiBinhLuan,
          sortDirections: ["descend", "ascend"],
        },
        {
            title: "noiDung",
            dataIndex: "noiDung",
            sorter: (a, b) => {
              let noiDungA = a.noiDung.toLowerCase().trim();
              let noiDungB = b.noiDung.toLowerCase().trim();
              if (noiDungA >noiDungB) {
                return 1;
              }
              return -1;
            },
            render: (text, room, index) => {
              return (
                <Fragment key={index}>
                  {room.noiDung.length > 50
                    ? room.noiDung.substr(0, 50) + "..."
                    : room.noiDung}
                </Fragment>
              );
            },
            width: "20%",
            sortDirections: ["descend", "ascend"],
          },
          {
            title: "saoBinhLuan",
            dataIndex: "saoBinhLuan",
            value: (text, object) => {
              return <span key={object}>{text}</span>;
            },
            width: "10%",
            sortDirections: ["descend", "ascend"],
          },
        {
          title: "Hành  Động",
          dataIndex: "id",
          render: (text, action, index) => {
            return (
              <Fragment key={index}>
                <span
                  onClick={() => {
                    if (window.confirm("Bạn có muốn xóa Bình Luận  " + " " + action.id)) {
                            dispatch(DeleteBinhLuanAction(action.id))
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
          width: "10%",
          sortDirections: ["descend", "ascend"],
        },
      ];
      const data = LayBinhLuan;
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
    <h3 style={{ fontSize: 30, fontWeight: 600 }}>Quản Lý Comment</h3>
    <Table
      className="mt-5 table1"
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowKey={"id"}
    />
  </div>
  )
}
