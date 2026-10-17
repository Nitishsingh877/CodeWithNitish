import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const NavLink = ({ children, to, isActive }) => (
  <Link
    as={RouterLink}
    to={to}
    px={2}
    py={1}
    rounded={'md'}
    color={isActive ? 'brand.400' : 'inherit'}
    fontWeight={isActive ? 'bold' : 'medium'}
    _hover={{
      textDecoration: 'none',
      color: 'brand.400',
      transform: 'translateY(-1px)',
    }}
    transition="all 0.2s"
  >
    {children}
  </Link>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const location = useLocation()

  return (
    <MotionBox
      bg={useColorModeValue('white', 'gray.900')}
      px={4}
      position="fixed"
      w="100%"
      top={0}
      zIndex={1000}
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxW="7xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link
            as={RouterLink}
            to="/"
            fontSize="xl"
            fontWeight="bold"
            color="brand.400"
            _hover={{ textDecoration: 'none' }}
          >
            NitishBuilds
          </Link>

          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  isActive={location.pathname === link.path}
                >
                  {link.name}
                </NavLink>
              ))}
            </HStack>

            <Button onClick={toggleColorMode} variant="ghost" size="sm">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  isActive={location.pathname === link.path}
                >
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </MotionBox>
  )
}