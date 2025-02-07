import { Box, Stack, Heading, Text } from '@chakra-ui/react';
 

const Home = () => {
    return (
        <Box as='section' p="4" justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
            <Stack spacing={4} direction='column'  align="center" mt={4}>
                <Heading size={"3xl"}>Welcome</Heading>
                <Text fontSize={'xl'}>This is the landing page of my porfolio, feel free to navigate using the links on the top righ.</Text>
            </Stack>
        </Box>
    );
};

export default Home;