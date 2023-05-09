import React from 'react'

const Card1 = (props) => {
  return (
    <div data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500" className={`${props.className} flex flex-col gap-[13px] w-[363px] p-[18px] h-[232px] justify-end items-start`}>
        <div className='p-[10px] bg-[#2389FF1A] rounded-[10px]'>
            <img src={props.img} alt="" />
        </div>
        <div className='flex flex-col gap-[11px]'>
            <h1 className='font-[700] text-[20px] text-[#304560] dark:text-white leading-[24px]'>
                {props.h1}
            </h1>
            <p className='font-[400] text-[16px] text-[#728399] dark:text-white leading-[21px]'>
                {props.p}
            </p>
        </div>
    </div>
  )
}

export default Card1