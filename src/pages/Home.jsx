import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
  Badge,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaJava, FaReact, FaAws, FaDocker, FaAngular, FaRobot, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { SiSpringboot, SiMicrosoft, SiJenkins, SiKubernetes, SiJira, SiElastic, SiTailwindcss } from 'react-icons/si'
import { techStack } from '../data/portfolioData'
import HeroSection from '../components/HeroSection'

const MotionBox = motion(Box)

const iconMap = {
  FaJava, FaReact, FaAws, FaDocker, FaAngular, FaRobot, FaHtml5, FaCss3Alt, FaJs,
  SiSpringboot, SiMicrosoft, SiJenkins, SiKubernetes, SiJira, SiElastic, SiTailwindcss
}

export default function Home() {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.400, purple.500)',
    'linear(to-r, blue.600, purple.700)'
  )

  return (
    <>
      <Helmet>
        <title>Nitish Singh - Java Full Stack Developer | NitishBuilds</title>
        <meta name="description" content="Java Full Stack Developer specializing in Spring Boot, React, Microservices, and GenAI. Building scalable applications with modern technologies." />
      </Helmet>

      <Box pt={20}>
        {/* Hero Section */}
        <HeroSection />

        {/* Tech Stack Section */}
        <Container maxW="7xl" py={{ base: 12, md: 16 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Stack spacing={8} align="center">
              <Heading size="lg" textAlign="center">
                Technologies I Work With
              </Heading>
              
              <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing={{ base: 4, md: 8 }}>
                {techStack.slice(0, 12).map((tech, index) => (
                  <MotionBox
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Stack align="center" spacing={2}>
                      <Icon
                        as={iconMap[tech.icon]}
                        boxSize={{ base: 8, md: 12 }}
                        color={tech.color}
                      />
                      <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="medium" textAlign="center">
                        {tech.name}
                      </Text>
                    </Stack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </Stack>
          </MotionBox>
        </Container>

        {/* Certifications Section */}
        <Box bg={useColorModeValue('gray.50', 'gray.800')} py={{ base: 12, md: 16 }}>
          <Container maxW="7xl">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Stack spacing={8} align="center">
                <Heading size="lg" textAlign="center">
                  Certifications & Achievements
                </Heading>
                
                <HStack spacing={{ base: 2, md: 4 }} flexWrap="wrap" justify="center">
                  <Badge colorScheme="blue" p={{ base: 2, md: 3 }} borderRadius="md" fontSize={{ base: "xs", md: "sm" }}>
                    Microsoft Azure AI-900
                  </Badge>
                  <Badge colorScheme="orange" p={{ base: 2, md: 3 }} borderRadius="md" fontSize={{ base: "xs", md: "sm" }}>
                    AWS Cloud Practitioner (CLF-C02)
                  </Badge>
                  <Badge colorScheme="green" p={{ base: 2, md: 3 }} borderRadius="md" fontSize={{ base: "xs", md: "sm" }}>
                    AWS Developer Associate
                  </Badge>
                </HStack>
                
                <Text
                  textAlign="center"
                  color={useColorModeValue('gray.600', 'gray.300')}
                  maxW="2xl"
                >
                  Committed to continuous learning and staying updated with the latest 
                  technologies in cloud computing and artificial intelligence.
                </Text>
              </Stack>
            </MotionBox>
          </Container>
        </Box>
      </Box>
    </>
  )
}