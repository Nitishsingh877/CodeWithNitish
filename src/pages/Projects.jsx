import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Badge,
  Button,
  HStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { projects } from '../data/portfolioData'

const MotionCard = motion(Card)

export default function Projects() {
  const [projectList, setProjectList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Using static data instead of API
    setProjectList(projects)
    setLoading(false)
  }, [])

  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  if (loading) {
    return (
      <Box pt={20} minH="100vh">
        <Container maxW="7xl" py={20}>
          <Text textAlign="center">Loading projects...</Text>
        </Container>
      </Box>
    )
  }

  return (
    <>
      <Helmet>
        <title>Projects - Nitish Singh | NitishBuilds</title>
        <meta name="description" content="Explore my portfolio of full-stack applications, AI-powered solutions, and microservices projects built with Java Spring Boot and React." />
      </Helmet>

      <Box pt={20} minH="100vh">
        <Container maxW="7xl" py={20}>
          <Stack spacing={12}>
            <Stack spacing={4} align="center" textAlign="center">
              <Heading size="xl">My Projects</Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="2xl"
              >
                A collection of full-stack applications, AI-powered solutions, and 
                enterprise-grade systems I've built using modern technologies.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {projectList.map((project, index) => (
                <MotionCard
                  key={project.id}
                  bg={cardBg}
                  border="1px"
                  borderColor={borderColor}
                  borderRadius="xl"
                  overflow="hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  _hover={{
                    boxShadow: useColorModeValue(
                      '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                    ),
                  }}
                >
                  <CardBody p={6}>
                    <Stack spacing={4}>
                      {project.imageUrl ? (
                        <Box
                          h="200px"
                          bg={useColorModeValue('gray.100', 'gray.700')}
                          borderRadius="md"
                          overflow="hidden"
                        >
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </Box>
                      ) : (
                        <Box
                          h="200px"
                          bg={useColorModeValue('gray.100', 'gray.700')}
                          borderRadius="md"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize="sm">
                            Images Coming Soon
                          </Text>
                        </Box>
                      )}

                      <HStack justify="space-between" align="start">
                        <Heading size="md" noOfLines={2}>
                          {project.title}
                        </Heading>
                        {project.featured && (
                          <Badge colorScheme="brand" variant="solid">
                            Featured
                          </Badge>
                        )}
                      </HStack>

                      <Text
                        color={useColorModeValue('gray.600', 'gray.300')}
                        noOfLines={3}
                      >
                        {project.description}
                      </Text>

                      <HStack flexWrap="wrap" spacing={2}>
                        {project.technologies?.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" fontSize="xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies?.length > 3 && (
                          <Badge variant="outline" fontSize="xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </HStack>

                      <HStack spacing={3} pt={2}>
                        <Button
                          as={RouterLink}
                          to={`/projects/${project.id}`}
                          size="sm"
                          variant="solid"
                          colorScheme="brand"
                          flex={1}
                        >
                          View Details
                        </Button>
                        
                        {project.githubUrl && (
                          <Button
                            as="a"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                            variant="outline"
                            leftIcon={<Icon as={FaGithub} />}
                          >
                            Code
                          </Button>
                        )}
                        
                        {project.liveUrl && (
                          <Button
                            as="a"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="sm"
                            variant="outline"
                            leftIcon={<Icon as={FaExternalLinkAlt} />}
                          >
                            Live
                          </Button>
                        )}
                      </HStack>
                    </Stack>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  )
}