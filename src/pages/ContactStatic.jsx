import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  useColorModeValue,
  Card,
  CardBody,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const MotionCard = motion(Card)

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    setTimeout(() => {
      // Create mailto link with form data
      const subject = encodeURIComponent(data.subject || 'Portfolio Contact')
      const body = encodeURIComponent(
        `Hi Nitish,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}\n\nBest regards,\n${data.name}`
      )
      const mailtoLink = `mailto:nitishkumarsingh877@gmail.com?subject=${subject}&body=${body}`
      
      // Open email client
      window.open(mailtoLink, '_blank')
      
      setSubmitStatus({
        type: 'success',
        message: 'Email client opened! Your message has been prepared for sending.'
      })
      reset()
      setIsSubmitting(false)
    }, 500)
  }

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

                {submitStatus && (
                  <Alert status={submitStatus.type} borderRadius="md">
                    <AlertIcon />
                    {submitStatus.message}
                  </Alert>
                )}

                <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                  <Stack spacing={6}>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                      <FormControl isRequired isInvalid={errors.name}>
                        <FormLabel>Name</FormLabel>
                        <Input
                          {...register('name', {
                            required: 'Name is required',
                            minLength: { value: 2, message: 'Name must be at least 2 characters' }
                          })}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <Text color="red.500" fontSize="sm" mt={1}>
                            {errors.name.message}
                          </Text>
                        )}
                      </FormControl>

                      <FormControl isRequired isInvalid={errors.email}>
                        <FormLabel>Email</FormLabel>
                        <Input
                          type="email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Please enter a valid email'
                            }
                          })}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <Text color="red.500" fontSize="sm" mt={1}>
                            {errors.email.message}
                          </Text>
                        )}
                      </FormControl>
                    </Stack>

                    <FormControl>
                      <FormLabel>Subject</FormLabel>
                      <Input
                        {...register('subject')}
                        placeholder="Project inquiry, collaboration, etc."
                      />
                    </FormControl>

                    <FormControl isRequired isInvalid={errors.message}>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        {...register('message', {
                          required: 'Message is required',
                          minLength: { value: 10, message: 'Message must be at least 10 characters' }
                        })}
                        placeholder="Tell me about your project, requirements, timeline, etc."
                        rows={6}
                        resize="vertical"
                      />
                      {errors.message && (
                        <Text color="red.500" fontSize="sm" mt={1}>
                          {errors.message.message}
                        </Text>
                      )}
                    </FormControl>

                    <Button
                      type="submit"
                      size="lg"
                      variant="gradient"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      _hover={{ transform: 'translateY(-2px)' }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>

                <Stack spacing={2} align="center" pt={4}>
                  <Text color={useColorModeValue('gray.600', 'gray.300')}>
                    Or reach me directly:
                  </Text>
                  <Text fontWeight="bold" color="brand.400">
                    📧 nitishkumarsingh877@gmail.com
                  </Text>
                  <Text fontWeight="bold" color="brand.400">
                    📱 +91 9546513459
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