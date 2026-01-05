import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  SimpleGrid,
  useColorModeValue,
  Card,
  CardBody,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { personalInfo } from '../data/portfolioData'

const MotionCard = motion(Card)

export default function Contact() {
  const cardBg = useColorModeValue('white', 'gray.800')

  return (
    <>
      <Helmet>
        <title>Contact - Nitish Singh | NitishBuilds</title>
        <meta name="description" content="Get in touch with Nitish Singh for Java full-stack development, Spring Boot microservices, or AI-powered application projects." />
      </Helmet>

      <Box pt={20} minH="100vh">
        <Container maxW="4xl" py={20}>
          <MotionCard
            bg={cardBg}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CardBody p={8}>
              <Stack spacing={8}>
                <Stack spacing={4} align="center" textAlign="center">
                  <Heading size="xl">Let's Work Together</Heading>
                  <Text
                    fontSize="lg"
                    color={useColorModeValue('gray.600', 'gray.300')}
                    maxW="2xl"
                  >
                    Have a project in mind? Looking for a Java full-stack developer? 
                    I'd love to hear from you and discuss how we can bring your ideas to life.
                  </Text>
                </Stack>

                <Stack spacing={6}>
                  <Text fontSize="lg" textAlign="center" color={useColorModeValue('gray.600', 'gray.300')}>
                    Ready to start your project? Let's connect directly!
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Button
                      as="a"
                      href={`mailto:${personalInfo.email}?subject=Project Inquiry&body=Hi Nitish,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0AProject Details:%0D%0A- Type: %0D%0A- Timeline: %0D%0A- Budget: %0D%0A%0D%0ABest regards`}
                      size="lg"
                      colorScheme="brand"
                      leftIcon={<Text>📧</Text>}
                      h="80px"
                      flexDirection="column"
                    >
                      <Text fontWeight="bold">Email Me</Text>
                      <Text fontSize="sm">{personalInfo.email}</Text>
                    </Button>

                    <Button
                      as="a"
                      href={`tel:${personalInfo.phone}`}
                      size="lg"
                      variant="outline"
                      colorScheme="brand"
                      leftIcon={<Text>📱</Text>}
                      h="80px"
                      flexDirection="column"
                    >
                      <Text fontWeight="bold">Call Me</Text>
                      <Text fontSize="sm">{personalInfo.phone}</Text>
                    </Button>
                  </SimpleGrid>

                  <Text fontSize="sm" textAlign="center" color={useColorModeValue('gray.500', 'gray.400')}>
                    Available Monday to Friday, 9 AM - 6 PM IST
                  </Text>
                </Stack>

                <Stack spacing={2} align="center" pt={4}>
                  <Text color={useColorModeValue('gray.600', 'gray.300')}>
                    Or reach me directly:
                  </Text>
                  <Text fontWeight="bold" color="brand.400">
                    📧 {personalInfo.email}
                  </Text>
                  <Text fontWeight="bold" color="brand.400">
                    📱 {personalInfo.phone}
                  </Text>
                </Stack>
              </Stack>
            </CardBody>
          </MotionCard>
        </Container>
      </Box>
    </>
  )
}