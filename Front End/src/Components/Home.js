import Navbar from "./Navbar";
import CarsHome from "./CarsHome";
import CarCard from "./CarCard";
import RecomandedCars from "./RecomandedCars";
const Home = () => {
    return (
        <div style={{ backgroundColor: "#f3f4f8" }} className="w-full">
            <Navbar></Navbar>
            <CarsHome></CarsHome>
            <div className="flex justify-between items-center px-4 mb-6">
                <h1 className="text-xl ">Recommended cars</h1>
                <button><h1 style={{ color: "#546fff"}} className="text-xl">view all</h1></button>
            </div>
            <RecomandedCars></RecomandedCars>

        </div>
    )
}

export default Home