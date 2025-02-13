
import { Box, Link, Flex, Container, Button, MenuItem, For  } from '@chakra-ui/react';

import { FiMenu } from 'react-icons/fi';

import {  
    MenuRoot,
} from '@chakra-ui/react';

import { 
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTrigger,
    DrawerTitle,
} from '@/components/ui/drawer';

function Nav() {
    return (
        <Flex gap="4" justify="space-between" align="center" p="4" color="white" >
            <Container display={'flex'} justifyContent={'space-between'} alignItems={'center'} maxW={'container.xl'}> 
                <Box as="h1" fontSize="3xl">Mykola Nastyn</Box>
                
                <DrawerRoot>
                    <DrawerBackdrop />
                    <DrawerTrigger asChild>
                        <Button hideFrom='md' variant="outline" size="sm" color={'white'}>
                            <FiMenu />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent display="flex" flexDirection="column" gap="4" align="center" justify="center">

                        <DrawerHeader justifyItems={'center'} borderBottomWidth="1px"> 
                            <DrawerTitle display={'flex'} justify={'center'}>Menu</DrawerTitle>
                            <DrawerCloseTrigger asChild>
                            </DrawerCloseTrigger>
                        </DrawerHeader>
                        
                        <DrawerBody display="flex" flexDirection="column" gap="4" align="center" justify="center">
                            <MenuRoot>
                                <For each={['Home', 'About', 'Portfolio', 'Contact']}>
                                    {(item) => (
                                        <MenuItem justifyContent={'center'} key={item} as={Link} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</MenuItem>
                                    )}
                                </For>
                            </MenuRoot>
                        </DrawerBody>

                        <DrawerCloseTrigger />
                    </DrawerContent>
                </DrawerRoot>

                <Box hideBelow='md' as="nav" display="flex" gap="4" align="center" justify="center"> 
                    <For each={['Home', 'About', 'Portfolio', 'Contact']}>
                        {(item) => (
                            <Link color={'white'} key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</Link>
                        )}
                    </For>
                </Box>

            </Container>
        </Flex>
    );
}


export default Nav;