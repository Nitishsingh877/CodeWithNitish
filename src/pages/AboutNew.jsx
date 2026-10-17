import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Card,
  CardBody,
  Badge,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { experience, techStack, certifications, education, technicalSkills } from '../data/portfolioData'

const MotionCard = motion(Card)

const skillsByCategory = {
  Backend: [...techStack.filter(tech => tech.category === 'Backend').map(tech => tech.name), ...technicalSkills.backend],
  Frontend: [...techStack.filter(tech => tech.category === 'Frontend').map(tech => tech.name), ...technicalSkills.frontend],
  'Cloud & DevOps': [...techStack.filter(tech => tech.category === 'Cloud').map(tech => tech.name), 
                    ...techStack.filter(tech => tech.category === 'DevOps').map(tech => tech.name)],
  'Tools & Others': [...techStack.filter(tech => tech.category === 'AI').map(tech => tech.name),
                 ...techStack.filter(tech => tech.category === 'Tools').map(tech => tech.name),
                 ...techStack.filter(tech => tech.category === 'Monitoring').map(tech => tech.name),
                 ...technicalSkills.tools]
}

const skills = Object.entries(skillsByCategory).map(([category, items]) => ({ category, items }))

export default function About() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <>
      <Helmet>
        <title>About - Nitish Singh | NitishBuilds</title>
        <meta name="description" content="Learn about Nitish Singh, Java Full Stack Developer at Capgemini with expertise in Spring Boot, React, Microservices, and GenAI applications." />
      </Helmet>

      <Box pt={20} minH="100vh">
        <Container maxW="6xl" py={20}>
          <Stack spacing={12}>
            <Stack spacing={6} align="center" textAlign="center">
              <Heading size="xl">About Me</Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="3xl"
                lineHeight="tall"
              >
                I am a Software Engineer based in Mumbai, specializing in Java full stack development, 
                with a strong focus on microservices architecture and GenAI-enhanced applications.
              </Text>
            </Stack>

            {/* Education Section */}
            <MotionCard
              bg={cardBg}
              border="1px"
              borderColor={borderColor}
              borderRadius="xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <CardBody p={8}>
                <Stack spacing={6}>
                  <Heading size="md" color="brand.400">Education & Certifications</Heading>
                  
                  <Stack spacing={4}>
                    {education.map((edu, index) => (
                      <Box key={index}>
                        <Text fontWeight="bold" color={useColorModeValue('gray.800', 'gray.200')}>
                          {edu.institution}
                        </Text>
                        <Text color={useColorModeValue('gray.600', 'gray.300')}>
                          {edu.degree} {edu.location && `• ${edu.location}`}
                        </Text>
                        <HStack justify="space-between" flexWrap="wrap">
                          <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
                            {edu.duration}
                          </Text>
                          <Badge colorScheme="green" variant="outline">
                            {edu.grade}
                          </Badge>
                        </HStack>
                      </Box>
                    ))}
                  </Stack>
                  
                  <HStack spacing={4} flexWrap="wrap" justify="center" pt={4}>
                    {certifications.map((cert) => (
                      <Badge key={cert.name} colorScheme={cert.color} p={2} borderRadius="md">
                        {cert.name}
                      </Badge>
                    ))}
                  </HStack>
                </Stack>
              </CardBody>
            </MotionCard>

            {/* Skills Section */}
            <Stack spacing={8}>
              <Heading size="lg" textAlign="center">Skills & Technologies</Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                {skills.map((skillGroup, index) => (
                  <MotionCard
                    key={skillGroup.category}
                    bg={cardBg}
                    border="1px"
                    borderColor={borderColor}
                    borderRadius="xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <CardBody p={6}>
                      <Stack spacing={4}>
                        <Heading size="sm" color="brand.400">
                          {skillGroup.category}
                        </Heading>
                        <Stack spacing={2}>
                          {skillGroup.items.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              colorScheme="brand"
                              fontSize="xs"
                              p={2}
                              borderRadius="md"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </Stack>
                      </Stack>
                    </CardBody>
                  </MotionCard>
                ))}
              </SimpleGrid>
            </Stack>

            {/* Experience Section */}
            <MotionCard
              bg={cardBg}
              border="1px"
              borderColor={borderColor}
              borderRadius="xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CardBody p={8}>
                <Stack spacing={6}>
                  <Heading size="md" color="brand.400">Professional Experience</Heading>
                  
                  <Box>
                    <Text fontWeight="bold" fontSize="lg" color={useColorModeValue('gray.800', 'gray.200')}>
                      {experience.current.title}
                    </Text>
                    <Text color="brand.400" fontWeight="medium">
                      {experience.current.company} • {experience.current.duration}
                    </Text>
                    <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mb={4}>
                      {experience.current.location}
                    </Text>
                  </Box>

                  <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                    {experience.current.description}
                  </Text>

                  <Stack spacing={3}>
                    <Text fontWeight="bold" color="brand.400">Key Responsibilities:</Text>
                    {experience.current.responsibilities.map((responsibility, index) => (
                      <Text key={index} color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                        • {responsibility}
                      </Text>
                    ))}
                  </Stack>

                  <Box pt={6} borderTop="1px" borderColor={borderColor} />
                  {/* new internship */}
                   <Box>
                    <Text fontWeight="bold" fontSize="lg" color={useColorModeValue('gray.800', 'gray.200')}>
                      {experience.internship.title}
                    </Text>
                    <Text color="brand.400" fontWeight="medium">
                      {experience.internship.company} • {experience.internship.duration}
                    </Text>
                    <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mb={4}>
                      {experience.current.location}
                    </Text>
                  </Box>

                  <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                    {experience.internship.description}
                  </Text>

                  <Stack spacing={3}>
                    <Text fontWeight="bold" color="brand.400">Key Responsibilities:</Text>
                    {experience.internship.responsibilities.map((responsibility, index) => (
                      <Text key={index} color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                        • {responsibility}
                      </Text>
                    ))}
                  </Stack>
                  
                </Stack>
              </CardBody>
              
            </MotionCard>
          </Stack>
        </Container>
      </Box>
    </>
  )
}