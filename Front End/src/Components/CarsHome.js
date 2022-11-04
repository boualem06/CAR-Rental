import car2 from '../images/car2.png'
import car1 from '../images/car1.png'
import { useEffect, useState } from 'react'
const CarsHome = () => {
    const [car, setCar] = useState(false); //a variable to change the color in md and small screens 
   
    
    //modifying the pictures of cars in sm and md screens every 10 s
    useEffect(()=>{
        let timeout;
        let time=10000 ;
        function timing() {
            timeout = setTimeout(reinitialize, time);
        }
        function reinitialize(){
            if(car) setCar(false)
            else setCar(true)
            time=10000 ;
        }
        timing() ;
    })

    return (
        <div className="w-full">

            <div className='hidden lg:block'>
                <div className="w-full flex justify-between px-16 py-4 ">
                    <div style={{ backgroundColor: "#54a6ff" }} className="w-full  mr-4 rounded-lg px-4 py-6 max-h-60 ">
                        <h1 className="text-white text-2xl font-bold ">The Best Platform for Car Rental</h1>
                        <h1 className="text-lg mt-2 text-white ">Ease of doing a car rental safely and reliably. Of course at a low price.</h1>
                        <button style={{ backgroundColor: "#546fff" }} className="px-6 py-2 text-white rounded-md mt-2 ">Rent Car</button>
                        <div className='flex justify-end items-center'><img src={car2} alt=" Car" className="  lg:max-w-xl"></img></div>
                    </div>

                    <div style={{ backgroundColor: "#546fff", maxHeight: "290px" }} className="w-full  mr-4 rounded-lg px-4 py-6 ">
                        <h1 className="text-white text-2xl font-bold ">Easy way to rent a car at a low price</h1>
                        <h1 className="text-lg mt-4 text-white ">Providing cheap car rental services and safe and comfortable facilities.</h1>
                        <button style={{ backgroundColor: "#54a6ff" }} className="px-6 py-2 text-white rounded-md mt-4 ">Rent Car</button>
                        <div className='flex justify-end items-center'><img src={car1} alt=" Car" className="lg:max-w-xl"></img></div>
                    </div>
                </div>
            </div>
            <div className='lg:hidden '>

                <div className='px-3 py-6'>
                    {car ?
                        <div style={{ backgroundColor: "#54a6ff" }} className="w-full  mr-4 rounded-lg px-4 pt-6  ">
                            <h1 className="text-white text-2xl font-bold ">The Best Platform for Car Rental</h1>
                            <h1 className="text-lg mt-4 text-white ">Ease of doing a car rental safely and reliably. Of course at a low price.</h1>
                            <button style={{ backgroundColor: "#546fff" }} className="px-6 py-2 text-white rounded-md mt-4 ">Rent Car</button>
                            <div className='flex justify-center items-center'><img src={car2} alt=" Car" ></img></div>
                        </div>
                        :
                        <div style={{ backgroundColor: "#546fff" }} className="w-full  mr-4 rounded-lg px-4 pt-6  ">
                            <h1 className="text-white text-2xl font-bold ">Easy way to rent a car at a low price</h1>
                            <h1 className="text-lg mt-4 text-white ">Providing cheap car rental services and safe and comfortable facilities.</h1>
                            <button style={{ backgroundColor: "#54a6ff" }} className="px-6 py-2 text-white rounded-md mt-4 ">Rent Car</button>
                            <div className='flex justify-center items-center'><img src={car1} alt=" Car" ></img></div>
                        </div>
                    }
                </div>
            </div>
        </div>)
}

export default CarsHome;