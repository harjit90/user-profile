import { FaRegHeart, FaRegComment, FaRegShareSquare } from "react-icons/fa";
import Button from './Button';
import SocialIcons from "./SocialIcons";


const UserCard = ({ title, designation, countLink, commentLink, shareLink, userImg }) => {
    return (
        <div className='border-white/8 border my-4 rounded-xl shadow-2xl bg-[#0c0c0c] text-white/75'>

            {/* Header Part */}

            <div className='bg-[#3bebf1] w-[full] h-30 relative rounded-t-xl'>
                <img src={userImg} className='w-30 rounded-full absolute left-0 right-0 top-8 mx-auto aspect-square object-cover' />
            </div>

            {/* Middle Part */}

            <div className='pt-12'>
                <h2 className='font-bold text-xl'>{title}</h2>
                <p>{designation}</p>
                <SocialIcons />
                <div className='flex flex-row gap-2 justify-center'>
                    <Button text="Subscribe" />
                    <Button text="Message" />
                </div>
            </div>

            {/* Footer Part */}

            <div className='grid grid-cols-3 mx-auto w-[75%] py-10 justify-items-center'>
                <div>
                    <FaRegHeart />
                    <span>{countLink}</span>
                </div>
                <div>
                    <FaRegComment />
                    <span>{commentLink}</span>
                </div>
                <div>
                    <FaRegShareSquare />
                    <span>{shareLink}</span>
                </div>
            </div>
        </div>
    )
}

export default UserCard
