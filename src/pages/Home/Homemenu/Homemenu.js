import React, { useEffect } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AimOutlined } from "@ant-design/icons";
import "../Homemenu/homemenu.css";
import { getDsViTriAction } from "../../../redux/Actions/ViTriDatVeAction";
import {Fade} from 'react-reveal'
export default function Homemenu(props) {

  const { Option } = Select;

  const { DsViTri } = useSelector((state) => state.DSVitri);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDsViTriAction());
  }, []);


  const DSViTri = () => {
    return DsViTri.map((vitri, index) => {
      return (
        <Option key={index}>
          <AimOutlined className="icon" />{" "}
          <span className="ml-3">
            {" "}
            {vitri.tenViTri}, {vitri.tinhThanh}
          </span>
        </Option>
      );
    });
  };


  const onChange = (value) => {
    return DsViTri.map((vitri, index) => {
      return (
        <Option key={index}>
          {vitri.tenViTri},{vitri.tinhThanh}
        </Option>
      );
    });
    // console.log(`selected ${value}`);
  };

  return (
    <section className="myCover">
      <div className="cover__content">
        <div className="row tool-search ">
          <Fade left delay={2000} >
          <div className="drop col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="dropdown">
              <span className="room-out">lOCATION</span>
              <input className="form-control" />
              <Select
                className="form-control"
                style={{ position: "absolute", left: 10, top: 40 }}
                showSearch
                placeholder="Select a person"
                optionFilterProp="tenViTri"
                onChange={onChange}
              >
                {DSViTri()}
              </Select>
            </div>
          </div> </Fade>
          <Fade top delay={2100}>
          <div className=" drop col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <span className="room-out">CHECK IN</span>
            <input className="form-control" type="date" />
          </div></Fade>
         
          <Fade right delay={2000}>
          <div className=" drop col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <span className="room-out">CHECK OUT</span>
            <input className="form-control" type="date" />
          </div>
          </Fade>    
        </div>
      </div>
    </section>
  );
}
