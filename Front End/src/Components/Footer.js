import Divider from '@mui/material/Divider';
const Footer = () => {
    return (
        <div className="bg-white py-6 px-10">
            <div className="grid grid-cols-2 sm:grid-cols-4  gap-20 mb-4 text-center">
                <div>
                    <h1 style={{ color: "#546fff" }} className="text-3xl font-bold "> CAR RENTAL </h1>
                    <h1 className="text-gray-500 mt-4">Our vision is to provide convenience and help increase your sales business.</h1>
                </div>
                <div className="grid grid-rows-5 gap-4">
                    <h1 className="text-lg font-bold">About</h1>
                    <h1 className="text-gray-500">How it works</h1>
                    <h1 className="text-gray-500">Featured</h1>
                    <h1 className="text-gray-500">Partnership</h1>
                    <h1 className="text-gray-500">Business Relation</h1>
                </div>
                <div className="grid grid-rows-5 gap-4">
                    <h1 className="text-lg font-bold">Community</h1>
                    <h1 className="text-gray-500">Events</h1>
                    <h1 className="text-gray-500">Blogs</h1>
                    <h1 className="text-gray-500">Podcast</h1>
                    <h1 className="text-gray-500">Invite friend</h1>
                </div>
                <div className="grid grid-rows-5 gap-4">
                    <h1 className="text-lg font-bold">Socials</h1>
                    <h1 className="text-gray-500">Discord</h1>
                    <h1 className="text-gray-500">Instagram</h1>
                    <h1 className="text-gray-500">Twitter</h1>
                    <h1 className="text-gray-500">Facebook</h1>
                </div>
            </div>
            <Divider></Divider>
            <div className='flex justify-between items-center mt-3 font-bold'>
                <h1 className='text-lg '>Privacy & Policy</h1>
                <h1 className='text-lg '>Terms & Condition</h1>
            </div>
            <h1  className='mt-4'><span className='font-bold'>©2022 CAR RENTAL.</span> Developed by <span style={{ color: "#546fff" }} className="font-bold text-xl">Hamroune Boualem</span></h1>
        </div>
    )
}

export default Footer;