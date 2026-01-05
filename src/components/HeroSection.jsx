import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
  VStack,
  Badge,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { personalInfo } from '../data/portfolioData'

const MotionBox = motion(Box)
const MotionStack = motion(Stack)

export default function HeroSection() {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.400, purple.500)',
    'linear(to-r, blue.600, purple.700)'
  )

  return (
    <Container maxW="7xl" py={{ base: 16, md: 20 }}>
      <MotionStack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: 8, lg: 12 }}
        align="center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Avatar
            size="2xl"
            src="/assets/profile.jpg"
            name={personalInfo.name}
            border="4px solid"
            borderColor="brand.400"
            boxShadow="xl"
            w={{ base: "150px", md: "200px" }}
            h={{ base: "150px", md: "200px" }}
          />
        </MotionBox>

        {/* Content */}
        <VStack spacing={6} align={{ base: "center", lg: "flex-start" }} textAlign={{ base: "center", lg: "left" }} flex={1}>
          <Badge
            colorScheme="brand"
            px={4}
            py={2}
            borderRadius="full"
            fontSize="sm"
            fontWeight="bold"
          >
            {personalInfo.title}
          </Badge>

          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            bgGradient={bgGradient}
            bgClip="text"
            maxW="4xl"
          >
            {personalInfo.tagline}
          </Heading>

          <Text
            fontSize={{ base: "md", md: "xl" }}
            color={useColorModeValue('gray.600', 'gray.300')}
            maxW="3xl"
            lineHeight="tall"
          >
            Specializing in Java Spring Boot, React, Microservices & GenAI. 
            Currently at {personalInfo.company}, delivering enterprise solutions with focus on 
            code quality, scalability, and intelligent automation.
          </Text>

          <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
            <Button
              as={RouterLink}
              to="/projects"
              size="lg"
              variant="gradient"
              _hover={{ transform: 'translateY(-2px)' }}
            >
              View My Work
            </Button>
            <Button
              as="a"
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outline"
              _hover={{ transform: 'translateY(-2px)' }}
            >
              Download CV
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              variant="ghost"
              _hover={{ transform: 'translateY(-2px)' }}
            >
              Contact Me
            </Button>
          </HStack>
        </VStack>
      </MotionStack>
    </Container>
  )
}