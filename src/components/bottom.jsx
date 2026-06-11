import { Flex, Space, Table, Tag,Button } from "antd";
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
    dataIndex: "img",
    key: "img",
    render: (image) => (
      <img src={image} alt="" className="w-20 h-20 object-cover" />
    ),
  },
  {
    title: "Название",
    dataIndex: "model",
    key: "model",
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Action",
    align: "center",
    key: "action",
    render: () => (
      <div className=" flex justify-center items-center gap-5">
        <Button>Редактировать</Button>
        <Button danger>Удалить</Button>
      </div>
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
    <div className="mt-15">
      <div className="w-[95%] m-auto">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Bottom;
