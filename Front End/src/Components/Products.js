import FilterBar from "./FilterBar";
import Navbar from "./Navbar";
import RecomandedCars from "./RecomandedCars";
import Footer from "./Footer";
import Pagination from '@mui/material/Pagination';
import { useProSidebar } from 'react-pro-sidebar';
import {useState} from "react"
const Products = () => {
    //it will be passed as props to Navbar and FilterBar in order to open and close the FilterBar from a button in the Navbar 
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setState(open);
    };
    return (
        <div style={{ height: "100vh", backgroundColor: "#f3f4f8" }} className="overflow-y-scroll" >
            <Navbar state={state} setState={setState} toggleDrawer={toggleDrawer}></Navbar>
            <div className="flex w-full   ">
                <div className="bg-white  ">
                    <FilterBar state={state} setState={setState} toggleDrawer={toggleDrawer} ></FilterBar>
                </div>

                <div className="ml-4 w-full mt-4 mb-24 ">
                    <RecomandedCars></RecomandedCars>
                    <div className="flex justify-center items-center mt-8 "><Pagination count={3} sx={{
                        "& .MuiPaginationItem-root": {
                            color: "white",
                            background: "#546fff",
                        }
                    }
                    }  ></Pagination> </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Products;