import { style } from '@mui/system';
import { useState } from 'react';
import car1 from '../images/car1.png'
import car2 from '../images/car2.png'
import Rating from '@mui/material/Rating';
const CartDetails = () => {
    const [clicked, setClicked] = useState(1); //to selct the border color 
    const [principaleImage, setPrincipaleImage] = useState(car1);
    return (
        <div style={{ backgroundColor: "#f3f4f8" }} className="w-full flex lg:flex-row flex-col px-4 py-4">
            <div className="  px-4 py-2  rounded-lg mb-4 lg:mr-4 lg:mb-0">
                <div className='bg-white rounded-lg'>
                    <img src={principaleImage} alt="car" ></img>
                </div>
                <div style={{ backgroundColor: "#f3f4f8" }} className=' grid grid-cols-3 flex  items-center mt-4 gap-1 bg-white rounded-lg'>
                    <button onClick={() => { setClicked(1) }} style={{ borderColor: ` ${clicked === 1 ? "#546fff" : "#f3f4f8"}` }} className='border rounded-lg border-2 py-4 bg-white'><img src={car1} alt="Car" className='max-w-full h-auto '></img></button>
                    <button onClick={() => { setClicked(2); setPrincipaleImage(car2) }} style={{ borderColor: ` ${clicked === 2 ? "#546fff" : "#f3f4f8"}` }} className='border rounded-lg border-2 py-4 bg-white' ><img src={car2} alt="Car" className='max-w-full h-auto '></img></button>
                    <button onClick={() => { setClicked(3) }} style={{ borderColor: ` ${clicked === 3 ? "#546fff" : "#f3f4f8"}` }} className='border rounded-lg border-2 py-4 bg-white'><img src={car1} alt="Car" className='max-w-full h-auto '></img></button>
                </div>
            </div>
            <div className="  px-4 py-2  rounded-lg   grid grid-rows-4 bg-white ">
                <div>
                    <h1 className='text-2xl font-bold'>Porch Boxer </h1>
                    <Rating name="read-only" value={3} readOnly />
                </div>
                <p className=''>The Porsche Boxster is a mid-engine two-seater roadster. It was Porsche's first road vehicle to be originally designed as a roadster since the 914. The first-generation Boxster (the 986) was introduced in late 1996; it was powered by a 2.5-litre flat six-cylinder engine.</p>
                <div className='grid grid-cols-4'>
                    <div>
                        <h1 className='text-gray-400'>Type</h1>
                        <h1 className='text-gray-400'>Steering</h1>
                    </div>
                    <div>
                        <h1 className='font-bold'>Sport</h1>
                        <h1 className='font-bold'>Auto</h1>
                    </div>
                    <div>
                        <h1 className='text-gray-400'>Capacity</h1>
                        <h1 className='text-gray-400'>Gasoline</h1>
                    </div>
                    <div>
                        <h1 className='font-bold'>2 Person</h1>
                        <h1 className='font-bold'>75L</h1>
                    </div>

                </div>
                <div className='w-full flex justify-between items-center '>
                    <h1><span className='font-bold text-2xl'>$100.00/</span><span className='text-gray-400 font-bold'>day</span></h1>
                    <button style={{ backgroundColor: "#546fff" }} className="font-bold px-6 py-2 text-white rounded-md mt-2 ">Rent Now</button>

                </div>
            </div>
        </div>
    )
}

export default CartDetails;