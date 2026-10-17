import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Divider,
  Image,
  useColorModeValue,
  Avatar,
  Link,
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom'
import { blogs } from '../data/portfolioData'
import { motion } from 'framer-motion'
import { ArrowBackIcon, TimeIcon, CalendarIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const blog = blogs.find(b => b.slug === slug)

  if (!blog) {
    return (
      <>
        <Helmet>
          <title>Blog Post Not Found - NitishBuilds</title>
        </Helmet>
        <Box pt={20} minH="100vh" display="flex" alignItems="center" justifyContent="center">
          <Container maxW="2xl" textAlign="center" py={20}>
            <Heading mb={4} size="xl">Article Not Found</Heading>
            <Text mb={8} color="gray.500">
              The article you're looking for doesn't exist or has been removed.
            </Text>
            <Button
              as={RouterLink}
              to="/blog"
              leftIcon={<ArrowBackIcon />}
              colorScheme="brand"
              size="lg"
            >
              Back to Blog
            </Button>
          </Container>
        </Box>
      </>
    )
  }

  const bgGradient = useColorModeValue(
    'linear(to-r, brand.50, accent.50)',
    'linear(to-r, gray.800, gray.900)'
  )
  const contentBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  // Get related blogs (same category)
  const relatedBlogs = blogs
    .filter(b => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{blog.title} - NitishBuilds</title>
        <meta name="description" content={blog.shortDescription} />
        <meta name="keywords" content={blog.tags.join(', ')} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.shortDescription} />
        <meta property="og:image" content={blog.image} />
      </Helmet>

      <Box pt={20} minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
        {/* Hero Section */}
        <Box bg={bgGradient} py={12} borderBottom="1px" borderColor={borderColor}>
          <Container maxW="4xl">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                leftIcon={<ArrowBackIcon />}
                variant="ghost"
                mb={6}
                onClick={() => navigate('/blog')}
              >
                Back to Blog
              </Button>

              <Badge colorScheme="brand" mb={4} fontSize="md" p={2}>
                {blog.category}
              </Badge>

              <Heading as="h1" size="2xl" mb={6} lineHeight="tall">
                {blog.title}
              </Heading>

              <Text fontSize="lg" color="gray.600" mb={6}>
                {blog.shortDescription}
              </Text>

              {/* Author & Meta Info */}
              <HStack spacing={6} mb={6} flexWrap="wrap">
                <HStack spacing={3}>
                  <Avatar name={blog.author} size="sm" />
                  <VStack spacing={0} align="start">
                    <Text fontWeight="bold" fontSize="sm">
                      {blog.author}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      Nitish Singh
                    </Text>
                  </VStack>
                </HStack>

                <HStack spacing={4} fontSize="sm" color="gray.600" flexWrap="wrap">
                  <HStack spacing={2}>
                    <CalendarIcon />
                    <Text>{new Date(blog.publishedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</Text>
                  </HStack>
                  <HStack spacing={2}>
                    <TimeIcon />
                    <Text>{blog.readTime}</Text>
                  </HStack>
                </HStack>
              </HStack>
            </MotionBox>
          </Container>
        </Box>

        {/* Featured Image */}
        <Box maxW="4xl" mx="auto" px={4} py={12}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              rounded="xl"
              boxShadow="lg"
              w="100%"
              h="auto"
              objectFit="cover"
            />
          </MotionBox>
        </Box>

        {/* Content */}
        <Container maxW="4xl" py={12}>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            bg={contentBg}
            p={8}
            rounded="xl"
            borderWidth="1px"
            borderColor={borderColor}
            className="blog-content"
            sx={{
              '& h1, & h2, & h3': {
                mt: 6,
                mb: 4,
                fontWeight: 'bold',
                color: 'brand.400',
              },
              '& h1': { fontSize: '2xl' },
              '& h2': { fontSize: '1.5xl' },
              '& h3': { fontSize: '1.25xl' },
              '& p': {
                mb: 4,
                lineHeight: 1.8,
              },
              '& ul, & ol': {
                pl: 6,
                mb: 4,
                '& li': {
                  mb: 2,
                  lineHeight: 1.8,
                },
              },
              '& code': {
                bg: useColorModeValue('gray.100', 'gray.900'),
                px: 2,
                py: 1,
                rounded: 'md',
                fontFamily: 'monospace',
                fontSize: '0.9em',
              },
              '& pre': {
                bg: useColorModeValue('gray.100', 'gray.900'),
                p: 4,
                rounded: 'lg',
                overflow: 'auto',
                mb: 4,
                '& code': {
                  bg: 'none',
                  px: 0,
                  py: 0,
                },
              },
              '& blockquote': {
                borderLeft: '4px solid',
                borderColor: 'brand.400',
                pl: 4,
                py: 2,
                my: 4,
                fontStyle: 'italic',
                color: 'gray.600',
              },
              '& table': {
                width: '100%',
                borderCollapse: 'collapse',
                mb: 4,
                '& th, & td': {
                  border: '1px solid',
                  borderColor: borderColor,
                  p: 3,
                  textAlign: 'left',
                },
                '& th': {
                  bg: useColorModeValue('gray.100', 'gray.900'),
                  fontWeight: 'bold',
                },
              },
              '& a': {
                color: 'brand.400',
                textDecoration: 'underline',
                _hover: {
                  color: 'brand.500',
                },
              },
            }}
            dangerouslySetInnerHTML={{
              __html: blog.content
                .split('\n')
                .map(line => {
                  if (line.match(/^# /)) {
                    return `<h1>${line.replace('# ', '')}</h1>`
                  }
                  if (line.match(/^## /)) {
                    return `<h2>${line.replace('## ', '')}</h2>`
                  }
                  if (line.match(/^### /)) {
                    return `<h3>${line.replace('### ', '')}</h3>`
                  }
                  if (line.match(/^- /)) {
                    return `<li>${line.replace('- ', '')}</li>`
                  }
                  if (line.match(/^\d+\. /)) {
                    return `<li>${line.replace(/^\d+\. /, '')}</li>`
                  }
                  if (line.match(/^\`\`\`/)) {
                    return '<pre><code>'
                  }
                  if (line.trim() === '') {
                    return '</p><p>'
                  }
                  return line
                })
                .join('\n')
                .replace(/\`([^`]+)\`/g, '<code>$1</code>')
                .replace(/<li>.*?<\/li>/gs, match => `<ul>${match}</ul>`)
            }}
          />
        </Container>

        {/* Tags */}
        <Container maxW="4xl" py={8}>
          <VStack align="start" spacing={4}>
            <Heading size="sm">Tags</Heading>
            <HStack spacing={2} flexWrap="wrap">
              {blog.tags.map(tag => (
                <Badge key={tag} variant="outline" colorScheme="brand" fontSize="sm" p={2}>
                  {tag}
                </Badge>
              ))}
            </HStack>
          </VStack>
        </Container>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <>
            <Divider my={12} />
            <Container maxW="4xl" py={12}>
              <Heading size="lg" mb={8}>Related Articles</Heading>
              <VStack spacing={4}>
                {relatedBlogs.map(relatedBlog => (
                  <Box
                    key={relatedBlog.id}
                    as={RouterLink}
                    to={`/blog/${relatedBlog.slug}`}
                    w="full"
                    p={4}
                    bg={contentBg}
                    rounded="lg"
                    border="1px"
                    borderColor={borderColor}
                    _hover={{
                      borderColor: 'brand.400',
                      boxShadow: 'md',
                    }}
                    transition="all 0.3s"
                  >
                    <HStack spacing={4} align="start">
                      <Image
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        w="120px"
                        h="80px"
                        objectFit="cover"
                        rounded="md"
                        display={{ base: 'none', sm: 'block' }}
                      />
                      <VStack align="start" flex={1} spacing={1}>
                        <Heading size="sm" noOfLines={2} color="brand.400">
                          {relatedBlog.title}
                        </Heading>
                        <Text fontSize="sm" color="gray.500" noOfLines={1}>
                          {relatedBlog.shortDescription}
                        </Text>
                        <Text fontSize="xs" color="gray.600">
                          {relatedBlog.readTime}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Container>
          </>
        )}

        {/* CTA Section */}
        <Box bg={bgGradient} py={16} mt={12} borderTop="1px" borderColor={borderColor}>
          <Container maxW="4xl" textAlign="center">
            <Heading size="lg" mb={6}>
              Enjoyed this article?
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={8}>
              Feel free to reach out on LinkedIn or GitHub to discuss more about technology and innovation.
            </Text>
            <HStack justify="center" spacing={4}>
              <Button
                as={Link}
                href="https://www.linkedin.com/in/nitishsingh191/"
                colorScheme="brand"
                size="lg"
                isExternal
              >
                Connect on LinkedIn
              </Button>
              <Button
                as={Link}
                href="https://github.com/Nitishsingh877"
                variant="outline"
                colorScheme="brand"
                size="lg"
                isExternal
              >
                View GitHub
              </Button>
            </HStack>
          </Container>
        </Box>
      </Box>
    </>
  )
}