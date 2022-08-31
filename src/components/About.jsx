import React from 'react'

import { Box, Text, Center, ChakraProvider, Heading } from "@chakra-ui/react";
import back from "../assets/back.jpg";

export default function About() {
  return (
    <Box>
      <Center
        id="hero"
        height="100vh"
        backgroundImage={'linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%);'}
        color="white"
        flexDirection={'column'}
        margin={'10px'}
      >
        <Heading>About Us</Heading>
        <Text maxInlineSize={'2000'}>
            Technology makes it doable for individuals to achieve management over everything, except over technology. Technology is such a lot of fun, however, the likelihood of drowning in it's high. Our goal is to assist, nurture future developers and leaders and build a pool of extremely good school personnel, that is quickly employable by the business and facilitate spur innovation. We help students perceive up-to-date engineering. Explore completely different areas of interest. Produce social connections wherever students with numerous technology experience come together and share knowledge.
        </Text>

      </Center>
    </Box>
  )
}
