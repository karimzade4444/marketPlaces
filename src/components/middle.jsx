import { Button, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getProducts } from "../api/products";
import { setCreatImg, setCreatModel, setCreatPrice, setSearch } from "../lib/redux/slice/slice";

const Middle = () => {
  const [creatModal, setCreatModal] = useState(false);
  const { data, search, creatModel, creatImg, creatPrice } = useSelector(
    (store) => store.marketPlace,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(search));
  }, [search]);

  const handleCancel = () => {
    setCreatModal(false);
  };

  return (
    <div className="w-[95%] m-auto">
      <div className="h-45 bg-white rounded-xl border border-gray-300 p-7">
        <div>
          <p className="text-2xl font-bold">Добавить продукт</p>
        </div>
        <div className=" flex justify-between items-end pt-5">
          <div>
            <p>Название</p>
            <Input
              placeholder="Введите название..."
              variant="filled"
              className="w-100! mt-2!"
              value={search}
              onChange={(e)=>{dispatch(setSearch(e.target.value))}}
            ></Input>
          </div>
          <div>
            <p>Цена</p>
            <Input
              placeholder="0"
              variant="filled"
              className="w-100! mt-2!"
            ></Input>
          </div>
          <div>
            <Button
              type="primary"
              className="w-100! mt-2!"
              onClick={() => setCreatModal(true)}
            >
              + Добавить
            </Button>
          </div>
        </div>
      </div>

      <Modal title="Создать товарь" open={creatModal} onCancel={handleCancel} onOk={()=>{dispatch(createProduct({
        img: creatImg,
        model: creatModel,
        price: creatPrice
      }));
      setCreatModal(false)
      }}>
        <div className=" w-[95%] m-auto">
          <div>
            <div>
              <p>Изоброжение</p>
              <Input placeholder="https://..." variant="filled" value={creatImg} onChange={(e)=>{dispatch(setCreatImg(e.target.value))}}></Input>
            </div>
            <div>
              <p>Название</p>
              <Input
                placeholder="Введите название товара..."
                variant="filled"
                value={creatModel}
                onChange={(e)=>{dispatch(setCreatModel(e.target.value))}}
              ></Input>
            </div>
            <div>
              <p>Цена</p>
              <Input placeholder="Введите цену..." variant="filled" value={creatPrice} onChange={(e)=>{dispatch(setCreatPrice(e.target.value))}}></Input>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Middle;
