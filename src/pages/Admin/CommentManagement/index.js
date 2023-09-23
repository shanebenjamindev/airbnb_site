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

  const handleDeleteComment = (e) => {
    e.preventDefault();
    dispatch()
  }

  const listComment = useSelector(state => state.commentReducer.data)

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
      title: "Mã phòng",
      dataIndex: "maPhong",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      sorter: (a, b) => a.maPhong - b.maPhong,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Mã khách hàng",
      dataIndex: "maNguoiBinhLuan",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },
      sorter: (a, b) => a.maNguoiBinhLuan - b.maNguoiBinhLuan,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Nội dung",
      dataIndex: "noiDung",
      render: (text, room, index) => {
        return (
          <Fragment key={index}>
            {room.noiDung.length > 50
              ? room.noiDung.substr(0, 50) + "..."
              : room.noiDung}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Sao bình luận",
      dataIndex: "saoBinhLuan",
      value: (text, object) => {
        return <span key={object}>{text}</span>;
      },

      sorter: (a, b) => a.saoBinhLuan - b.saoBinhLuan,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hành động",
      render: (text, comment, index) => {
        return <button onClick={handleDeleteComment} value={comment.id} className='btn btn-danger'>Delete</button>
      },
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
    <div className="">
      <h3 className='main__Title text-center'>Quản Lý Comment</h3>
      <Table
        className="mt-5 table table-responsive"
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"id"}
      />
    </div>
  )
}
