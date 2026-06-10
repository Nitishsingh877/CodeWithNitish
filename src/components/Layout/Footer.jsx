import { Box, Container, Flex, Text, HStack, Link, Icon, Divider } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  return (
    <Box bg="white" color="brand.text" py={8} borderTop="1px solid" borderColor="blackAlpha.50">
      <Container maxW="5xl">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={4}>
          <Text fontWeight="bold" fontSize="lg" fontFamily="heading" color="brand.accent">
            Nitish Singh
          </Text>

          <Text fontSize="sm" color="brand.secondary" display="flex" alignItems="center" gap={1}>
            Built By <Icon as={FaHeart} color="brand.highlight" /> Nitish Singh.
          </Text>

          <HStack spacing={4}>
            <Link href={personalInfo.github} isExternal _hover={{ color: 'brand.highlight' }}>
              <Icon as={FaGithub} boxSize={5} />
            </Link>
            <Link href={personalInfo.linkedin} isExternal _hover={{ color: 'brand.highlight' }}>
              <Icon as={FaLinkedin} boxSize={5} />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
