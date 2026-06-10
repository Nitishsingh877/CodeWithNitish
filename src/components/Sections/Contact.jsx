import { Box, Container, Flex, VStack, Text, Input, Textarea, Button, HStack, Icon, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SectionHeading from '../Shared/SectionHeading';
import { personalInfo } from '../../data/portfolioData';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const MotionBox = motion(Box);

const Contact = () => {
  return (
    <Box id="contact" py={24} bg="blackAlpha.50">
      <Container maxW="5xl">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Looking for opportunities or want to collaborate? Let's talk." 
        />
        
        <Flex direction={{ base: 'column', md: 'row' }} gap={16} mt={12}>
          <MotionBox 
            flex={1}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Text fontSize="2xl" fontFamily="heading" color="brand.accent" mb={6}>
              Contact Information
            </Text>
            <Text color="brand.text" mb={8}>
              I'm always open to discussing product design work, software engineering roles, or partnership opportunities.
            </Text>
            
            <VStack align="start" spacing={6}>
              <HStack>
                <Flex align="center" justify="center" w={10} h={10} borderRadius="full" bg="white" boxShadow="sm">
                  <Icon as={FaEnvelope} color="brand.highlight" />
                </Flex>
                <Link href={`mailto:${personalInfo.email}`} color="brand.text" _hover={{ color: 'brand.highlight' }}>
                  {personalInfo.email}
                </Link>
              </HStack>
              <HStack>
                <Flex align="center" justify="center" w={10} h={10} borderRadius="full" bg="white" boxShadow="sm">
                  <Icon as={FaLinkedin} color="brand.highlight" />
                </Flex>
                <Link href={personalInfo.linkedin} isExternal color="brand.text" _hover={{ color: 'brand.highlight' }}>
                  LinkedIn Profile
                </Link>
              </HStack>
              <HStack>
                <Flex align="center" justify="center" w={10} h={10} borderRadius="full" bg="white" boxShadow="sm">
                  <Icon as={FaGithub} color="brand.highlight" />
                </Flex>
                <Link href={personalInfo.github} isExternal color="brand.text" _hover={{ color: 'brand.highlight' }}>
                  GitHub Profile
                </Link>
              </HStack>
            </VStack>
          </MotionBox>

          <MotionBox 
            flex={1}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            bg="white"
            p={8}
            borderRadius="2xl"
            boxShadow="lg"
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <VStack spacing={4}>
                <Input placeholder="Your Name" bg="blackAlpha.50" border="none" _focus={{ ring: 2, ringColor: 'brand.highlight' }} py={6} />
                <Input placeholder="Your Email" type="email" bg="blackAlpha.50" border="none" _focus={{ ring: 2, ringColor: 'brand.highlight' }} py={6} />
                <Textarea placeholder="Your Message" bg="blackAlpha.50" border="none" _focus={{ ring: 2, ringColor: 'brand.highlight' }} rows={5} />
                <Button w="full" size="lg" rightIcon={<FaPaperPlane />} mt={2}>
                  Send Message
                </Button>
              </VStack>
            </form>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
