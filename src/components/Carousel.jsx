import { motion } from 'framer-motion';
import bootcampsImage from '../assets/Bootcamps/DSC_0109.JPG';
import dexterixImage from '../assets/Dexterix3/IMG_0039.JPG';
import flutterEventImage from '../assets/Flutter Days/IMG_7810.jpg';
import promotionalEventImage from '../assets/Promotional Events/20210225145311_IMG_6914.jpg';
import { useEffect, useRef, useState } from 'react';
import { Center, Heading, Text } from '@chakra-ui/react';

const data = [
    {
        imageUrl: promotionalEventImage,
        title: 'Promotional Events',
    },
    {
        imageUrl: flutterEventImage,
        title: 'Flutter Days',
    },
    {
        imageUrl: dexterixImage,
        title: 'Dexterix 3',
    },
    {
        imageUrl: bootcampsImage,
        title: 'Bootcamps',
    },
    {
        imageUrl: promotionalEventImage,
        title: 'Promotional Events',
    },
    {
        imageUrl: flutterEventImage,
        title: 'Flutter Days',
    },
    {
        imageUrl: dexterixImage,
        title: 'Dexterix 3',
    },
    {
        imageUrl: bootcampsImage,
        title: 'Bootcamps',
    },
];


const Carousel = () => {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();

    useEffect(() => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }, []);


    return (
        <>
            <Center>
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='5xl'
                    fontWeight='extrabold'
                    mb={4}>
                    Events
                </Text>
            </Center>

            <motion.div className='carousel' ref={carouselRef} whileTap={{ cursor: "grabbing" }}>
                <motion.div drag='x' dragConstraints={{
                    right: 0,
                    left: -width,
                }} className='inner-carousel'>
                    {data.map((item, index) => (
                        <motion.div className='item' key={index}>
                            <img src={item.imageUrl} alt={item.title} />
                            <Center>
                                <Heading as='h6' size='md' pt='5'>
                                    {item.title}
                                </Heading>
                            </Center>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

        </>
    );
};

export default Carousel;