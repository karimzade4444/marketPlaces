import {  Table, Button, Modal,Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { deleteProduct, getProducts, updateProduct } from "../api/products";
import { setEditId, setEditImg, setEditModel, setEditPrice } from "../lib/redux/slice/slice";


const Bottom = () => {
const {data, search,id,editModel,editImg,editPrice} = useSelector((store)=>store.marketPlace);
const [editModal, setEditModal] = useState(false)
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
            dispatch(setEditId(record.id))
            dispatch(setEditModel(record.model));
            dispatch(setEditImg(record.img));
            dispatch(setEditPrice(record.price));
            setEditModal(true)
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

      <Modal title="Изменить товарь" open={editModal} onCancel={handleCancel} onOk={()=>{dispatch(
        updateProduct({
          id,
          model: editModel,
          price: editPrice,
          img: editImg,
        }),
      );
      setEditModal(false)
      }}>
        <div className=" w-[95%] m-auto">
          <div>
            <div>
              <p>Изоброжение</p>
              <Input
                placeholder="https://..."
                variant="filled"
                value={editImg}
                onChange={(e) => {
                  dispatch(setEditImg(e.target.value));
                }}
              ></Input>
            </div>
            <div>
              <p>Название</p>
              <Input
                placeholder="Введите название товара..."
                variant="filled"
                value={editModel}
                onChange={(e) => {
                  dispatch(setEditModel(e.target.value));
                }}
              ></Input>
            </div>
            <div>
              <p>Цена</p>
              <Input
                placeholder="Введите цену..."
                variant="filled"
                value={editPrice}
                onChange={(e) => {
                  dispatch(setEditPrice(e.target.value));
                }}
              ></Input>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Bottom;
