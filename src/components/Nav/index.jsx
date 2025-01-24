
import { Box, Link, Flex, Container, Button, } from '@chakra-ui/react';

import { FiChevronsLeft, FiChevronsRight, FiMenu, FiX } from 'react-icons/fi';

import { 
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from '@chakra-ui/react';

import { 
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerRoot,
    DrawerTrigger,
    DrawerTitle,
} from '@/components/ui/drawer';

function Nav() {
    return (
            <Flex borderBottom='md' gap="4" justify="space-between" align="center" p="4" color="white" >
               <Container display={'flex'} justifyContent={'space-between'} alignItems={'center'} maxW={'container.xl'}> 
                <Box  as="h1" fontSize="xl">Mykola Nastyn</Box>
                
                <DrawerRoot>
                    <DrawerBackdrop />
                    <DrawerTrigger asChild>
                        <Button hideFrom='md' variant="outline" size="sm">
                            <FiChevronsLeft />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                        <DrawerTitle>Drawer Title</DrawerTitle>
                        </DrawerHeader>
                        <DrawerBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        </DrawerBody>
                        <DrawerFooter>
                        <DrawerActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerActionTrigger>
                        <Button>Save</Button>
                        </DrawerFooter>
                        <DrawerCloseTrigger />
                    </DrawerContent>
                </DrawerRoot>

                <Box hideBelow='md' as="nav" display="flex" gap="4" align="center" justify="center"> 

                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/portfolio'>Projects</Link>
                    <Link href='/contact'>Contact</Link>

                </Box>
                </Container>
            </Flex>
    );
}


export default Nav;