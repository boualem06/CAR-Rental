import { style } from '@mui/system';
import { useState } from 'react';
import car1 from '../images/car1.png'
import car2 from '../images/car2.png'

const CartDetails = () => {
    const [clicked,setClicked]=useState(1) ;
    const [principaleImage,setPrincipaleImage]=useState(car1) ;
    return (
        <div className="w-full flex lg:flex-row flex-col px-4 py-4">
            <div className=" bg-rd-500 px-4 py-2 shadow-lg rounded-lg mb-4">
                <img src={principaleImage} alt="car" ></img>
                <div className=' grid grid-cols-3 flex  items-center mt-4 gap-1'>
                    <button onClick={()=>{setClicked(1)}} style={{ borderColor:` ${clicked===1 ? "#546fff" :"gray"}` }}  className='border rounded-lg border-2 py-4'><img src={car1} alt="Car" className='max-w-full h-auto '></img></button>
                    <button onClick={()=>{setClicked(2);setPrincipaleImage(car2)}} style={{ borderColor:` ${clicked===2 ? "#546fff" :"gray"}` }}  className='border rounded-lg border-2 py-4'><img src={car2} alt="Car" className='max-w-full h-auto '></img></button>
                    <button onClick={()=>{setClicked(3)}} style={{ borderColor:` ${clicked===3 ? "#546fff" :"gray"}` }}  className='border rounded-lg border-2 py-4'><img src={car1} alt="Car" className='max-w-full h-auto '></img></button>
                </div>
            </div>
            <div className="w-full bg-red-600">
                TWO
            </div>
        </div>
    )
}

export default CartDetails;