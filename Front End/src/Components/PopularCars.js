import CarCard from "./CarCard";
import CarCardP from "./CarCardP";
import "../App.css"
const PopularCars=()=>{
    return(
        <div style={{display:"grid",gridAutoFlow:"column",overflowX:"auto"}} className="Popular">
            <CarCardP></CarCardP>
            <CarCardP></CarCardP>
            <CarCardP></CarCardP>
            <CarCardP></CarCardP>
            <CarCardP></CarCardP>
            <CarCardP></CarCardP>
            <CarCardP></CarCardP>
            <CarCardP></CarCardP>
            <CarCardP></CarCardP>
        </div>
    )
}

export default PopularCars ;