import { Box, Stack, Heading, Text } from '@chakra-ui/react';
 

const Home = () => {
    return (
        <Box as='section' p="4" color={'white'}>
            <Stack spacing={4} direction='column'  align="center" mt={4}>
                <Heading size={"3xl"} bg="purple.500/70" p={2} rounded='md'>Welcome</Heading>
                <Text fontSize={'xl'} bg="purple.500/70" p={2} rounded='md'>This is the landing page of my porfolio, feel free to navigate using the links on the top right.</Text>
            </Stack>
        </Box>
    );
};

export default Home;