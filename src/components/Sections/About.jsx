import { Box, Container, Flex, VStack, Text, Circle, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SectionHeading from '../Shared/SectionHeading';
import { experience } from '../../data/portfolioData';

const MotionBox = motion(Box);

const educationHistory = [
  {
    title: "Bachelors of Technology in Computer Science and Engineering",
    company: "Technocrats Institute Of Technology, Bhopal MP",
    duration: "2021 - 2025",
    location: "Bhopal, MP",
    description: "GPA: 7.75/10.0",
    responsibilities: []
  },
  {
    title: "Senior Secondary Education",
    company: "MKDAV Public School",
    duration: "2019 - 2021",
    location: "India",
    description: "Percentage: 88.60%",
    responsibilities: []
  },
  {
    title: "Secondary Education",
    company: "V PM Gyan Niketan School",
    duration: "2017 - 2019",
    location: "India",
    description: "Percentage: 88.80%",
    responsibilities: []
  }
];

const TimelineItem = ({ data, isLast, delay }) => {
  return (
    <Flex position="relative" pb={isLast ? 0 : 12}>
      <Flex direction="column" alignItems="center" mr={6}>
        <Circle size="16px" bg="brand.highlight" zIndex={1} />
        {!isLast && <Box w="2px" h="100%" bg="blackAlpha.200" position="absolute" top="16px" left="7px" />}
      </Flex>
      <MotionBox
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        bg="white"
        p={6}
        borderRadius="xl"
        boxShadow="sm"
        border="1px solid"
        borderColor="blackAlpha.50"
        w="full"
        _hover={{ boxShadow: 'md', borderColor: 'brand.highlight' }}
      >
        <Text fontSize="sm" color="brand.highlight" fontWeight="bold" mb={2}>
          {data.duration} | {data.location}
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="brand.accent" fontFamily="heading">
          {data.title}
        </Text>
        <Text fontSize="lg" color="brand.secondary" mb={4}>
          {data.company}
        </Text>
        <Text color="brand.text" mb={4}>
          {data.description}
        </Text>
        <VStack align="start" spacing={2}>
          {data.responsibilities.map((resp, idx) => (
            <Flex key={idx} align="start">
              <Box as="span" color="brand.highlight" mr={2}>•</Box>
              <Text fontSize="sm" color="brand.secondary">{resp}</Text>
            </Flex>
          ))}
        </VStack>
      </MotionBox>
    </Flex>
  );
};

const About = () => {
  return (
    <Box id="about" py={24} bg="blackAlpha.50">
      <Container maxW="5xl">
        <SectionHeading
          title="My Journey"
          subtitle="A timeline of my professional experience and growth."
        />

        <Box mt={16}>
          <Text fontSize="2xl" fontFamily="heading" color="brand.accent" mb={8} borderBottom="2px solid" borderColor="brand.highlight" display="inline-block" pb={2}>
            Experience
          </Text>
          <TimelineItem data={experience.current} delay={0.1} />
          <TimelineItem data={experience.internship} isLast delay={0.3} />
        </Box>

        <Box mt={16}>
          <Text fontSize="2xl" fontFamily="heading" color="brand.accent" mb={8} borderBottom="2px solid" borderColor="brand.highlight" display="inline-block" pb={2}>
            Education
          </Text>
          {educationHistory.map((edu, idx) => (
            <TimelineItem key={idx} data={edu} isLast={idx === educationHistory.length - 1} delay={0.1 * idx} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
