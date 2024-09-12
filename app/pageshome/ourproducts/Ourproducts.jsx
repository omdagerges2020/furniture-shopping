import Cards from './Cards';
import {Button} from "@/components/Materialcomponents.jsx";





const Ourproducts = () => {
  return (
    <div className="mt-7 flex flex-col justify-center items-center">
         <h1 className='font-bold text-[30px]'>Our Products</h1>
         <Cards/>
         <Button variant="outlined" className='w-[245px] h-[40px] mt-4 px-0 py-0 text-[#B88E2F] border-[#B88E2F] rounded-none'>Show More</Button>
    </div>
  )
}

export default Ourproducts
