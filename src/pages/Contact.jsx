import { Box, Heading, Text, Stack } from "@chakra-ui/react";

function Contact() {
  return (
   <Box as='section' p="4" justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
        <Stack spacing={4} direction='column'  align="center" mt={4}>
            <Heading size={"3xl"}>Contact Info</Heading>
            <Text fontSize={'xl'}>Feel free to reach out to me using any of the following methods.</Text>
            <Text fontSize={'xl'}>Email:
                <a href="mailto: koliandrik@gmail.com"> koliandrik@gmail.com</a>
            </Text>
            <Text fontSize={'xl'}>Phone: 916-410-9071</Text>
            <Text fontSize={'xl'}>LinkedIn:
                <a href="https://www.linkedin.com/in/koliandrik/"> Mykola Nastyn</a>
            </Text>

        </Stack>
    </Box>
  );
}

export default Contact;