import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Center,HStack,Box, Text } from '@chakra-ui/react';

import images from '../assets/carousel-images/images';

export default function Events() {

    const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    }

    return (
        <>
            <Center>
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='5xl'
                    fontWeight='extrabold'
                    mb={4}
                >
                        Events
                </Text>
                <Box h={'100vh'}>
                    {images && images.map((image, index) => (
                        <img src={images.img} alt="" />
                    ))}
                </Box>
            </Center>
            

        </>
  )
}
