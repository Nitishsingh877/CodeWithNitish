import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'

export default function BlogPost() {
  return (
    <>
      <Helmet>
        <title>Blog Post - NitishBuilds</title>
      </Helmet>
      <Box pt={20} minH="100vh">
        <Container maxW="7xl" py={20}>
          <Heading>Blog Post</Heading>
          <Text>Coming soon...</Text>
        </Container>
      </Box>
    </>
  )
}