import { Box, Container, SimpleGrid, Text, Flex, Badge, LinkOverlay, LinkBox, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../Shared/SectionHeading';
import { blogs } from '../../data/portfolioData';
import { FaSearch, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { useState } from 'react';

const MotionLinkBox = motion(LinkBox);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box id="blog" py={24} bg="blackAlpha.50">
      <Container maxW="6xl">
        <SectionHeading 
          title="Writing & Insights" 
          subtitle="Thoughts on software engineering, AI, and cloud architecture." 
        />

        <Flex justify="center" mb={12}>
          <InputGroup maxW="md">
            <InputLeftElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputLeftElement>
            <Input 
              placeholder="Search articles..." 
              bg="white" 
              borderRadius="full" 
              focusBorderColor="brand.highlight"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredBlogs.map((blog, idx) => (
            <MotionLinkBox
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="sm"
              border="1px solid"
              borderColor="blackAlpha.50"
              _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
              display="flex"
              flexDirection="column"
            >
              <Box h="200px" bg="gray.200" position="relative" overflow="hidden">
                <Box
                  as="img"
                  src={blog.image || 'https://via.placeholder.com/400x200'}
                  alt={blog.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.05)' }}
                />
                <Badge position="absolute" top={4} left={4} bg="brand.highlight" color="white" px={3} py={1} borderRadius="full">
                  {blog.category}
                </Badge>
              </Box>
              
              <Box p={6} flex={1} display="flex" flexDirection="column">
                <Flex gap={4} color="gray.500" fontSize="sm" mb={3}>
                  <Flex align="center" gap={1}>
                    <FaCalendarAlt /> {new Date(blog.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </Flex>
                  <Flex align="center" gap={1}>
                    <FaClock /> {blog.readTime}
                  </Flex>
                </Flex>
                
                <Text fontSize="xl" fontWeight="bold" fontFamily="heading" color="brand.accent" mb={3}>
                  <LinkOverlay as={RouterLink} to={`/blog/${blog.slug}`}>
                    {blog.title}
                  </LinkOverlay>
                </Text>
                
                <Text color="brand.text" fontSize="sm" mb={4} flex={1}>
                  {blog.shortDescription}
                </Text>
              </Box>
            </MotionLinkBox>
          ))}
        </SimpleGrid>
        
        {filteredBlogs.length === 0 && (
          <Text textAlign="center" color="gray.500" mt={8}>No articles found matching your search.</Text>
        )}
      </Container>
    </Box>
  );
};

export default Blog;
