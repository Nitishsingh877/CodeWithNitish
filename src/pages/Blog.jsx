import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Badge,
  HStack,
  VStack,
  Image,
  Button,
  useColorModeValue,
  Input,
  Select,
  Flex,
} from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogs } from '../data/portfolioData'
import { useState, useMemo } from 'react'
import { SearchIcon } from '@chakra-ui/icons'

const MotionCard = motion(Card)

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTag, setSelectedTag] = useState('All')

  // Get unique categories and tags
  const categories = ['All', ...new Set(blogs.map(b => b.category))]
  const allTags = ['All', ...new Set(blogs.flatMap(b => b.tags))]

  // Filter blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory
      const matchesTag = selectedTag === 'All' || blog.tags.includes(selectedTag)
      return matchesSearch && matchesCategory && matchesTag
    })
  }, [searchTerm, selectedCategory, selectedTag])

  const bgCard = useColorModeValue('white', 'gray.800')
  const bgHover = useColorModeValue('gray.50', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <>
      <Helmet>
        <title>Blog - NitishBuilds | Technical Articles & Insights</title>
        <meta name="description" content="Explore technical articles on Spring Boot, Distributed Systems, AI/ML, and Enterprise Architecture" />
      </Helmet>
      <Box pt={20} minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="7xl" py={20}>
          {/* Header */}
          <VStack spacing={4} mb={16} align="start" w="full">
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, brand.400, accent.500)"
              bgClip="text"
              mb={2}
            >
              Technical Blog
            </Heading>
            <Text fontSize="lg" color="gray.500" maxW="2xl">
              Deep dives into Spring Boot, Distributed Systems, AI/ML, and Enterprise Architecture. 
              Practical insights from real-world experience.
            </Text>
          </VStack>

          {/* Filters Section */}
          <Box mb={12} p={6} bg={bgCard} rounded="xl" borderWidth="1px" borderColor={borderColor}>
            <VStack spacing={4} align="start" w="full">
              <Heading size="sm" mb={2}>Filter & Search</Heading>

              {/* Search Box */}
              <Box w="full" position="relative">
                <SearchIcon position="absolute" left={3} top="50%" transform="translateY(-50%)" color="gray.400" />
                <Input
                  placeholder="Search articles..."
                  pl={10}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  rounded="lg"
                  border="1px"
                  borderColor={borderColor}
                  _focus={{ borderColor: 'brand.400', boxShadow: '0 0 0 1px var(--chakra-colors-brand-400)' }}
                />
              </Box>

              {/* Category & Tag Filters */}
              <HStack spacing={4} w="full" flexWrap="wrap">
                <VStack spacing={2} flex="1" minW="150px" align="start">
                  <Text fontSize="sm" fontWeight="bold" color="gray.600">Category</Text>
                  <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    size="sm"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </Select>
                </VStack>

                <VStack spacing={2} flex="1" minW="150px" align="start">
                  <Text fontSize="sm" fontWeight="bold" color="gray.600">Tag</Text>
                  <Select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    size="sm"
                  >
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </Select>
                </VStack>
              </HStack>

              <Text fontSize="sm" color="gray.500" mt={2}>
                Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
              </Text>
            </VStack>
          </Box>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8} w="full">
              {filteredBlogs.map((blog, index) => (
                <MotionCard
                  key={blog.id}
                  as={RouterLink}
                  to={`/blog/${blog.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  overflow="hidden"
                  bg={bgCard}
                  border="1px"
                  borderColor={borderColor}
                  _hover={{
                    bg: bgHover,
                    borderColor: 'brand.400',
                    boxShadow: 'lg',
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease',
                  }}
                  cursor="pointer"
                  _active={{ transform: 'translateY(-2px)' }}
                >
                  {/* Blog Image */}
                  <Box h="200px" overflow="hidden" position="relative">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      _groupHover={{ transform: 'scale(1.05)', transition: 'transform 0.3s' }}
                    />
                    <Badge
                      position="absolute"
                      top={4}
                      right={4}
                      colorScheme={blog.category === 'Spring Boot' ? 'green' : blog.category === 'AI/ML' ? 'purple' : 'blue'}
                      rounded="full"
                    >
                      {blog.category}
                    </Badge>
                  </Box>

                  <CardHeader pb={3}>
                    <VStack align="start" spacing={3} w="full">
                      <Heading size="md" color="brand.400" noOfLines={2}>
                        {blog.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.500" noOfLines={2}>
                        {blog.shortDescription}
                      </Text>
                    </VStack>
                  </CardHeader>

                  <CardBody pt={0}>
                    <VStack align="start" spacing={4} w="full">
                      {/* Tags */}
                      <HStack spacing={2} flexWrap="wrap">
                        {blog.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="subtle" fontSize="xs">
                            {tag}
                          </Badge>
                        ))}
                        {blog.tags.length > 3 && (
                          <Badge variant="subtle" fontSize="xs">
                            +{blog.tags.length - 3}
                          </Badge>
                        )}
                      </HStack>

                      {/* Meta Info */}
                      <HStack justify="space-between" w="full" fontSize="xs" color="gray.500">
                        <Text>{blog.publishedDate}</Text>
                        <Text>{blog.readTime}</Text>
                      </HStack>
                    </VStack>
                  </CardBody>
                </MotionCard>
              ))}
            </SimpleGrid>
          ) : (
            <Box textAlign="center" py={20}>
              <Heading size="md" mb={4} color="gray.500">
                No articles found
              </Heading>
              <Text color="gray.500" mb={6}>
                Try adjusting your search or filter criteria
              </Text>
              <Button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                  setSelectedTag('All')
                }}
                colorScheme="brand"
              >
                Reset Filters
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </>
  )
}