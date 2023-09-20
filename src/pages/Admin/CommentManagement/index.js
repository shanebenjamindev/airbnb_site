import React, { Fragment, useEffect } from 'react'
import { Table } from "antd";
import { AudioOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actListComment } from '../../../redux/types/actions'

export default function CommentManagement() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actListComment())
  }, [])

  const listComment = useSelector(state => state.commentReducer.data)

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "10%",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Room id",
      dataIndex: "maPhong",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "20%",
      sorter: (a, b) => a.maPhong - b.maPhong,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Customer id",
      dataIndex: "maNguoiBinhLuan",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      width: "20%",
      sorter: (a, b) => a.maNguoiBinhLuan - b.maNguoiBinhLuan,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "comment",
      dataIndex: "noiDung",
      sorter: (a, b) => {
        let commentA = a.comment.toLowerCase().trim();
        let commentB = b.comment.toLowerCase().trim();
        if (commentA > commentB) {
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
      width: "40%",
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
  ];
  const data = listComment;
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
