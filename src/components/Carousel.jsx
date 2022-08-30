import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import bootcampsImage from '../assets/Bootcamps/DSC_0109.JPG';
import dexterixImage from '../assets/Dexterix3/IMG_0039.JPG';
import flutterEventImage from '../assets/Flutter Days/IMG_7810.jpg';
import promotionalEventImage from '../assets/Promotional Events/20210225145311_IMG_6914.jpg';

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
];


const Carousel = () => {
    return (
        <Box>
            <Heading textAlign={'center'} py={10} as='h2'>
                EVENTS
            </Heading>

            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDir={'column'} h={'100%'} pb={12} mx={'20%'}>
                            <Image
                                width={800}
                                height={450}
                                src={item.imageUrl}
                                alt={item.title}
                            />
                            <Heading as='h6' size='md' pt='5'>
                                {item.title}
                            </Heading>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Box>
    );
};

export default Carousel;