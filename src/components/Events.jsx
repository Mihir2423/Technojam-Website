import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Center, Image, Text, AspectRatio } from '@chakra-ui/react';

import image1 from "../assets/carousel-images/1.jpg";
import image2 from "../assets/carousel-images/2.jpg";
import image3 from "../assets/carousel-images/3.jpg";
import image4 from "../assets/carousel-images/4.jpg";
import image5 from "../assets/carousel-images/5.jpg";
import image6 from "../assets/carousel-images/6.jpg";
import image7 from "../assets/carousel-images/7.jpg";
import image8 from "../assets/carousel-images/8.jpg";
import image9 from "../assets/carousel-images/9.jpg";
import image10 from "../assets/carousel-images/10.jpg";
import image11 from "../assets/carousel-images/11.jpg";
import image12 from "../assets/carousel-images/12.jpg";
import image13 from "../assets/carousel-images/13.jpg";
import image14 from "../assets/carousel-images/14.jpg";
import image15 from "../assets/carousel-images/15.jpg";
import image16 from "../assets/carousel-images/16.jpg";
import image17 from "../assets/carousel-images/17.jpg";

export default function Events() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false
        }
      },
    ]
  };
    const imageList = [
        image1,
        // image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
    ];

    return (
        <>
            <Center>
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='7xl'
                    fontWeight='extrabold'
                    // mb={4}
                >
                    Events
                </Text>



                
            </Center>

            
            <center>
                <Box alignItems={'center'} justifyContent={'center'}>
                    <AspectRatio maxH='100%' maxW='75%' ratio={1}>
                        <Slider {...settings}>
                            {imageList.map((item, index) => (
                                <Image
                                    src={item} alt=""
                                    px={'20'}
                                    key={index}
                                />
                            ))}
                        </Slider>
                    </AspectRatio>
                </Box>
            </center>
            
        </>
    );
}
