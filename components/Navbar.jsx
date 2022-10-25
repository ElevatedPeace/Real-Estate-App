import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="purple.400" fontWeight="bold">
            <Link href="/" paddingLeft="2" fontWeight="bold"> Lux Realty </Link>
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="purple.400"/>
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}> Home </MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch />}> Search </MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-Sale" passHref>
                        <MenuItem icon={<FcAbout />}> Buy Property </MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-Rent" passHref>
                        <MenuItem icon={<FiKey />}> Rent Property </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)

export default Navbar;