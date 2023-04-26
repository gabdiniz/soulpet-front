import "./Home.css";
import banner from "../../assets/images/banner-home.png"

export function Home() {
  return (
    <div className="home">
      <img className="w-100" src={banner} alt="SoulPet Banner" />
    </div>
  );
};