import { useState } from 'react'
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined"
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import LocalGasStationOutlined from "@mui/icons-material/LocalGasStationOutlined"
import DriveEta from "@mui/icons-material/DriveEta"
import PeopleOutlined from "@mui/icons-material/PeopleOutlined"

import car1 from '../images/car1.png'
const CarCard = () => {
    const [liked, setLiked] = useState(false);

    const like = () => { setLiked(true) } //allows to like a publication 
    const dislike = () => { setLiked(false) } //allows to dislike a publication

    return (
        <div className="border border-gray rounded-md shadow-xl max-w-fit px-4 py-6">
            <div className='flex justify-between'>
                <h1 className='font-bold text-2xl'>Maruti Suzuki</h1>
                {liked ? <button onClick={dislike}><FavoriteOutlined sx={{ color: "red" }}></FavoriteOutlined> </button> : <button onClick={like}><FavoriteBorderOutlined sx={{ color: "gray" }}></FavoriteBorderOutlined></button>}
            </div>

            <h1 className='text-gray-500 font-bold'>SUV</h1>

            <div className='flex   flex-col mt-10'>
                <img src={car1} alt="Car" className='max-w-sm '></img>
                <div className='flex   mt-2  justify-between w-full'>
                    <div className='flex  items-center'>
                        <LocalGasStationOutlined sx={{ fontSize: 35, color: "gray" }}></LocalGasStationOutlined>
                        <h1 className='text-gray-500'>55L</h1>
                    </div>
                    <div className='flex  items-center'>
                        <DriveEta sx={{ fontSize: 35, color: "gray" }}></DriveEta>
                        <h1 className='text-gray-500'>Manual</h1>
                    </div>
                    <div className='flex  items-center '>
                        <PeopleOutlined sx={{ fontSize: 35, color: "gray" }}></PeopleOutlined>
                        <h1 className='text-gray-500 ml-1'>4 People</h1>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-between items-center mt-6'>
                <h1><span className='font-bold text-xl'>$76.00/</span><span className='text-gray-500 font-bold'>day</span></h1>
                <button style={{ backgroundColor: "#546fff" }} className="font-bold px-6 py-2 text-white rounded-md mt-2 ">Rent Car</button>

            </div>
        </div>
    )
}

export default CarCard;