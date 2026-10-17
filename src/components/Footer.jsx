import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTop="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container maxW="7xl" py={8}>
        <Stack spacing={6}>
          <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <Text fontSize="lg" fontWeight="bold" color="brand.400">
              NitishBuilds
            </Text>
            
            <HStack spacing={4}>
              <IconButton
                as={Link}
                href="https://github.com/Nitishsingh877"
                isExternal
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                size="lg"
                _hover={{ color: 'brand.400', transform: 'translateY(-2px)' }}
              />
              <IconButton
                as={Link}
                href="https://www.linkedin.com/in/nitishsingh191/"
                isExternal
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                size="lg"
                _hover={{ color: 'brand.400', transform: 'translateY(-2px)' }}
              />
              <IconButton
                as={Link}
                href="https://leetcode.com/u/nitishkumarsingh877/"
                isExternal
                aria-label="LeetCode"
                icon={<SiLeetcode />}
                variant="ghost"
                size="lg"
                _hover={{ color: 'brand.400', transform: 'translateY(-2px)' }}
              />
              <IconButton
                as={Link}
                href="mailto:nitishkumarsingh877@gmail.com"
                aria-label="Email"
                icon={<FaEnvelope />}
                variant="ghost"
                size="lg"
                _hover={{ color: 'brand.400', transform: 'translateY(-2px)' }}
              />
            </HStack>
          </Stack>
          
          <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <Text fontSize="sm">
              © 2025 Nitish Singh. All rights reserved.
            </Text>
            <Text fontSize="sm">
              Built with ❤️ by Nitish Singh.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}