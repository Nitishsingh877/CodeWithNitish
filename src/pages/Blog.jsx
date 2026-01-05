import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - NitishBuilds</title>
      </Helmet>
      <Box pt={20} minH="100vh">
        <Container maxW="7xl" py={20}>
          <Heading>Blog</Heading>
          <Text>Coming soon - Technical articles and insights...</Text>
        </Container>
      </Box>
    </>
  )
}

export function BlogPost() {
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