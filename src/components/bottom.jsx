import { Flex, Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import store from "../lib/redux/store/store";
import { useEffect } from "react";
import { getProducts } from "../api/products";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Изоброжение",
    dataIndex: "изоброжение",
    key: "изоброжение",
  },
  {
    title: "Название",
    dataIndex: "название",
    key: "название",
  },
  {
    title: "Цена",
    dataIndex: "цена",
    key: "цена",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="medium">
        <a>Редактировать {record.name}</a>
        <a>Удалить</a>
      </Space>
    ),
  },
];

const Bottom = () => {
const {data, search} = useSelector((store)=>store.marketPlace);
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getProducts(search));
},[search])

  return (
  <div>
<Table columns={columns} dataSource={}/>

  </div>;

  )
};

export default Bottom;
