import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Container,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ReactNode, useState } from 'react';

import NextLink from "next/link"

const SwitchMobile: React.FC = () => {
    const isMobile = useBreakpointValue({ base: true, lg: false })
    const { colorMode, toggleColorMode } = useColorMode();

    if (isMobile) {
        return (
            <Menu>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <ChevronDownIcon />
                </MenuButton>

                <MenuList alignItems={'center'}>
                    <MenuItem>
                        <NextLink href="/about" passHref>
                            <Box as="a">About</Box>
                        </NextLink>
                    </MenuItem>
                    <MenuItem>
                        <NextLink href="/" passHref>
                            <Box as="a">Notes</Box>
                        </NextLink>
                    </MenuItem>
                </MenuList>
            </Menu>

        )
    }
    return (
        <Stack direction={'row'} spacing={3}>
            <NextLink href="/about" passHref>
                <Button as="a">About</Button>
            </NextLink>
            <NextLink href="/" passHref>
                <Button as="a">Notes</Button>
            </NextLink>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Stack>

    )
}

const Header: React.FC = () => {
    return (
        <>
            <Center w='100%' h="20" bg={useColorModeValue('gray.100', 'gray.900')}>

                <Container maxW="2xl" px={4} >
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'} border={''}>
                        <NextLink href="/" passHref>
                            <Button as="a">Matchaのサイト</Button>
                        </NextLink>

                        <Stack direction={'row'} spacing={7}>
                            <SwitchMobile />
                        </Stack>
                    </Flex>
                </Container>
            </Center>




        </>
    )
}

export default Header
