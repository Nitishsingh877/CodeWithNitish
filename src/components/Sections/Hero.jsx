import { Box, Flex, Heading, Text, Button, VStack, HStack, Image, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import profilePic from '../../data/1761382692975.jpg';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Hero = () => {
  return (
    <Box id="home" minH="100vh" display="flex" alignItems="center" pt={16}>
      <Container maxW="7xl">
        <Flex direction={{ base: 'column-reverse', lg: 'row' }} alignItems="center" justifyContent="space-between">
          <VStack align="flex-start" spacing={6} maxW="2xl" flex={1}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Text color="brand.highlight" fontWeight="bold" letterSpacing="widest" textTransform="uppercase">
                {personalInfo.title}
              </Text>
            </MotionBox>
            
            <MotionHeading
              as="h1"
              size="4xl"
              fontFamily="heading"
              color="brand.accent"
              lineHeight="1.2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building Intelligent Digital Experiences.
            </MotionHeading>
            
            <MotionText
              fontSize="xl"
              color="brand.secondary"
              lineHeight="tall"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {personalInfo.bio}
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <HStack spacing={4}>
                <Button as="a" href="/#projects" size="lg" rightIcon={<FaArrowRight />} _hover={{ transform: 'translateY(-2px)' }}>
                  View Projects
                </Button>
                <Button as="a" href="/#blog" size="lg" variant="outline" _hover={{ transform: 'translateY(-2px)' }}>
                  Read Blog
                </Button>
              </HStack>
            </MotionBox>
          </VStack>

          <MotionBox
            flex={1}
            display="flex"
            justifyContent="center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            position="relative"
            mt={{ base: 12, lg: 0 }}
          >
            {/* Minimalist Profile Picture Placeholder */}
            <Box
              w={{ base: "300px", md: "400px" }}
              h={{ base: "300px", md: "400px" }}
              borderRadius="full"
              bg="brand.secondary"
              position="relative"
              overflow="hidden"
              boxShadow="2xl"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-5%',
                left: '-5%',
                width: '110%',
                height: '110%',
                bgGradient: 'linear(to-br, brand.highlight, transparent)',
                opacity: 0.6,
              }}
            >
               <Image src={profilePic} alt="Nitish Singh" objectFit="cover" w="100%" h="100%" />
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
