// import Head from 'next/head';
import {
  Box,
  Heading,
  Text,
  Image,
  Button,HStack,
  Stack,Center,VStack
} from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons';
import logo from '../assets/logo.png';
import Fade from 'react-reveal/Fade';

export default function CallToActionWithAnnotation() {
  return (
      <Box
        className='glass'
        background={'linear-gradient(22deg, rgba(224,225,246,1) 20%, rgba(203,241,252,1) 38%, rgba(165,211,234,1) 60%, rgba(227,217,252,1) 81%);'}
        backgroundSize={'contain'}
        backgroundPosition={'center'}
        height={'100vh'}
        padding={'10rem'}
      >

          <HStack spacing={'10rem'}>
            <Box>
              <VStack alignItems={'left'}>
                <Fade>
                  <Text fontSize='6xl' fontFamily={'Poppins'}>About Us</Text> 
                </Fade>
                <Fade>
                  <Text noOfLines={'20'}>Technology makes it doable for individuals to achieve management over everything, except over technology. Technology is such a lot of fun, however, the likelihood of drowning in it's high. Our goal is to assist, nurture future developers and leaders and build a pool of extremely good school personnel, that is quickly employable by the business and facilitate spur innovation. We help students perceive up-to-date engineering. Explore completely different areas of interest. Produce social connections wherever students with numerous technology experience come together and share knowledge.
                  </Text>
                </Fade>
                <br />
              </VStack>
              <Text fontFamily={'Silkscreen'}>
                NASA Space Apps:
              </Text>
                <Button leftIcon={<EmailIcon />} colorScheme='blue' variant='outline'>
                  <Text variant={'2xl'}>Register</Text>
                </Button>
                
            </Box>
            <Box>
              <Fade bottom>
                <VStack>
                  {/* <Text fontSize={'3rem'} fontFamily={'Silkscreen'}>Team</Text> */}
                  <Image src={logo}></Image>
                  <HStack>
                    <Text fontSize='3xl' fontFamily={'Caveat'} color={'blue.400'}>Throttle</Text>
                    <Text fontSize='3xl' fontFamily={'Caveat'}>to</Text>
                    <Text fontSize='3xl' fontFamily={'Caveat'} color={'pink.400'}>learn</Text>
                  </HStack>
                </VStack>
              </Fade>
            </Box>
          </HStack>

        
      </Box >
  );
}