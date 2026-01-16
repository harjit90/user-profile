import React from 'react'

const ProfileImage = (props) => {
  return (
    <div>
      {/* <div className='bg-[#6AECE1] w-[full] h-30 relative rounded-t-xl'>
              <img src="./src/assets/images/user-1.png" className='w-25 rounded-full absolute left-0 right-0 bottom-[-2rem] mx-auto'/>
          </div> */}
          {props.img}
    </div>
  )
}

export default ProfileImage
