import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import React from 'react';

const About = () => {
    return (
   <Box as='section' color={'white'}>
            <Stack spacing={4} direction='column'  align="center" mt={4} >
                <Heading size={"3xl"} bg="purple.500/70" p={2} rounded='md'>About Me</Heading> 
                <Text fontSize={'xl'} bg="purple.500/70" p={2} rounded='md' >
                    I am a driven and skilled Web Developer with 2
                years of hands-on coding experience in
                JavaScript, React, Node.js, and general fullstack development. Blending a background in
                client relations and marketing, I excel at
                delivering seamless, user-focused digital
                solutions. Known for strong leadership, clear
                communication, and a collaborative
                approach to problem-solving. I’m dedicated
                to driving impactful web solutions that
                enhance user satisfaction and engagement.

                </Text>
            </Stack>
        </Box>

    );
};

export default About;