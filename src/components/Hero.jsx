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
      // backgroundColor={'purple'}
      backgroundImage={'https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'contain'}
      backgroundPosition={'center'}
      height={'100vh'}
    >

      <Heading textAlign={'center'} fontWeight={600} fontSize={'6xl'} pt='2'>
        Team
      </Heading>

      <Box display='flex' alignItems={'center'} justifyContent={'center'}>
        <Image
          src={logo}
          w={400}
          h={400}
        />
      </Box>


      <Text color={'gray.500'} textAlign='center'>
        Throttle to learn!
      </Text>
      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
        <Button
          colorScheme={'green'}
          bg={'#ccc3e1'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'green.500',
          }}>
          Register
        </Button>
        <Button variant={'untouchable'} colorScheme={'blue'} size={'sm'}>
          Full Site Coming Soon
        </Button>
      </Stack>
    </Box >
  );
}
