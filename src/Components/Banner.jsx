import React,{useState} from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { DotIcon } from 'lucide-react';

const Banner = () => {
    const slides = [
        {
        url:'https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg'
        },
        {
            url:'https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg'
        },
        {
            url:'https://img.pikbest.com/origin/10/01/82/867pIkbEsTAIq.png!w700wp'
        },
        {
            url:'https://www.shutterstock.com/image-vector/vector-illustration-realistic-silver-color-260nw-2182703761.jpg'
        },
        {
              url:'https://img.freepik.com/free-vector/realistic-beauty-sale-banner-with-discount_52683-94990.jpg'
        },

    ];

    const [currentTndex,setCurrentIndex] = useState(0);

    const prevSlide = () => {
                 const isFirstSlide = currentTndex === 0;
                 const newIndex =isFirstSlide?slides.length-1 : currentTndex -1;
                 setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
                 const isLastSlide =currentTndex ===slides.length-1;
                 const newIndex = isLastSlide?0:currentTndex+1;
                 setCurrentIndex(newIndex);

    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

  return (
     <div className='w-full max-w-8xl m-auto h-[200px]  sm:h-[300px] md:h-[400px] lg:h-[500px]  py-6 px-4 relative  group overflow-hidden'>
        <div style={{backgroundImage:`url(${slides[currentTndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat object-cover duration-500'></div>
        {/* Left Arrow */}
        <div className=' hidden group-hover:block absolute top-[50%] -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
            <ArrowLeft 
            onClick={prevSlide}
            size={30}/>
        </div>

          {/* Right Arrow*/}
        <div className=' hidden group-hover:block absolute top-[50%] -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
            <ArrowRight
            onClick={nextSlide}
            size={30} />
        </div>
        <div className='flex top-4 justify-center py-2  '>
            {slides.map((slides,slideIndex)=>(
                <button key={slideIndex}
                onClick={() =>goToSlide(slideIndex) } 
                className='text-2xl cursor-pointer'>
                    <DotIcon size={30}/>
                </button>
            ))}
        </div>
     </div>
  )
}

export default Banner
