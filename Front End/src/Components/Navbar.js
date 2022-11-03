import Home from "@mui/icons-material/Home"
import DriveEta from "@mui/icons-material/DriveEta"
import Nightlight from "@mui/icons-material/Nightlight"
import Favorite from "@mui/icons-material/Favorite"
import Notifications from "@mui/icons-material/Notifications"
import Settings from "@mui/icons-material/Settings"
import Avatar from '@mui/material/Avatar';
import Search from "@mui/icons-material/Search"
import ImportExport from "@mui/icons-material/ImportExport"
import ContactMail from "@mui/icons-material/ContactMail"


const Navbar = () => {
    return (
        <div className="w-full">

            <div className="hidden lg:block w-full">
                <div className="w-full flex justify-between px-16 items-center py-8 ">
                    <div className="flex justify-center items-center mr-6">
                        <h1 style={{ color: "#546fff" }} className="text-3xl font-bold "> CAR RENTAL </h1>
                        <div className="flex border border-2 py-2 ml-6 items-center  rounded-full px-3 ">
                            <Search sx={{ color: "gray" }}></Search>
                            <input className="w-full outline-none" placeholder="Search something here" ></input>
                        </div>
                    </div>
                    <div className="flex items-center mr-6" >
                        <div className="text-xl font-bold flex items-center mr-10  hover:cursor-pointer"><Home sx={{ fontSize: 30 }} ></Home> <span className="ml-2">Home</span> </div>
                        <div className="text-xl font-bold flex items-center hover:cursor-pointer"> <DriveEta sx={{ fontSize: 30 }}></DriveEta> <span className="ml-2">Products</span></div>
                    </div>

                    <div className="flex  mr-2">
                        <div style={{ backgroundColor: "#54a6ff" }} className="border rounded-full px-2 py-1 mr-2  "><Nightlight sx={{ color: "white", }}></Nightlight></div>
                        <div className="border  rounded-full px-2 py-1 mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-xl "><Favorite sx={{ color: "gray", "&:hover": { color: "black" } }}></Favorite></div>
                        <div className="border rounded-full px-2 py-1 mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg"><Notifications sx={{ color: "gray", "&:hover": { color: "black" } }}></Notifications></div>
                        <div className="border rounded-full px-2 py-1 mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg"><Settings sx={{ color: "gray", "&:hover": { color: "black" } }}></Settings></div>
                        <div className="border rounded-full  mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg"><Avatar ></Avatar></div>
                    </div>
                </div>
            </div>





            <div className="px-4 py-6 lg:hidden">
                <div className="w-full flex justify-between ">
                    <h1 style={{ color: "#546fff" }} className="text-2xl font-bold "> CAR RENTAL  </h1>
                    <div className="flex ">
                        <div style={{ backgroundColor: "#54a6ff" }} className="border rounded-full px-2 py-1 mr-2   hover:cursor-pointer "><Notifications sx={{ color: "white" }}></Notifications></div>
                        <div className="border rounded-full   border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg"><Avatar ></Avatar></div>
                    </div>
                </div>

                <div className="mt-4 flex w-full justify-between  ">
                    <div className="flex border border-2  items-center py-2 rounded-xl px-3 w-full">
                        <Search sx={{ color: "gray" }}></Search>
                        <input className="w-full outline-none" placeholder="Search something here" ></input>
                    </div>
                    <div className="border border-2 ml-4  rounded-xl px-2 py-1  border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg flex justify-center items-center"><Settings sx={{ color: "gray", "&:hover": { color: "black" }, fontSize: 30 }}></Settings></div>
                </div>
                <div className="flex w-full justify-center items-center mt-4 ">
                    <div style={{ backgroundColor: "#546fff" }} className="border rounded-full px-2 py-2 mr-2  "><ContactMail sx={{ color: "white", }}></ContactMail></div>
                    <div style={{ backgroundColor: "#54a6ff" }} className="border rounded-full px-2 py-2 mr-2  "><Nightlight sx={{ color: "white", }}></Nightlight></div>
                    <div style={{ backgroundColor: "#546fff" }} className="border rounded-full px-2 py-2 mr-2  "><ImportExport sx={{ color: "white", }}></ImportExport></div>
                </div>


            </div>
        </div>
    )
}

export default Navbar;




<div className="flex justify-between px-16 items-center py-8  hidden lg:block w-full">
    <div className="flex  ">
        <h1 style={{ color: "#546fff" }} className="text-2xl font-bold "> CAR-Rental </h1>
        <div className="flex border border-md items-center">
            <Search sx={{ color: "gray" }}></Search>
            <input placeholder="Search something here" type={"search"}></input>
        </div>
    </div>
    <div className="flex items-center " >
        <div className="text-xl font-bold flex items-center mr-14 hover:cursor-pointer"><Home sx={{ fontSize: 30 }} ></Home> <span className="ml-2">Home</span> </div>
        <div className="text-xl font-bold flex items-center hover:cursor-pointer"> <DriveEta sx={{ fontSize: 30 }}></DriveEta> <span className="ml-2">Products</span></div>
    </div>
    <div className="flex  ">
        <div style={{ backgroundColor: "#546fff" }} className="border rounded-full px-2 py-1 mr-2  "><Nightlight sx={{ color: "white", }}></Nightlight></div>
        <div className="border  rounded-full px-2 py-1 mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-xl "><Favorite sx={{ color: "gray", "&:hover": { color: "black" } }}></Favorite></div>
        <div className="border rounded-full px-2 py-1 mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg"><Notifications sx={{ color: "gray", "&:hover": { color: "black" } }}></Notifications></div>
        <div className="border rounded-full px-2 py-1 mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg"><Settings sx={{ color: "gray", "&:hover": { color: "black" } }}></Settings></div>
        <div className="border rounded-full  mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg"><Avatar ></Avatar></div>
    </div>
</div>