import { Box, Container, SimpleGrid, Flex, Text, Image, HStack, Badge, Button, Icon, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../Shared/SectionHeading';
import { projects } from '../../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const MotionLinkBox = motion(LinkBox);

const MotionBox = motion(Box);

const Projects = () => {
  return (
    <Box id="projects" py={24} bg="white">
      <Container maxW="7xl">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Case studies showcasing my problem-solving approach and technical execution." 
        />
        
        <Flex direction="column" gap={20} mt={16}>
          {projects.filter(p => p.featured).map((project, idx) => (
            <Flex 
              key={project.id} 
              direction={{ base: 'column', lg: idx % 2 === 0 ? 'row' : 'row-reverse' }}
              gap={12}
              alignItems="center"
            >
              <MotionBox
                flex={1}
                w="full"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="2xl"
                _hover={{ '& > img': { transform: 'scale(1.05)' } }}
              >
                <Image 
                  src={project.imageUrl || 'https://via.placeholder.com/800x600'} 
                  alt={project.title}
                  objectFit="cover"
                  w="full"
                  h={{ base: '300px', md: '450px' }}
                  transition="transform 0.5s ease"
                />
                <Box position="absolute" top={4} right={4}>
                  <Badge colorScheme="yellow" bg="brand.highlight" color="white" px={3} py={1} borderRadius="full" fontSize="xs">
                    {project.category}
                  </Badge>
                </Box>
              </MotionBox>

              <MotionBox
                flex={1}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Text fontSize="3xl" fontFamily="heading" color="brand.accent" fontWeight="bold" mb={4}>
                  {project.title}
                </Text>
                
                <Box bg="blackAlpha.50" p={6} borderRadius="xl" mb={6} borderLeft="4px solid" borderColor="brand.highlight">
                  <Text color="brand.text" mb={2}><strong>Problem:</strong> {project.problem}</Text>
                  <Text color="brand.text"><strong>Solution:</strong> {project.solution}</Text>
                </Box>

                <HStack flexWrap="wrap" gap={2} mb={6}>
                  {project.technologies.slice(0, 6).map(tech => (
                    <Badge key={tech} variant="subtle" colorScheme="gray" px={2} py={1} borderRadius="md" color="brand.secondary" bg="white" border="1px solid" borderColor="blackAlpha.200">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 6 && (
                     <Badge variant="subtle" colorScheme="gray" px={2} py={1} borderRadius="md" color="brand.secondary" bg="white" border="1px solid" borderColor="blackAlpha.200">
                     +{project.technologies.length - 6} more
                   </Badge>
                  )}
                </HStack>

                <HStack spacing={4}>
                  {project.githubUrl && (
                    <Button 
                      as="a" 
                      href={project.githubUrl} 
                      target="_blank" 
                      variant="outline" 
                      leftIcon={<FaGithub />}
                      size="md"
                    >
                      Source Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      as="a" 
                      href={project.liveUrl} 
                      target="_blank" 
                      variant="solid" 
                      leftIcon={<FaExternalLinkAlt />}
                      size="md"
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button
                    as={RouterLink}
                    to={`/projects/${project.id}`}
                    variant="solid"
                    bg="brand.accent"
                    color="white"
                    _hover={{ bg: "brand.secondary" }}
                    size="md"
                    rightIcon={<FaArrowRight />}
                  >
                    View Details
                  </Button>
                </HStack>
              </MotionBox>
            </Flex>
          ))}
        </Flex>

        {/* Other Projects Grid */}
        <Box mt={32}>
          <Text fontSize="2xl" fontFamily="heading" color="brand.accent" mb={8} textAlign="center">
            Other Notable Projects
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {projects.filter(p => !p.featured).map((project, idx) => (
              <MotionLinkBox
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                bg="white"
                p={6}
                borderRadius="xl"
                boxShadow="sm"
                border="1px solid"
                borderColor="blackAlpha.100"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'md', borderColor: 'brand.highlight' }}
                display="flex"
                flexDirection="column"
              >
                <Flex justify="space-between" align="center" mb={4}>
                  <Icon as={FaGithub} boxSize={6} color="brand.secondary" />
                  <HStack>
                    {project.liveUrl && <Icon as={FaExternalLinkAlt} color="brand.highlight" cursor="pointer" onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }} />}
                  </HStack>
                </Flex>
                <Text fontSize="xl" fontWeight="bold" color="brand.accent" mb={2}>
                  <LinkOverlay as={RouterLink} to={`/projects/${project.id}`}>
                    {project.title}
                  </LinkOverlay>
                </Text>
                <Text color="brand.text" fontSize="sm" mb={6} flex={1}>
                  {project.shortDescription}
                </Text>
                <HStack flexWrap="wrap" gap={2}>
                  {project.technologies.slice(0, 3).map(tech => (
                    <Text key={tech} fontSize="xs" color="brand.secondary" fontFamily="mono">
                      {tech}
                    </Text>
                  ))}
                </HStack>
              </MotionLinkBox>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
