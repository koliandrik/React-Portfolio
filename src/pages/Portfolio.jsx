import { Box, Link, Card, Stack, Heading, Text } from "@chakra-ui/react";


const Portfolio = () => {
    return (
        <Box as='section' p="4" justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
            
            <Stack spacing={4} direction='column'  align="center" mt={4}>
                <Heading size={"3xl"}>Portfolio</Heading>
                <Text fontSize={'xl'}>Here are some of the projects I have worked on.</Text>
            </Stack>

            <Stack spacing={4} direction='row' wrap="wrap" justify="center" align="start" mt={4}> 

                <Card.Root width={'320px'}  bg="purple.700/70" shadow="md" rounded="md">
                    <Card.Body gap={2}> 
                        <Card.Title fontSize={'xl'} >Song Search API App</Card.Title>
                        <Card.Description fontSize={'xl'} color={"white"}>A simple application which uses multiple API so that when given input returns the discography of an artist;
                        along with songs in each album and lyrics to each song.</Card.Description>
                        <Card.Footer justifyContent={'center'} align={'center'} display={'flex'} gap={2} p={2}>
                            <Link p={1}bg = 'purple.700' rounded='md' href="https://github.com/koliandrik/Song-Search" >Github Repo</Link >
                            <Link p={1}bg = 'purple.700' rounded='md' href="https://koliandrik.github.io/Song-Search/" >Live Demo</Link >
                        </Card.Footer>
                    </Card.Body>
                </Card.Root>

                <Card.Root width={'320px'} bg="purple.700/70" shadow="md" rounded="md">
                    <Card.Body gap={4} p={4} display="flex" flexDirection="column" align="center" justify="center"> 
                        <Card.Title fontSize={'xl'} >Meme Site</Card.Title>
                        <Card.Description fontSize={'xl'} color={'white'}>A simple forum/social media-like application which can be used to share images between friends, along with
                        the functionality to leave comments on other people’s posts. (Requires registration, also currently broken)</Card.Description>
                        <Card.Footer justifyContent={'center'} align={'center'} display={'flex'} gap={2} p={2}>
                            <Link p={1}bg = 'purple.700' rounded='md' href="https://github.com/koliandrik/Meme-Site" >Github Repo</Link >
                            <Link p={1}bg = 'purple.700' rounded='md' href="https://meme-site-x66j.onrender.com/" >Live Demo</Link >
                        </Card.Footer>
                    </Card.Body>
                </Card.Root>
                
                <Card.Root width={'320px'} bg="purple.700/70" shadow="md" rounded="md">
                    <Card.Body gap={4} p={4} display="flex" flexDirection="column" align="center" justify="center"> 
                        <Card.Title fontSize={'xl'} >Back Alley</Card.Title>
                        <Card.Description fontSize={'xl'} color= {'white'}>A satirical application which parodies a dark net website used for selling human organs and exotic animals.
                        Written using React and utilizing Materialize (if not loading wait a few seconds)</Card.Description>
                        <Card.Footer justifyContent={'center'} align={'center'} display={'flex'} gap={2} p={2}>
                            <Link p={1}bg = 'purple.700' rounded='md' href="https://github.com/koliandrik/Back-Alley" >Github Repo</Link >
                            <Link p={1}bg = 'purple.700' rounded='md' href="https://back-alley-28lp.onrender.com/" >Live Demo</Link >
                        </Card.Footer>
                    </Card.Body>
                </Card.Root>

            </Stack>
        </Box>

        


    );
};

export default Portfolio;