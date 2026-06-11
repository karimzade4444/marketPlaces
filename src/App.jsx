import { Button, Flex } from "antd";
import Top from "./components/top";
import Middle from "./components/middle";
import Bottom from "./components/bottom";

const App = () => {
  return (
    <div className=" relative">
      <div className="w-full h-20 bg-white/90 border border-gray-300 flex justify-between items-center p-5 fixed">
        <p className=" text-2xl font-semibold">Панель управление</p>
        <div className=" flex justify-center items-center gap-5">
          <Button >Гостевая Панель</Button>
          <Button type="primary">Админ Панель</Button>
        </div>
      </div>
<Top/>
<Middle/>
<Bottom/>

    </div>
  );
};

export default App;
