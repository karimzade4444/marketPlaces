import { Button, Input } from "antd";

const Middle = () => {
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
            <Button type="primary" className="w-100! mt-2!">
              + Добавить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
