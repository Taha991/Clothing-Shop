import Image from 'next/image';
import { Button } from './elements/Button';
import bannerImg from "../public/images/banner.PNG";
import bannersImg from "../public/images/products/beige_jogger(men).jpg";

export const Banner = () => {
    
    return (
        <div className="flex items-center justify-center">
            <div className="banner__image-container sm:w-4/5  w-full">
                <Image alt="banner image" src={bannerImg}  />
                
                <div className=' flex-col w-2/3'>
                    <h1 className='text-xl pb-3'>Introducing New Styles</h1>
                    <p className='pb-3'>High-performing</p>
                    <Button>Shop Now</Button>
                  
            </div>
            

    
    

        
           </div>
        </div>
       
    )
}