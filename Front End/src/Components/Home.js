import Navbar from "./Navbar";
import CarsHome from "./CarsHome";
import CarCard from "./CarCard";
import RecomandedCars from "./RecomandedCars";
import PopularCars from "./PopularCars";
const Home = () => {
    return (
        <div style={{ backgroundColor: "#f3f4f8" }} className="w-full">
            <Navbar></Navbar>
            <CarsHome></CarsHome>
            <div className="flex justify-between items-center px-4 mt-10">
                <h1 className="text-xl">Popular cars</h1>
                <button style={{ color: "#546fff" }} className="text-xl">view all</button>
            </div>
            <div className="mt-6 px-4">
                <PopularCars></PopularCars>
            </div>

        </div>
    )
}

export default Home