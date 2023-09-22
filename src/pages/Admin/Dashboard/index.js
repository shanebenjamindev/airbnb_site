import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Dashboard/Dashboard.css";
import { Table } from "antd";
import { actListCity, actHomeListRoom, actListComment } from "../../../redux/types/actions";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function Dashboard(props) {

  const DsViTri = useSelector(state => state.cityReducer.data)
  const Phong = useSelector(state => state.roomReducer.data)
  const listComment = useSelector(state => state.commentReducer.data)

  let DsPhong = [];
  if (Phong) {
    DsPhong = Phong.data
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actListCity())
    dispatch(actHomeListRoom())
    dispatch(actListComment())
  }, [dispatch]);

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
      render: (text, action, index) => {
        return (
          <Fragment key={index}>
            <div className="d-md-flex justify-content-around">
              <NavLink
                className="text-info btn btn-outline-info" style={{ fontSize: 20 }}
                to={`/admin/location/edit/${action.id}`}
              >
                <EditOutlined />
              </NavLink>
              <span
                onClick={() => {
                  if (window.confirm("Bạn có muốn xóa " + " " + action.tenViTri)) {
                    // dispatch(DeleteViTriIDAction(action.id))
                  }
                  console.log(action.id, "ma vị trí cần xóa");
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

  if (DsViTri) {
    var data = DsViTri;
  }

  // render room
  const renderCommentList = () => {
    return listComment?.map((comment, index) => {
      return <tr key={index}>
        <td >{comment.id}</td>
        <td >{comment.maPhong}</td>
        <td >{comment.noiDung}</td>
        <td >{comment.maNguoiBinhLuan}</td>
        <td >{comment.saoBinhLuan}</td>
      </tr>;
    });
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  // render feature room for client
  const client = () => {
    return DsPhong?.slice(0, 5).map((hinhanh, index) => {
      return (
        <div key={index} className="custom-card d-flex flex-wrap">
          <img className="col-md-2 col-lg-2 col-12" src={hinhanh.hinhAnh} width={80} height={80} alt="" />
          <div className=" col-md-10 col-lg-10 col-12">
            <p className="main__Title" width={30}>{hinhanh.tenPhong}</p>
            <span className="main__p">
              Khách: {hinhanh.khach}
            </span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-dark">
      {/** Row 1 : Total*/}
      <div className="d-md-flex justify-content-around dashboard__Content ">
        <div className="card-single">
          <div >
            <h2 className="text-warning mt-2" style={{ fontSize: 20 }}>300000$</h2>
            <small >All Earnings</small>
          </div>
          <div className="mt-2">
            <img src="https://cdn-icons-png.flaticon.com/128/5012/5012689.png" width={50} alt="" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h2 className="text-success" style={{ fontSize: 20 }}>290+</h2>
            <small>Page Views</small>
          </div>
          <div className="mt-2">
            <img src="https://cdn-icons-png.flaticon.com/128/5412/5412995.png" width={50} alt="" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h2 className="text-danger" style={{ fontSize: 20 }}>145</h2>
            <small>Task Completed</small>
          </div>
          <div className="mt-2">
            <img src="https://cdn-icons-png.flaticon.com/128/6030/6030198.png" width={50} alt="" />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h2 className="text-success" style={{ fontSize: 20 }}>500,000+</h2>
            <small>Booking</small>
          </div>
          <div className="mt-2">
            <img src="https://cdn-icons-png.flaticon.com/128/6794/6794792.png" width={50} alt="" />
          </div>
        </div>
      </div>

      <div className="dashboard__Content d-md-flex">
        { /** Row 2: Graphs */}
        <div className="col-md-4">
          <div className="">
            <div>
              <div className="title">
                <p className="main__p">Monthly Revenue</p>
              </div>
              <svg
                className="admin_ticket container"
                width="529px"
                height="286px"
                viewBox="30 27 529 286"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="graph-copy"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                  transform="translate(30.000000, 27.000000)"
                >
                  <g
                    id="y_axis"
                    fontSize="11.0833333"
                    fontFamily=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface"
                    fill="#FFFFFF"
                    opacity="0.4"
                    fontWeight="normal"
                  >
                    <text id={0}>
                      <tspan x="25.3008249" y="264.333333">
                        0
                      </tspan>
                    </text>
                    <text id={200}>
                      <tspan x="12.7757572" y="232.666667">
                        200
                      </tspan>
                    </text>
                    <text id={400}>
                      <tspan x="12.7757572" y={201}>
                        400
                      </tspan>
                    </text>
                    <text id={600}>
                      <tspan x="12.7757572" y="169.333333">
                        600
                      </tspan>
                    </text>
                    <text id={800}>
                      <tspan x="12.7757572" y="137.666667">
                        800
                      </tspan>
                    </text>
                    <text id={1000}>
                      <tspan x="6.51322328" y={106}>
                        1000
                      </tspan>
                    </text>
                    <text id={1200}>
                      <tspan x="6.51322328" y="74.3333333">
                        1200
                      </tspan>
                    </text>
                    <text id={1400}>
                      <tspan x="6.51322328" y="42.6666667">
                        1400
                      </tspan>
                    </text>
                    <text id={1600}>
                      <tspan x="6.51322328" y={11}>
                        1600
                      </tspan>
                    </text>
                  </g>
                  <g
                    id="GRAPHS"
                    transform="translate(64.000000, 16.000000)"
                    strokeLinecap="round"
                    strokeWidth={8}
                    strokeLinejoin="round"
                  >
                    <polyline
                      id="Banks"
                      stroke="#5BCAC1"
                      points="0 1 88.0438662 1 128.985782 137 180.170616 137 224.189573 182 256.947867 91 301.990521 137 346.009479 91 392.087202 91 429.952607 179"
                    />
                    <polyline
                      id="Bridge"
                      stroke="#81DEFF"
                      points="2.04739336 183 54.2559242 227 96.2274882 47 133.080569 1 302.018438 1 346.680361 44.6280822 386.957346 0 427.905213 43"
                    />
                    <polyline
                      id="PayPal"
                      stroke="#F6F5A6"
                      points="2.04739336 180 53.273159 180 99.2985782 91 137.175355 47 219.077488 47 256.947867 90 301.990521 47 349.080569 137 398.228672 137 432 91"
                    />
                  </g>
                  <g
                    id="x_axis"
                    transform="translate(71.974046, 271.541667)"
                    fontSize="11.0833333"
                    fontFamily=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface"
                    fill="#FFFFFF"
                    opacity="0.4"
                    fontWeight="normal"
                  >
                    <text id={1}>
                      <tspan x="0.396183206" y={11}>
                        1
                      </tspan>
                    </text>
                    <text id={2}>
                      <tspan x="39.2603361" y={11}>
                        2
                      </tspan>
                    </text>
                    <text id={3}>
                      <tspan x="78.8786567" y={11}>
                        3
                      </tspan>
                    </text>
                    <text id={4}>
                      <tspan x="118.496977" y={11}>
                        4
                      </tspan>
                    </text>
                    <text id={5}>
                      <tspan x="158.115298" y={11}>
                        5
                      </tspan>
                    </text>
                    <text id={6}>
                      <tspan x="197.733619" y={11}>
                        6
                      </tspan>
                    </text>
                    <text id={7}>
                      <tspan x="237.351939" y={11}>
                        7
                      </tspan>
                    </text>
                    <text id={8}>
                      <tspan x="276.97026" y={11}>
                        8
                      </tspan>
                    </text>
                    <text id={9}>
                      <tspan x="316.58858" y={11}>
                        9
                      </tspan>
                    </text>
                    <text id={10}>
                      <tspan x="359.229833" y={11}>
                        10
                      </tspan>
                    </text>
                    <text id={11}>
                      <tspan x="400.036703" y={11}>
                        11
                      </tspan>
                    </text>
                    <text id={12}>
                      <tspan x="438.466474" y={11}>
                        12
                      </tspan>
                    </text>
                  </g>
                  <g
                    id="grid"
                    transform="translate(46.618321, 4.750000)"
                    stroke="#FFFFFF"
                    strokeLinecap="square"
                    opacity="0.0800000057"
                  >
                    <path
                      d="M0.396183206,1.1875 L478.991396,1.1875"
                      id="Line"
                    />
                    <path
                      d="M0.396183206,32.8541667 L478.991396,32.8541667"
                      id="Line"
                    />
                    <path
                      d="M0.396183206,64.5208333 L478.991396,64.5208333"
                      id="Line"
                    />
                    <path
                      d="M0.396183206,96.1875 L478.991396,96.1875"
                      id="Line"
                    />
                    <path
                      d="M0.396183206,127.854167 L478.991396,127.854167"
                      id="Line"
                    />
                    <path
                      d="M0.396183206,159.520833 L478.991396,159.520833"
                      id="Line"
                    />
                    <path
                      d="M0.396183206,191.1875 L478.991396,191.1875"
                      id="Line"
                    />
                    <path
                      d="M0.396183206,222.854167 L478.991396,222.854167"
                      id="Line"
                    />
                    <path
                      d="M0.396183206,254.520833 L478.991396,254.520833"
                      id="Line"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="p-5">
            <div className="stats-info d-md-flex  text-white">
              <div className="graph-container  ">
                <div className="percent d-none d-lg-block">
                  <svg viewBox="0 0 36 36" style={{ marginTop: 77 }} className="circular-chart">
                    <path
                      className="circle-x"
                      strokeDasharray="100, 100"
                      d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle-x"
                      strokeDasharray="85, 100"
                      d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle-x"
                      strokeDasharray="60, 100"
                      d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle-x"
                      strokeDasharray="30, 100"
                      d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
                <p className="position-absolute d-none d-lg-block">Total: $20.175</p>
              </div>
              <div className="info ">
                <p>
                  Total Earnings each month
                  <br />
                  <span>Rooms &amp; Booking</span>
                </p>
                <p>
                  Update new customers <span>2</span>
                </p>
                <p>
                  Bonus of the month <span>$92</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8 bg-white p-2">
          <div className="">
            <h1 className="main__Title" style={{ fontSize: 30 }}>
              Featured room
            </h1>
            <div className="line"></div>
            <div className="overflow-container mt-2">{client()}</div>
          </div>
        </div>

      </div>

      <div className="dashboard__Content container d-md-flex">
        <div className="bg-white col-md-8 col-lg-8">
          <h3 className="main__Title my-3 text-center">Danh sách vị trí</h3>
          <div className="">
            <div className="table-responsive">
              <Table
                style={{ height: "500px" }}
                columns={columns}
                dataSource={data}
                onChange={onChange}
                rowKey={"id"}
              />
            </div>
          </div>
        </div>


        <div className=" col-md-4 col-lg-4">
          <h3 className="text-white my-4 text-center main__p">
            Thống kê Comments
          </h3>
          <div className="overflow-container">
            <table className="table  bg-white ">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Hình Ảnh</th>
                  <th>Tên Phòng</th>
                  <th>Khách</th>
                </tr>
              </thead>
              <tbody>
                {renderCommentList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  );
}




// const columns = [
//   {
//     title: "ID",
//     dataIndex: "id",
//     value: (text, object) => {
//       return <td key={object}>{text}</td>;
//     },
//     width: "5%",
//     sorter: (a, b) => a.id - b.id,
//     sortDirections: ["descend", "ascend"],
//   },

//   {
//     title: "Hình Ảnh",
//     dataIndex: "hinhAnh",
//     width: "20%",
//     render: (text, location, index) => {
//       return (
//         <img
//           src={location.hinhAnh}
//           alt={location.tenViTri}
//           width={50}
//           height={50}
//           onError={(e) => {
//             e.target.onError = null;
//             e.target.src = `https://piscum.photos/id/${index}/50/50`;
//           }}
//         />
//       );
//     },
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: "Tỉnh Thành",
//     dataIndex: "tinhThanh",
//     sorter: (a, b) => {
//       let tinhThanhA = a.tinhThanh.toLowerCase().trim();
//       let tinhThanhB = b.tinhThanh.toLowerCase().trim();
//       if (tinhThanhA > tinhThanhB) {
//         return 1;
//       }
//       return -1;
//     },
//     width: "20%",
//     sortDirections: ["descend", "ascend"],
//   },
//   {
//     title: "Quốc Gia",
//     dataIndex: "quocGia",
//     sorter: (a, b) => {
//       let quocGiaA = a.quocGia.toLowerCase().trim();
//       let quocGiaB = b.quocGia.toLowerCase().trim();
//       if (quocGiaA > quocGiaB) {
//         return 1;
//       }
//       return -1;
//     },
//     render: (text, tinhThanh, index) => {
//       return (
//         <Fragment key={index}>
//           {tinhThanh.quocGia.length > 50
//             ? tinhThanh.quocGia.substr(0, 50) + "..."
//             : tinhThanh.quocGia}
//         </Fragment>
//       );
//     },
//     width: "20%",
//     sortDirections: ["descend", "ascend"],
//   },
// ];
// const data = DsViTri;