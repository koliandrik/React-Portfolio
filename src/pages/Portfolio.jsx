import { Box, Link, Card, Stack, Heading, Text } from "@chakra-ui/react";

import { FiGithub, FiPlay } from "react-icons/fi";


const Portfolio = () => {
    return (
        <Box as='section' p="4" justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
            
            <Stack spacing={4} direction='column'  align="center" mt={4} color={'white'}>
                <Heading size={"3xl"}>Portfolio</Heading>
                <Text fontSize={'xl'}>Here are some of the projects I have worked on.</Text>
            </Stack>

            <Stack spacing={4} direction='row' wrap="wrap" justify="center" align="start" mt={4}> 

                <Card.Root width={'320px'}  bg="none"  >
                    <Card.Body gap={2} color={'white'} p={4} display="flex" flexDirection="column" align="center" justify="center" bg="purple.700/70" rounded="md"> 
                        <Card.Title fontSize={'xl'} bg="purple.500/70" p={2} rounded='md' >Song Search API App</Card.Title>
                        <Card.Description fontSize={'xl'} color={"white"} bg="purple.500/70" p={2} rounded='md'>A simple application which uses multiple API so that when given input returns the discography of an artist;
                        along with songs in each album and lyrics to each song.</Card.Description>
                        <Card.Footer justifyContent={'center'} align={'center'} display={'flex'} gap={2} p={2}bg="purple.500/70" rounded='md'>
                            <Link p={1} color= {'white'} bg = 'purple.700' rounded='md' href="https://github.com/koliandrik/Song-Search" ><FiGithub /> Github Repo</Link >
                            <Link p={1} color= {'white'} bg = 'purple.700' rounded='md' href="https://koliandrik.github.io/Song-Search/" ><FiPlay /> Live Demo</Link >
                        </Card.Footer>
                    </Card.Body>
                </Card.Root>

                <Card.Root width={'320px'} bg="none" shadow="md" rounded="md">  
                    <Card.Body gap={2} color={'white'} p={4} display="flex" flexDirection="column" align="center" justify="center" bg="purple.700/70" rounded="md"> 
                        <Card.Title fontSize={'xl'} bg="purple.500/70" p={2} rounded='md'>Meme Site</Card.Title>
                        <Card.Description fontSize={'xl'} color={'white'} bg="purple.500/70" p={2} rounded='md'>A simple forum/social media-like application which can be used to share images between friends, along with
                        the functionality to leave comments on other people’s posts. (Requires registration, also currently broken)</Card.Description>
                        <Card.Footer justifyContent={'center'} align={'center'} display={'flex'} gap={2} p={2} bg="purple.500/70" rounded='md'>
                            <Link p={1} color= {'white'} bg = 'purple.700' rounded='md' href="https://github.com/koliandrik/Meme-Site" ><FiGithub /> Github Repo</Link >
                            <Link p={1} color= {'white'} bg = 'purple.700' rounded='md' href="https://meme-site-x66j.onrender.com/" ><FiPlay /> Live Demo</Link >
                        </Card.Footer>
                    </Card.Body>
                </Card.Root>
                
                <Card.Root width={'320px'} bg="purple.700/70" shadow="md" rounded="md">
                    <Card.Body gap={2} color={'white'} p={4} display="flex" flexDirection="column" align="center" justify="center" bg="purple.700/70" rounded="md" > 
                        <Card.Title fontSize={'xl'} bg="purple.500/70" p={2} rounded='md' >Back Alley</Card.Title>
                        <Card.Description fontSize={'xl'} color= {'white'} bg="purple.500/70" p={2} rounded='md'>A satirical application which parodies a dark net website used for selling human organs and exotic animals.
                        Written using React and utilizing Materialize (if not loading wait a few seconds)</Card.Description>
                        <Card.Footer justifyContent={'center'} align={'center'} display={'flex'} gap={2} p={2} bg="purple.500/70" rounded='md'>
                            <Link p={1} color= {'white'} bg = 'purple.700' rounded='md' href="https://github.com/koliandrik/Back-Alley" ><FiGithub /> Github Repo</Link >
                            <Link p={1} color= {'white'} bg = 'purple.700' rounded='md' href="https://back-alley-28lp.onrender.com/" ><FiPlay /> Live Demo</Link >
                        </Card.Footer>
                    </Card.Body>
                </Card.Root>

            </Stack>
        </Box>

        


    );
};

export default Portfolio;