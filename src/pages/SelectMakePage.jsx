import { useNavigate } from "react-router-dom";
import SettingButton from "../components/SettingButton";
import plant_img from "../assets/plant.png";

const SelectMakePage = () => {
  const navigate = useNavigate();
  const handletoPaintPage = () => {
    // モンスターを作成ボタンがクリックされた時の処理
    navigate("/paint");
  };
  const handleToCheckPage = () => {
    // モンスターと会話ボタンがクリックされた時の処理
    navigate("/make");
  };
  const handleToGeneratePage = () => {
    // モンスターと会話ボタンがクリックされた時の処理
    navigate("/generate");
  };

  return (
    <div className="flash_back">
      <SettingButton />
      <div
        className="flex flex-col items-center justify-center w-screen h-screen"
        style={{
          backgroundImage: `url(${plant_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="back_sheet z-10 relative"></div>
        <div className="text-white flex flex-col items-center justify-center w-full gap-5 z-20 absolute top-50% left-50%">
          <h2 className="text-7xl mb-2">モンスター作成</h2>
          <h2 className="text-3xl mb-20">作成方法を選択してください</h2>
          <button
            className="button1 w-2/5 m-6 border-2 border-Fuchsia-500 bg-black text-white py-2 hover:bg-gray-700 transition duration-300 focus:border-transparent"
            onClick={handletoPaintPage}
          >
            <h2 className="text-4xl m-2">自分でイラストを描く</h2>
          </button>
          <button
            className="button1 w-2/5 m-6 border-2 border-Fuchsia-500 bg-black text-white py-2 hover:bg-gray-700 transition duration-300 focus:border-transparent"
            onClick={handleToGeneratePage}
          >
            <h2 className="text-4xl m-2">AI生成画像を使う</h2>
          </button>
          <button
            className="button1 w-2/5 m-6 border-2 border-Fuchsia-500 bg-black text-white py-2 hover:bg-gray-700 transition duration-300 focus:border-transparent"
            onClick={handleToCheckPage}
          >
            <h2 className="text-4xl m-2">既存の画像を使う</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectMakePage;
