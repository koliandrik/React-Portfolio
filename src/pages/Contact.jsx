import { Box, Heading, Text, Stack } from "@chakra-ui/react";

function Contact() {
  return (
   <Box as='section' p="4" justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
        <Stack spacing={4} direction='column'  align="center" mt={4} color= {'white'}>
            <Heading size={"3xl"} p={2} rounded='md'>Contact Info</Heading>
            <Text fontSize={'xl'} bg="purple.500/70" p={2} rounded='md'>Feel free to reach out to me using any of the following methods.</Text>
            <Text fontSize={'xl'} bg="purple.500/70" p={2} rounded='md'>Email:
                <a href="mailto: koliandrik@gmail.com"> koliandrik@gmail.com</a>
            </Text>
            <Text fontSize={'xl'} bg="purple.500/70" p={2} rounded='md'>Phone: 916-410-9071</Text>
            <Text fontSize={'xl'} bg="purple.500/70" p={2} rounded='md'>LinkedIn:
                <a href="https://www.linkedin.com/in/koliandrik/"> Mykola Nastyn</a>
            </Text>

        </Stack>
    </Box>
  );
}

export default Contact;