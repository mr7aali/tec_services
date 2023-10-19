import DashbordLayouts from "@/components/Layouts/DashbordLayouts";
import React from "react";
import { Table, Divider } from "antd";




const columns = [
 
  {
    title: (
      <div
        className="mx-auto flex justify-center"
        style={{ border: "1px solid red" }}
      >
        <span>Bookingdate</span>
      </div>
    ),
    dataIndex: "name",
  },
  {
    title: (
      <div
        className="mx-auto flex justify-center"
        style={{ border: "1px solid red" }}
      >
        <span>Status</span>
      </div>
    ),
    dataIndex: "name",
  },
  {
    title: (
      <div
        className="mx-auto flex justify-center"
        style={{ border: "1px solid red" }}
      >
        <span>Action</span>
      </div>
    ),
    dataIndex: "name",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
];

const ServiceHistoryPage = () => (
  <div
    style={{ border: "1px solid red" }}
    className="flex justify-center w-full"
  >
    <div className="container">
      <Divider>Middle size table</Divider>
      <Table style={{margin:'40px'}}  columns={columns} dataSource={data} size="middle" />
    </div>

    
  </div>
);

export default ServiceHistoryPage;

ServiceHistoryPage.getLayout = function getLayout(page: any) {
  return <DashbordLayouts>{page}</DashbordLayouts>;
};
