
import { Box, Link, Flex, Container, Button, MenuItem, For,  } from '@chakra-ui/react';

import { FiChevronsLeft,  } from 'react-icons/fi';

import { 
    MenuContent,
 
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
                    <DrawerContent display="flex" flexDirection="column" gap="4" align="center" justify="center">
                        <DrawerHeader justifyItems={'center'} borderBottomWidth="1px"> 
                            <DrawerTitle display={'flex'} justify={'center'}>Menu</DrawerTitle>
                            <DrawerCloseTrigger asChild>
                            </DrawerCloseTrigger>
                        </DrawerHeader>
                        <DrawerBody display="flex" flexDirection="column" gap="4" align="center" justify="center">
                            <MenuRoot>

                            <For each = {[ 'Home', 'About', 'Portfolio', 'Contact']}>
                                {(item) => (
                                    <MenuItem justifyContent={'center'} key={item} as={Link} href={`/${item.toLowerCase()}`}>{item}</MenuItem>
                                )}
                            </For>

                            </MenuRoot>



                        </DrawerBody>
                        <DrawerCloseTrigger />
                    </DrawerContent>
                </DrawerRoot>

                <Box hideBelow='md' as="nav" display="flex" gap="4" align="center" justify="center"> 
                    
                    <For each = {[ 'Home', 'About', 'Portfolio', 'Contact']}>
                        {(item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`}>{item}</Link>
                        )}
                    </For>

                </Box>
                </Container>
            </Flex>
    );
}


export default Nav;