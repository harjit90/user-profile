import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className=' border border-white/15 py-2 px-4 rounded-full text-white cursor-pointer hover:border-[#3bebf1] hover:bg-[#3bebf1] hover:text-black transition-all ease-in delay-10'>{props.text}</button>
    </div>
  );
}

export default Button;
