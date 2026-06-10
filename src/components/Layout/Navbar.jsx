import { Box, Flex, HStack, Button, useColorModeValue, Link as ChakraLink } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionBox = motion(Box);

const Navbar = () => {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 50], ['rgba(250, 247, 242, 0)', 'rgba(250, 247, 242, 0.9)']);
  const shadow = useTransform(scrollY, [0, 50], ['none', '0 4px 6px -1px rgba(0, 0, 0, 0.1)']);
  const backdropFilter = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(10px)']);

  const links = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Blog', href: '/#blog' },
  ];

  return (
    <MotionBox
      position="fixed"
      top={0}
      w="100%"
      zIndex={100}
      style={{ bg, boxShadow: shadow, backdropFilter }}
      transition={{ duration: 0.3 }}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto" px={4}>
        <Box as="a" href="/#home" fontWeight="bold" fontSize="xl" color="brand.accent" fontFamily="heading" textDecoration="none" _hover={{ textDecoration: 'none' }}>
          Nitish<Box as="span" color="brand.highlight">.</Box>
        </Box>

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {links.map((link) => (
            <ChakraLink
              key={link.name}
              href={link.href}
              color="brand.text"
              fontWeight="500"
              _hover={{ color: 'brand.highlight', textDecoration: 'none' }}
              transition="color 0.2s"
            >
              {link.name}
            </ChakraLink>
          ))}
          <Button
            as="a"
            href="/#contact"
            variant="solid"
            size="sm"
            px={6}
          >
            Contact Me
          </Button>
        </HStack>
      </Flex>
    </MotionBox>
  );
};

export default Navbar;
