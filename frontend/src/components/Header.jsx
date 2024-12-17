import React from 'react'

const Header = () => {
return (
    <div className="h-[39vw] m-[30px] mx-[120px] bg-contain relative bg-[url('/header_img.png')] bg-no-repeat">
        <div className='flex flex-col items-start gap-4 absolute max-w-[60%] md:bottom-[30%] xl:bottom-[20%] left-[5%] animate-fade'>
            <h1 className='md:text-[40px] xl:text-[60px] 2xl:text-[85px] font-bold text-white'>Order your favourite food here!</h1>
            <p className='font-medium text-white md:text-[10px] xl:text-[15px] 2xl:text-[20px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sed dolores rem, corporis officiis ex laboriosam sit, odit in temporibus reiciendis dolore ducimus provident praesentium et odio dicta, voluptatibus quod.</p>
            <button className='bg-white py-3 px-6 rounded-3xl font-medium text-orange-500'>View Menu</button>
        </div>
    </div>
)
}

export default Header
