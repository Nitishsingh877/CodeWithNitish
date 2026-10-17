import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
  Icon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FaCode, FaServer, FaRobot, FaCogs } from 'react-icons/fa'
import { services, personalInfo } from '../data/portfolioData'

const MotionCard = motion(Card)

const iconMap = {
  FaCode, FaServer, FaRobot, FaCogs
}

export default function Services() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <>
      <Helmet>
        <title>Services - Nitish Singh | NitishBuilds</title>
        <meta name="description" content="Professional Java full-stack development services including Spring Boot backends, React frontends, AI chatbots, and system integration." />
      </Helmet>

      <Box pt={20} minH="100vh">
        <Container maxW="7xl" py={20}>
          <Stack spacing={12}>
            <Stack spacing={4} align="center" textAlign="center">
              <Heading size="xl">Services I Offer</Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue('gray.600', 'gray.300')}
                maxW="2xl"
              >
                Comprehensive full-stack development services to help startups and 
                businesses build scalable, modern applications with cutting-edge technologies.
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {services.map((service, index) => (
                <MotionCard
                  key={service.title}
                  bg={cardBg}
                  border="1px"
                  borderColor={borderColor}
                  borderRadius="xl"
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
                  <CardBody p={8}>
                    <Stack spacing={6}>
                      <Stack spacing={4}>
                        <Icon
                          as={iconMap[service.icon]}
                          boxSize={12}
                          color="brand.400"
                        />
                        <Heading size="md">{service.title}</Heading>
                        <Text color={useColorModeValue('gray.600', 'gray.300')}>
                          {service.description}
                        </Text>
                      </Stack>

                      <Stack spacing={2}>
                        <Text fontWeight="bold" fontSize="sm" color="brand.400">
                          Key Features:
                        </Text>
                        {service.features.map((feature) => (
                          <Text
                            key={feature}
                            fontSize="sm"
                            color={useColorModeValue('gray.600', 'gray.300')}
                          >
                            • {feature}
                          </Text>
                        ))}
                      </Stack>
                      <Button
                        as="a"
                        href={`mailto:${personalInfo.email}?subject=Service Inquiry: ${service.title}&body=Hi Nitish,%0D%0A%0D%0AI'm interested in your ${service.title} service. Please let me know more details.%0D%0A%0D%0ABest regards`}
                        size="sm"
                        colorScheme="brand"
                        variant="outline"
                        mt={4}
                      >
                        Get Quote
                      </Button>
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