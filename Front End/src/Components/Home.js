import Navbar from "./Navbar";
import CarsHome from "./CarsHome";
import CarCard from "./CarCard";
import RecomandedCars from "./RecomandedCars";
import PopularCars from "./PopularCars";
import Footer from "./Footer";
import "../App.css"
const Home = () => {
    return (
        <div style={{ backgroundColor: "#f3f4f8" }} className="home w-full ">
            <Navbar></Navbar>
            <CarsHome></CarsHome>
            <div className="flex justify-between items-center px-4 mt-10">
                <h1 className="text-xl font-bold">Popular cars</h1>
                <button style={{ color: "#546fff" }} className="text-xl font-bold">view all</button>
            </div>
            <div className="mt-6 px-4">
                <PopularCars></PopularCars>
            </div>
            <div className="flex justify-between items-center px-4 mt-10">
                <h1 className="text-xl font-bold">Recommended cars</h1>
                <button style={{ color: "#546fff" }} className="text-xl font-bold">view all</button>
            </div>
            <div className="mt-6 px-4">
                <RecomandedCars></RecomandedCars>
            </div>

            <div className="w-full flex justify-center items-center mt-6 mb-6">
                <button style={{backgroundColor:"#546fff"}} className="text-white px-4 py-2 mt-6 text-center rounded-md font-bold hover:shadow-lg">Show All Cars</button>
            </div>

            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home