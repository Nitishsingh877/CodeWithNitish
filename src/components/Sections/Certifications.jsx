import { Box, Container, SimpleGrid, Flex, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SectionHeading from '../Shared/SectionHeading';
import { FaCertificate, FaMicrosoft, FaAws } from 'react-icons/fa';

const MotionBox = motion(Box);

const certs = [
  {
    id: 1,
    name: "Azure AI-102: Designing and Implementing an Azure AI Solution",
    issuer: "Microsoft",
    icon: FaMicrosoft,
    color: "#00A4EF"
  },
  {
    id: 2,
    name: "Azure AI-900: Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    icon: FaMicrosoft,
    color: "#00A4EF"
  },
  {
    id: 3,
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    icon: FaAws,
    color: "#FF9900"
  },
  {
    id: 4,
    name: "Agentic Industry Hackathon 2026",
    issuer: "Microsoft",
    icon: FaMicrosoft,
    color: "#00A4EF"
  }
];

const Certifications = () => {
  return (
    <Box id="certifications" py={24} bg="white">
      <Container maxW="5xl">
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional credentials validating my cloud and AI expertise." 
        />
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={12}>
          {certs.map((cert, idx) => (
            <MotionBox
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              bg="white"
              p={8}
              borderRadius="2xl"
              boxShadow="lg"
              border="1px solid"
              borderColor="blackAlpha.50"
              textAlign="center"
              position="relative"
              overflow="hidden"
              _hover={{ transform: 'translateY(-5px)', borderColor: 'brand.highlight' }}
            >
              <Box 
                position="absolute" 
                top="-20px" 
                right="-20px" 
                opacity={0.05} 
                transform="rotate(15deg)"
              >
                <Icon as={FaCertificate} boxSize="150px" />
              </Box>
              
              <Flex justify="center" mb={6}>
                <Icon as={cert.icon} boxSize={12} color={cert.color} />
              </Flex>
              <Text fontSize="lg" fontWeight="bold" color="brand.accent" mb={2} fontFamily="heading">
                {cert.name}
              </Text>
              <Text color="brand.secondary" fontSize="sm">
                Issued by {cert.issuer}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Certifications;
