
const Categories = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center mt-7'>
        <h1 className='font-bold text-[30px]'>Browse The Range</h1>
        <span className='text-[#666666] text-[15px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        <div className="flex flex-wrap w-full justify-center gap-3 mt-6">
            <div className="card w-[30%] flex flex-col justify-center items-center">
               <div className="image">
                  <img src="/images/dining.png" alt="dining image" />
               </div>
               <span className='mt-3 font-bold'>Dining</span>
            </div>
            <div className="card w-[30%] flex flex-col justify-center items-center">
               <div className="image">
                  <img src="/images/living room.png" alt="living room image" />
               </div>
               <span className='mt-3 font-bold'>Living</span>
            </div>
            <div className="card w-[30%] flex flex-col justify-center items-center">
               <div className="image">
                  <img src="/images/bedroom.png" alt="bedroom image" />
               </div>
               <span className='mt-3 font-bold'>Bedroom</span>
            </div>
        </div>
    </div>
  )
}

export default Categories