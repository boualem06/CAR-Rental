import Home from "@mui/icons-material/Home"
import DriveEta from "@mui/icons-material/DriveEta"
import Nightlight from "@mui/icons-material/Nightlight"
import Favorite from "@mui/icons-material/Favorite"
import Notifications from "@mui/icons-material/Notifications"
import Settings from "@mui/icons-material/Settings"
import Avatar from '@mui/material/Avatar';
const Navbar = () => {
    return (
        <div className="flex justify-between px-16 items-center py-8 bg--50">

            <h1 style={{color:"#546fff"}} className="text-2xl font-bold"> CAR-Rental </h1>
            <div className="flex items-center" >
                <div className="text-xl font-bold flex items-center mr-14 hover:cursor-pointer"><Home sx={{ fontSize: 30 }} ></Home> <span className="ml-2">Home</span> </div>
                <div className="text-xl font-bold flex items-center hover:cursor-pointer"> <DriveEta sx={{ fontSize: 30 }}></DriveEta> <span className="ml-2">Products</span></div>
            </div>
            <div className="flex ">
                <div style={{backgroundColor:"#546fff"}} className="border rounded-full px-1 py-1 mr-2  "><Nightlight sx={{ color: "white",}}></Nightlight></div>
                <div className="border  rounded-full px-2 py-1 mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-xl "><Favorite sx={{ color: "gray","&:hover": { color: "black" }}}></Favorite></div>
                <div className="border rounded-full px-2 py-1 mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg"><Notifications sx={{ color: "gray","&:hover": { color: "black" }}}></Notifications></div>
                <div className="border rounded-full px-2 py-1 mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg"><Settings sx={{ color: "gray","&:hover": { color: "black" }}}></Settings></div>
                <div className="border rounded-full  mr-2 border-gray-300 hover:border-black hover:cursor-pointer hover:border-lg"><Avatar ></Avatar></div>

            </div>


        </div>
    )
}

export default Navbar;