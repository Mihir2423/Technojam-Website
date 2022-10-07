import React from "react";
import Users from "../data/past_members";
import { Center,Tooltip,Grid,Box, Avatar, Text } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade';

export default function Team() {
  // const [page, setPage] = useState(1);
  // const increase = (e) => {
  //   e.preventDefault();
  //   setPage(page + 1);
  // }
  // const decrease = (e) => {
  //     e.preventDefault();
  //     setPage(page - 1);
  // }
  return (
    // <div className="team">
    //   <h2 id="tools-title">Alumni</h2>
    //   <div
    //     id="themes-section"
    //     className=" grid md:grid-cols-3 md:gap-x-12 md:gap-y-8 grid-cols-1 gap-y-6 justify-items-center items-center md:justify-center lg:px-[50px] pt-8 lg:px-[200px]"
    //   >
    //     {Users.slice((page - 1) * 9, (page - 1) * 9 + 9).map((e) => {
    //       return (
    //         <>
    //           <label className="jadu slideanim">
    //             <div className="flip-card">
    //               <div className="front">
    //                 <img
    //                   src={`https://source.unsplash.com/1600x900/?person`}
    //                   className="content-cover" alt="okay"
    //                 />
    //                 <h1 className="mt-5">{e.name}</h1>
    //                 <div className="social_links">
    //                   <ul className="">
    //                     <a href={e.githubLink}>
    //                       <li>
    //                         <i class="fa fa-github"></i>
    //                       </li>
    //                     </a>
    //                     <a href={e.linkedLink}>
    //                       <li>
    //                         <i class="fa fa-linkedin"></i>
    //                       </li>
    //                     </a>
    //                     <a href={e.domain}>
    //                       <li>
    //                         <i class="fa fa-bomb"></i>
    //                       </li>
    //                     </a>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //           </label>
    //         </>
    //       );
    //     })}
    //   </div>
    //   <div className="flex justify-center align-center space-x-2">
    //             <a href="#" onClick={decrease} class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    //                  Previous
    //             </a>
    //             <a href="#" onClick={increase} class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    //                  Next
    //             </a>
    //   </div>
    // </div>


    <div>
      <Center id="alumni">
        <Fade bottom>
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='5xl'
            fontWeight='extrabold'
            mb={4}
            >
              Our Alumni
          </Text>
        </Fade>
      </Center>


      <Center>
          <Grid templateColumns='repeat(10, 1fr)' gap={10}>
            <Fade bottom>
              {Users.map((e) => {
                  return(
                    <Tooltip hasArrow label={e.name} bg='transparent' color='grey.500'>
                      <Box p={3}>
                        <Avatar showBorder={true} borderColor={'teal'} size="md" name={e.name} src={e.photo} />
                      </Box>
                    </Tooltip>
                )},[])}
            </Fade>
          </Grid>
      </Center>
    </div>
  );
}
