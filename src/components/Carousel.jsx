import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
    {
        imageUrl: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=2000',
        title: 'This is a event slider 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem qui at labore vitae laboriosam accusamus. Asperiores consectetur laboriosam praesentium officiis, qui vero itaque fugiat, perferendis, maiores ipsa incidunt est expedita beatae facilis.'
    },
    {
        imageUrl: 'https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png',
        title: 'This is a event slider 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem qui at labore vitae laboriosam accusamus. Asperiores consectetur laboriosam praesentium officiis, qui vero itaque fugiat, perferendis, maiores ipsa incidunt est expedita beatae facilis.'
    }
];


const Carousel = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            loop={true}
        >
            {data.map((item, index) => (

                <SwiperSlide>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDir={'column'} h={'100%'} pb={12} mx={'20%'}>
                        <Image
                            boxSize={500}
                            src={item.imageUrl}
                            alt=""
                        />
                        <Heading>
                            {item.title}
                        </Heading>
                        <Text>
                            {item.text}
                        </Text>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

export default Carousel;