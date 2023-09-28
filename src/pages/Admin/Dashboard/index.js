import React, { useEffect } from "react";
import "../Dashboard/Dashboard.css";
import { Card, Space, Statistic, Table } from "antd";
import { CommentBankOutlined, LocationCityOutlined, RoomOutlined, SupervisedUserCircleOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { actListCity } from "../../../redux/actions/actCity";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard(props) {


  return (
    <div className="">
      <div className="d-md-flex justify-content-center">
        <div className="d-md-flex">
          <DashboardCard icon={<RoomOutlined />} title={"City"} value={1234}></DashboardCard>
          <DashboardCard icon={<LocationCityOutlined />} title={"Room"} value={1234}></DashboardCard>
          <DashboardCard icon={<SupervisedUserCircleOutlined />} title={"Customer"} value={1234}></DashboardCard>
          <DashboardCard icon={<CommentBankOutlined />} title={"Comment"} value={1234}></DashboardCard>
        </div>
      </div>

      <div className="d-md-flex" size={20}>
        <div className="col-md-6">
          <RecentRoom />
        </div>

        <div className="col-md-6">
          <DashboardChart />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, value }) {
  return (
    <Card className="m-2">
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value}></Statistic>
      </Space>
    </Card>
  )
}

function RecentRoom() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actListCity())
  }, [])

  const listCity = useSelector((state) => state.cityReducer.data)

  return (
    <div className="table-responsive">
      <h3 className="main__Title">Recent Room</h3>
      <Table
        className="table"
        dataSource={listCity?.splice(0, 3)}
        pagination={false}
        rowKey={"id"}
        columns={[
          {
            title: "ID",
            dataIndex: "id"
          },
          {
            title: "Vị trí",
            dataIndex: "tenViTri"
          },
          {
            title: "Thành phố",
            dataIndex: "tinhThanh"
          }
        ]}
      >
      </Table>

    </div>
  )
}


function DashboardChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Revenue',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.random() * (1000)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.random() * (1000)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}