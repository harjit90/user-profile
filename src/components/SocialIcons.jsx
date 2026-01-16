import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaYoutube, FaRegHeart, FaRegComment, FaRegShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcons = () => {
    return (
        <div className='w-[75%] text-2xl grid grid-cols-4 mx-auto py-6 px-9 place-items-center'>
            <Link to="https://www.facebook.com" target='blank' className='hover:text-[#3bebf1] transition-all ease-in delay-15'>
                <FaFacebook />
            </Link>
            <Link to="https://x.com" target="blank" className='hover:text-[#3bebf1] transition-all ease-in delay-15'>
                <FaTwitterSquare />
            </Link>
            <Link to="https://www.instagram.com" target="blank" className='hover:text-[#3bebf1] transition-all ease-in delay-15'>
                <FaInstagramSquare />
            </Link>
            <Link to="https://www.youtube.com" target="blank" className='hover:text-[#3bebf1] transition-all ease-in delay-15'>
                <FaYoutube />
            </Link>
        </div>
    )
}

export default SocialIcons
