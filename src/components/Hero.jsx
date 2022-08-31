// import Head from 'next/head';
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Stack,
} from '@chakra-ui/react';
import logo from '../assets/logo.png';

export default function CallToActionWithAnnotation() {
  return (
    <Box
      background={'linear-gradient(22deg, rgba(224,225,246,1) 20%, rgba(203,241,252,1) 38%, rgba(165,211,234,1) 60%, rgba(227,217,252,1) 81%);'}
      backgroundSize={'contain'}
      backgroundPosition={'center'}
      height={'100vh'}
      padding={'10rem'}
    >



      <Box display='flex'  alignItems={'center'} justifyContent={'flex-end'} padding={'10rem'} alignContent={'center'}>
          
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>

            <Image
              src={logo}
              w={400}
              h={400}
            />
              <Button
                colorScheme={'green'}
                bg={'#ccc3e1'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'blue.500',
                }}>
                Register
              </Button>
              <Text color={'gray.500'} textAlign='center'>
                Throttle to learn!
              </Text>
            <Button variant={'untouchable'} colorScheme={'black'} size={'sm'}>
              Full Site Coming Soon
            </Button>
          </Stack>
      </Box>


      
    </Box >
  );
}
