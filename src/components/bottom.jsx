import { Flex, Space, Table, Tag,Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import store from "../lib/redux/store/store";
import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../api/products";


const Bottom = () => {
const {data, search} = useSelector((store)=>store.marketPlace);
const {editModal, setEditModal} = useState(false)
  const handleCancel = () => {
    setEditModal(false);
  };
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getProducts(search));
},[search])

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
    render: (image) => <img src={image} alt="" className="w-20 h-25 " />,
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
    render: (_, record) => (
      <div className=" flex justify-center items-center gap-5">
        <Button onClick={()=>{
            dispatch()
        }}>Редактировать</Button>
        <Button
          danger
          onClick={() => {
            dispatch(deleteProduct(record.id));
          }}
        >
          Удалить
        </Button>
      </div>
    ),
  },
];

  return (
    <div className="mt-15">
      <div className="w-[95%] m-auto">
        <Table columns={columns} dataSource={data} />
      </div>

      <Modal
        title="Изменить товарь"
        open={editModal}
        onCancel={handleCancel}
      ></Modal>
    </div>
  );
};

export default Bottom;
