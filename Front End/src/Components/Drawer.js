import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
export default function Drawer({ state, setState, toggleDrawer }) {
    const [value, setValue] = React.useState(30);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div >
            <SwipeableDrawer
                anchor={"right"}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <div style={{ width: "100%" }} className=' px-6 py-4  w-fit  bg-white mt-2 '>
                    <h1 className='text-gray-500 font-bold mb-4'>TYPE</h1>

                    <div className='grid grid-rows-6 gap-4'>
                        <div className='flex items-center '>
                            <Checkbox
                                sx={{
                                    color: "gray",
                                    '&.Mui-checked': {
                                        color: "#546fff",
                                    },
                                }}
                            ></Checkbox>
                            <h1 className='text-lg'>Sport</h1>
                        </div>
                        <div className='flex items-center '>
                            <Checkbox sx={{
                                color: "gray",
                                '&.Mui-checked': {
                                    color: "#546fff",
                                }
                            }}></Checkbox>
                            <h1 className='text-lg'>SUV</h1>
                        </div>
                        <div className='flex items-center '>
                            <Checkbox sx={{
                                color: "gray",
                                '&.Mui-checked': {
                                    color: "#546fff",
                                }
                            }}></Checkbox>
                            <h1 className='text-lg'>MPV</h1>
                        </div>
                        <div className='flex items-center '>
                            <Checkbox sx={{
                                color: "gray",
                                '&.Mui-checked': {
                                    color: "#546fff",
                                }
                            }}></Checkbox>
                            <h1 className='text-lg'>Sudan</h1>
                        </div>
                        <div className='flex items-center '>
                            <Checkbox sx={{
                                color: "gray",
                                '&.Mui-checked': {
                                    color: "#546fff",
                                }
                            }}></Checkbox>
                            <h1 className='text-lg'>Coupe</h1>
                        </div>
                        <div className='flex items-center '>
                            <Checkbox sx={{
                                color: "gray",
                                '&.Mui-checked': {
                                    color: "#546fff",
                                }
                            }}></Checkbox>
                            <h1 className='text-lg'>Hatchback</h1>
                        </div>
                    </div>


                    <h1 className='text-gray-500 font-bold mb-4 mt-4'>CAPACITY</h1>


                    <div className='grid grid-rows-4 gap-4'>
                        <div className='flex items-center '>
                            <Checkbox sx={{
                                color: "gray",
                                '&.Mui-checked': {
                                    color: "#546fff",
                                }
                            }}></Checkbox>
                            <h1 className='text-lg'>2 Person</h1>
                        </div>
                        <div className='flex items-center '>
                            <Checkbox sx={{
                                color: "gray",
                                '&.Mui-checked': {
                                    color: "#546fff",
                                }
                            }}></Checkbox>
                            <h1 className='text-lg'>4 Person</h1>
                        </div>
                        <div className='flex items-center '>
                            <Checkbox sx={{
                                color: "gray",
                                '&.Mui-checked': {
                                    color: "#546fff",
                                }
                            }}></Checkbox>
                            <h1 className='text-lg'>6 Person</h1>
                        </div>
                        <div className='flex items-center '>
                            <Checkbox sx={{
                                color: "gray",
                                '&.Mui-checked': {
                                    color: "#546fff",
                                }
                            }}></Checkbox>
                            <h1 className='text-lg'>8 or More</h1>
                        </div>
                    </div>


                    <h1 className='  mt-4'><span style={{ backgroundColor: "#546fff" }} className="text-xl px-2 rounded-md  text-white">$</span><span className='font-bold text-lg ml-1'>{value}</span></h1>
                    <Slider sx={{ color: "#546fff" }} min={5} step={1} max={100} aria-label="Volume" value={value} onChange={handleChange} />
                    <h1 className='text-lg font-bold'>Max. $100</h1>

                </div>
            </SwipeableDrawer>
        </div>
    );
}