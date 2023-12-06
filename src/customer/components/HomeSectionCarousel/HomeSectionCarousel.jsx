import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';



const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 }
    }

    const slidePrev = () =>  setActiveIndex(activeIndex-1)
    const slideNext = () => setActiveIndex(activeIndex+1)
    const syncActiveIndex = ({item}) => setActiveIndex(item)


    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(item => <HomeSectionCard />)

    return (
        <div className='relative px-4 sm:px lg:px-8'>
            <div className='relative p-5 border'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                { activeIndex !== items.length - 5 && <Button 
                    onClick={slideNext}
                    variant='contained'
                    className='z-50'
                    sx={{ 
                        position: 'absolute',
                        top: '8rem',
                        right: '0rem',
                        transform: 'translateX(50%) rotate(90deg)',
                        bgcolor: 'white' 
                    }}
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon 
                        sx={{ 
                            transform: 'rotate(90deg)',
                            color: 'black' 
                        }}
                    />
                </Button>}
                { activeIndex !== 0 && <Button 
                    onClick={slidePrev}
                    variant='contained'
                    className='z-50'
                    sx={{ 
                        position: 'absolute',
                        top: '8rem', left: '0rem',
                        transform: 'translateX(-50%) rotate(90deg)',
                        bgcolor: 'white' 
                    }}
                    aria-label='next'
                >
                    <KeyboardArrowRight 
                        sx={{ 
                            transform: 'rotate(-90deg)',
                            color: 'black' 
                        }}
                    />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarousel