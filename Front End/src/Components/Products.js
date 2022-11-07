import FilterBar from "./FilterBar";
import Navbar from "./Navbar";
import RecomandedCars from "./RecomandedCars";
import Footer from "./Footer";
import Pagination from '@mui/material/Pagination';
const Products = () => {
    return (
        <div style={{ height: "100vh", backgroundColor: "#f3f4f8" }} className="overflow-y-scroll" >
            <Navbar></Navbar>
            <div className="flex w-full  ">
                <FilterBar></FilterBar>
                <div className="ml-4 w-full mt-4 mb-24 ">
                    <RecomandedCars></RecomandedCars>
                    <div className="flex justify-center items-center mt-8 "><Pagination count={3} sx={{
                        "& .MuiPaginationItem-root": {
                            color: "white",
                            background:"#546fff",
                        }}
                    }  ></Pagination> </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Products;