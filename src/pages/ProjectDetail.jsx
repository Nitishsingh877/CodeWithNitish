import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Badge,
  Button,
  Icon,
  SimpleGrid,
  Card,
  CardBody,
  Divider,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle, FaClock, FaUsers, FaLightbulb, FaTools, FaImages } from 'react-icons/fa'
import { projects } from '../data/portfolioData'
import ProjectGallery from '../components/ProjectGallery'

const MotionBox = motion(Box)
const MotionCard = motion(Card)

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const sectionBg = useColorModeValue('gray.50', 'gray.900')

  if (!project) {
    return (
      <Box pt={20} minH="100vh">
        <Container maxW="7xl" py={20}>
          <Stack spacing={8} align="center">
            <Heading>Project Not Found</Heading>
            <Button as={RouterLink} to="/projects" leftIcon={<FaArrowLeft />}>
              Back to Projects
            </Button>
          </Stack>
        </Container>
      </Box>
    )
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Project Details | NitishBuilds</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <Box pt={20} minH="100vh">
        <Container maxW="6xl" py={12}>
          <Stack spacing={12}>
            {/* Header Section */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={6}>
                <Button
                  as={RouterLink}
                  to="/projects"
                  leftIcon={<FaArrowLeft />}
                  variant="ghost"
                  alignSelf="flex-start"
                  mb={4}
                >
                  Back to Projects
                </Button>

                <Stack spacing={4}>
                  <HStack justify="space-between" align="start" flexWrap="wrap">
                    <Stack spacing={2} flex={1}>
                      <Heading size="xl">{project.title}</Heading>
                      <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
                        {project.shortDescription}
                      </Text>
                    </Stack>
                    
                    {project.featured && (
                      <Badge colorScheme="brand" variant="solid" p={2}>
                        Featured Project
                      </Badge>
                    )}
                  </HStack>

                  <HStack spacing={6} flexWrap="wrap">
                    <HStack>
                      <Icon as={FaClock} color="brand.400" />
                      <Text fontSize="sm">{project.duration}</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaUsers} color="brand.400" />
                      <Text fontSize="sm">{project.teamSize}</Text>
                    </HStack>
                    <Badge colorScheme="purple" variant="outline">
                      {project.category}
                    </Badge>
                  </HStack>

                  <HStack spacing={4}>
                    {project.githubUrl && (
                      <Button
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<Icon as={FaGithub} />}
                        variant="outline"
                      >
                        View Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        as="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<Icon as={FaExternalLinkAlt} />}
                        colorScheme="brand"
                      >
                        Live Demo
                      </Button>
                    )}
                  </HStack>
                </Stack>
              </Stack>
            </MotionBox>

            {/* Technologies Used */}
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
                <Stack spacing={4}>
                  <HStack>
                    <Icon as={FaTools} color="brand.400" boxSize={5} />
                    <Heading size="md">Technologies Used</Heading>
                  </HStack>
                  <HStack flexWrap="wrap" spacing={2}>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" colorScheme="brand" p={2}>
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Stack>
              </CardBody>
            </MotionCard>

            {/* Project Gallery */}
            {(project.id === 1 || project.id === 4 || project.id === 5) && (
              <MotionCard
                bg={cardBg}
                border="1px"
                borderColor={borderColor}
                borderRadius="xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <CardBody p={8}>
                  <Stack spacing={6}>
                    <HStack>
                      <Icon as={FaImages} color="brand.400" boxSize={5} />
                      <Heading size="md">Project Screenshots</Heading>
                    </HStack>
                    <ProjectGallery projectId={project.id} projectTitle={project.title} />
                  </Stack>
                </CardBody>
              </MotionCard>
            )}

            {/* Problem → Solution → Architecture Flow */}
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8}>
              <MotionCard
                bg={cardBg}
                border="1px"
                borderColor={borderColor}
                borderRadius="xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <CardBody p={8}>
                  <Stack spacing={4}>
                    <Heading size="md" color="red.400">Problem</Heading>
                    <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                      {project.problem}
                    </Text>
                  </Stack>
                </CardBody>
              </MotionCard>

              <MotionCard
                bg={cardBg}
                border="1px"
                borderColor={borderColor}
                borderRadius="xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <CardBody p={8}>
                  <Stack spacing={4}>
                    <Heading size="md" color="green.400">Solution</Heading>
                    <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                      {project.solution}
                    </Text>
                  </Stack>
                </CardBody>
              </MotionCard>

              <MotionCard
                bg={cardBg}
                border="1px"
                borderColor={borderColor}
                borderRadius="xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <CardBody p={8}>
                  <Stack spacing={4}>
                    <Heading size="md" color="blue.400">Architecture</Heading>
                    <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                      {project.architecture}
                    </Text>
                  </Stack>
                </CardBody>
              </MotionCard>
            </SimpleGrid>

            {/* Features & Impact */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
              <MotionCard
                bg={cardBg}
                border="1px"
                borderColor={borderColor}
                borderRadius="xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <CardBody p={8}>
                  <Stack spacing={6}>
                    <Heading size="md" color="brand.400">Key Features</Heading>
                    <List spacing={3}>
                      {project.features.map((feature, index) => (
                        <ListItem key={index}>
                          <ListIcon as={FaCheckCircle} color="green.400" />
                          <Text as="span" color={useColorModeValue('gray.600', 'gray.300')}>
                            {feature}
                          </Text>
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </CardBody>
              </MotionCard>

              <MotionCard
                bg={cardBg}
                border="1px"
                borderColor={borderColor}
                borderRadius="xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <CardBody p={8}>
                  <Stack spacing={6}>
                    <Heading size="md" color="purple.400">Impact & Results</Heading>
                    <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                      {project.impact}
                    </Text>
                  </Stack>
                </CardBody>
              </MotionCard>
            </SimpleGrid>

            {/* Challenges & Learnings */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
              <MotionCard
                bg={cardBg}
                border="1px"
                borderColor={borderColor}
                borderRadius="xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <CardBody p={8}>
                  <Stack spacing={6}>
                    <HStack>
                      <Icon as={FaLightbulb} color="orange.400" boxSize={5} />
                      <Heading size="md">Challenges Overcome</Heading>
                    </HStack>
                    <List spacing={3}>
                      {project.challenges?.map((challenge, index) => (
                        <ListItem key={index}>
                          <ListIcon as={FaCheckCircle} color="orange.400" />
                          <Text as="span" color={useColorModeValue('gray.600', 'gray.300')}>
                            {challenge}
                          </Text>
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </CardBody>
              </MotionCard>

              <MotionCard
                bg={cardBg}
                border="1px"
                borderColor={borderColor}
                borderRadius="xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <CardBody p={8}>
                  <Stack spacing={6}>
                    <HStack>
                      <Icon as={FaLightbulb} color="green.400" boxSize={5} />
                      <Heading size="md">Key Learnings</Heading>
                    </HStack>
                    <List spacing={3}>
                      {project.learnings?.map((learning, index) => (
                        <ListItem key={index}>
                          <ListIcon as={FaCheckCircle} color="green.400" />
                          <Text as="span" color={useColorModeValue('gray.600', 'gray.300')}>
                            {learning}
                          </Text>
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </CardBody>
              </MotionCard>
            </SimpleGrid>

            {/* Project Description */}
            <MotionCard
              bg={cardBg}
              border="1px"
              borderColor={borderColor}
              borderRadius="xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <CardBody p={8}>
                <Stack spacing={6}>
                  <Heading size="md" color="brand.400">Project Overview</Heading>
                  <Text color={useColorModeValue('gray.600', 'gray.300')} lineHeight="tall">
                    {project.description}
                  </Text>
                </Stack>
              </CardBody>
            </MotionCard>

            {/* Call to Action */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Card bg={sectionBg} border="1px" borderColor={borderColor} borderRadius="xl">
                <CardBody p={8}>
                  <Stack spacing={6} align="center" textAlign="center">
                    <Heading size="md">Interested in Similar Solutions?</Heading>
                    <Text color={useColorModeValue('gray.600', 'gray.300')} maxW="2xl">
                      I can help you build scalable, modern applications using the latest technologies. 
                      Let's discuss your project requirements and create something amazing together.
                    </Text>
                    <HStack spacing={4}>
                      <Button
                        as={RouterLink}
                        to="/contact"
                        size="lg"
                        variant="gradient"
                      >
                        Start a Project
                      </Button>
                      <Button
                        as={RouterLink}
                        to="/projects"
                        size="lg"
                        variant="outline"
                      >
                        View More Projects
                      </Button>
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>
            </MotionBox>
          </Stack>
        </Container>
      </Box>
    </>
  )
}