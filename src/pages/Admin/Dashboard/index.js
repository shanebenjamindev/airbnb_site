import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Dashboard/Dashboard.css";
import { Table } from "antd";
import {
  LineChartOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  StarOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { actListCity, actGetRoomByCity, actHomeListRoom } from "../../../redux/types/actions";

export default function Dashboard(props) {

  const DsViTri = useSelector(state => state.cityReducer.data)
  const Phong = useSelector(state => state.homeListRoomReducer.data)

  let DsPhong = [];
  if (Phong) {
    DsPhong = Phong.data
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actListCity())
    dispatch(actHomeListRoom())
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      value: (text, object) => {
        return <td key={object}>{text}</td>;
      },
      width: "5%",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      width: "20%",
      render: (text, location, index) => {
        return (
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
  ];
  const data = DsViTri;

  // render 
  const renderPhong = () => {
    return DsPhong?.map((phong, index) => {
      return <tr key={index}>
        <td >{phong.id}</td>
        <td ><img src={phong.hinhAnh}  alt="" /></td>
        <td >{phong.tenPhong}</td>
        <td >{phong.khach}</td>
      </tr>;
    });
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  // render 
  const client = () => {
    return DsPhong?.slice(0, 5).map((hinhanh, index) => {
      return (
        <div key={index}>
          <div className="all-users">
            <div className="infos">
              <img src={hinhanh.hinhAnh} width={80} height={80} />
              <div>
                <h4 width={30}>{hinhanh.tenPhong}</h4>
                <span
                  style={{
                    fontSize: "17px",
                    color: "#a5971b",
                    display: "flex",
                  }}
                >
                  Khách: {hinhanh.khach}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div>
        <div >
          <div className=" bg-warning">
            {/** hang ngang*/}
            <div className="dashboard__Content">
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

            <div className="dashboard__Content">
              <div className="statistique col-8">
                <div>
                  <div className="title">
                    <p>Number Of Rooms Sold</p>
                    <p className="name">Monthly Revenue</p>
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

              <div className="graph col-4">
                <div className="year-stats">
                  <div className="month-group">
                    <div className="bar h-100" />
                    <p className="month">Jan</p>
                  </div>
                  <div className="month-group">
                    <div className="bar h-50" />
                    <p className="month">Feb</p>
                  </div>
                  <div className="month-group">
                    <div className="bar h-75" />
                    <p className="month">Mar</p>
                  </div>
                  <div className="month-group">
                    <div className="bar h-25" />
                    <p className="month">Apr</p>
                  </div>
                  <div className="month-group selected">
                    <div className="bar h-100" />
                    <p className="month">May</p>
                  </div>
                  <div className="month-group">
                    <div className="bar h-50" />
                    <p className="month">Jun</p>
                  </div>
                  <div className="month-group">
                    <div className="bar h-75" />
                    <p className="month">Jul</p>
                  </div>
                  <div className="month-group">
                    <div className="bar h-25" />
                    <p className="month">Aug</p>
                  </div>
                  <div className="month-group">
                    <div className="bar h-50" />
                    <p className="month">Sep</p>
                  </div>
                  <div className="month-group">
                    <div className="bar h-75" />
                    <p className="month">Oct</p>
                  </div>
                  <div className="month-group">
                    <div className="bar h-25" />
                    <p className="month">Nov</p>
                  </div>
                  <div className="month-group">
                    <div className="bar h-100" />
                    <p className="month">Dez</p>
                  </div>
                </div>
                <div className="stats-info">
                  <div className="graph-container">
                    <div className="percent">
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
                    <p>Total: $20.175</p>
                  </div>
                  <div className="info">
                    <p>
                      Total Earnings each month
                      <br />
                      <span>Restaurants &amp; Dining</span>
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

            <div className="dashboard__Content">
              <div className="case col-6">
                <div className="header-case">
                  <h2
                    className="text-danger"
                  >
                    Listes Location
                  </h2>
                </div>
                <div className="body-case">
                  <div className="tableau">
                    <Table
                      style={{ height: "500px", backgroundColor: '#de437d' }}
                      columns={columns}
                      dataSource={data}
                      onChange={onChange}
                      rowKey={"id"}
                    />
                  </div>
                </div>

              </div>

              <div className="stock col-6">
                <div className="case">
                  <div className="header-case">
                    <h2 className="text-danger" style={{ fontSize: 30 }}>
                      Featured room
                    </h2>
                  </div>
                  <div className="body-case">{client()}</div>
                </div>
              </div>

            </div>

            <div className="calendar table1">
              <div className="mois-annee">
                <ul>
                  <li>
                    Thống Kê Phòng Đã Được Đặt
                    <br />
                    <span>2022</span>
                  </li>
                </ul>
              </div>
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Hình Ảnh</th>
                    <th>Tên Phòng</th>
                    <th>Khách</th>
                  </tr>
                </thead>
                <tbody>
                  {renderPhong()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
