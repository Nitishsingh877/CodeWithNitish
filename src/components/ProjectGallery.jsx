import { Box, SimpleGrid, Image, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure, Button, Text, IconButton, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function ProjectGallery({ projectId, projectTitle }) {
  const [imageError, setImageError] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  
  const openImage = (index) => {
    setSelectedImageIndex(index)
    onOpen()
  }
  
  const nextImage = () => {
    const images = getProjectImages(projectId)
    setSelectedImageIndex((prev) => (prev + 1) % images.length)
  }
  
  const prevImage = () => {
    const images = getProjectImages(projectId)
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  
  const getProjectImages = (id) => {
    switch(id) {
      case 1: // Car Wash System
        return [
          '/assets/TheDetailingMafia/Home.png',
          '/assets/TheDetailingMafia/HomePage.png',
          '/assets/TheDetailingMafia/bookcar.png',
          '/assets/TheDetailingMafia/addCar.png',
          '/assets/TheDetailingMafia/myCar.png',
          '/assets/TheDetailingMafia/currBookings.png',
          '/assets/TheDetailingMafia/accepstReq.png',
          '/assets/TheDetailingMafia/chats.png',
          '/assets/TheDetailingMafia/pendingorders.png',
          '/assets/TheDetailingMafia/washerRequest.png'
        ]
      case 4: // StudyNotion
        return [
          '/assets/studyNotion/Screenshot 2026-01-05 184814.png',
          '/assets/studyNotion/Screenshot 2026-01-05 184821.png',
          '/assets/studyNotion/Screenshot 2026-01-05 184828.png',
          '/assets/studyNotion/Screenshot 2026-01-05 184834.png',
          '/assets/studyNotion/Screenshot 2026-01-05 184840.png',
          '/assets/studyNotion/Screenshot 2026-01-05 184846.png'
        ]
      case 5: // RAG Chatbot
        return [
          '/assets/chatbots/RAGChatbots.png',
          '/assets/chatbots/FAQ.png',
          '/assets/chatbots/PromptChatbot.png'
        ]
      default:
        return []
    }
  }

  const images = getProjectImages(projectId)
  const displayImages = showAll ? images : images.slice(0, 6)
  const hasMoreImages = images.length > 6
  
  if (images.length === 0) return null

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {displayImages.map((src, index) => (
          <Box
            key={index}
            borderRadius="md"
            overflow="hidden"
            bg={useColorModeValue('gray.100', 'gray.700')}
            h="200px"
            cursor="pointer"
            _hover={{ transform: 'scale(1.02)', transition: 'transform 0.2s' }}
            onClick={() => openImage(index)}
          >
            <Image
              src={src}
              alt={`${projectTitle} - Screenshot ${index + 1}`}
              w="100%"
              h="100%"
              objectFit="cover"
              onError={() => setImageError(prev => ({ ...prev, [index]: true }))}
              display={imageError[index] ? 'none' : 'block'}
            />
          </Box>
        ))}
      </SimpleGrid>
      
      {hasMoreImages && (
        <Box textAlign="center" mt={6}>
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            colorScheme="brand"
            size="sm"
          >
            {showAll ? `Show Less` : `Show More (${images.length - 6} more)`}
          </Button>
        </Box>
      )}
      
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent bg="transparent" boxShadow="none" position="relative">
          <ModalCloseButton color="white" size="lg" zIndex={2} />
          
          <HStack position="absolute" top="50%" left="0" right="0" justify="space-between" zIndex={2} px={4}>
            <IconButton
              icon={<FaChevronLeft />}
              onClick={prevImage}
              variant="solid"
              colorScheme="whiteAlpha"
              size="lg"
              isRound
            />
            <IconButton
              icon={<FaChevronRight />}
              onClick={nextImage}
              variant="solid"
              colorScheme="whiteAlpha"
              size="lg"
              isRound
            />
          </HStack>
          
          <Image
            src={images[selectedImageIndex]}
            alt="Project Screenshot"
            maxH="90vh"
            maxW="90vw"
            objectFit="contain"
            mx="auto"
          />
        </ModalContent>
      </Modal>
    </Box>
  )
}