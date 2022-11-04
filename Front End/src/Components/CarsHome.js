import car2 from '../images/car2.png'
import car1 from '../images/car1.png'
const CarsHome=()=>{
    return(
        <div className="w-full">

            <div className="w-full flex justify-between px-16 py-4">
                <div style={{ backgroundColor: "#54a6ff" }} className="w-full  mr-4 rounded-lg px-4 py-6 max-h-60 ">
                    <h1 className="text-white text-2xl font-bold ">The Best Platform for Car Rental</h1>
                    <h1 className="text-lg mt-2 text-white ">Ease of doing a car rental safely and reliably. Of course at a low price.</h1>
                    <button style={{ backgroundColor: "#546fff"}} className="px-4 py-2 text-white rounded-lg mt-2 ">Rent Car</button>
                    <div className='flex justify-end items-center'><img src={car2} alt=" Car"  className="  lg:max-w-xl"></img></div>
                </div>


                <div style={{ backgroundColor: "#546fff",maxHeight: "290px" }} className="w-full  mr-4 rounded-lg px-4 py-6 ">
                    <h1 className="text-white text-2xl font-bold ">Easy way to rent a car at a low price</h1>
                    <h1 className="text-lg mt-4 text-white ">Providing cheap car rental services and safe and comfortable facilities.</h1>
                    <button style={{ backgroundColor: "#54a6ff"}} className="px-4 py-2 text-white rounded-lg mt-4 ">Rent Car</button>
                    <div className='flex justify-end items-center'><img src={car1} alt=" Car"  className="lg:max-w-xl"></img></div>
                </div>
            </div>

        </div>    )
}

export default CarsHome ;