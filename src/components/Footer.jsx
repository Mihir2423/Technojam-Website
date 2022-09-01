import React from 'react'

import {Center,HStack,VStack,Box,Text,Link} from '@chakra-ui/react'
import { fontSize } from '@mui/system'

const Logo=require('../assets/logo.png')

export default function Footer() {
  return (
  <>
      {/* <footer className="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <img
            src={Logo}
            className="mr-3 h-8"
            alt="Technojam Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TechnoJam
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="#" className="hover:underline">
          Technojam
        </a>
        . All Rights Reserved.
      </span>
    </footer> */}

    <div className='footer-container'>
      <Box p="5" backgroundColor="white" opacity={0.5} >
        <Center>
          <HStack spacing={'20rem'}>
            <Center>
              <img height={'100px'} width={'100px'} src={Logo} alt="Technojam Logo" />
              <Text fontSize={'lg'} fontWeight={'it'}> Copyright &copy; Team TechnoJam 2022</Text>
            </Center>
            <Box>
              <Text fontFamily={'Poppins'} as="u">Socials</Text>
              <VStack>
                  <Link href="https://www.linkedin.com/company/technojam/" isExternal>
                    LinkedIn
                  </Link>
                  <Link href="https://www.instagram.com/teamtechnojam/?hl=en" isExternal>
                    Instagram
                  </Link>
                  <Link href="https://www.facebook.com/teamtechnojam" isExternal>
                    Facebook
                  </Link>
              </VStack>
            </Box>

            <VStack>
              <Text fontFamily={'Poppins'} as="u">Contact</Text>
              <Text> 
                Email - technojam@galgotiasuniversity.edu.in
              </Text>
              <Text>
                Sarthak : +91 9811402220
              </Text>
              <Text>
                Shivansh : +91 9793440595
              </Text>
              <Text>
                Shubhang : +91 7985577877
              </Text>
            </VStack>
          </HStack>
        </Center>
      </Box>
    </div>

  </>
  )
}
