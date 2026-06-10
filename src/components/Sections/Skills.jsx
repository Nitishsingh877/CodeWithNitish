import { Box, Container, SimpleGrid, Flex, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SectionHeading from '../Shared/SectionHeading';
import { techStack } from '../../data/portfolioData';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const MotionBox = motion(Box);

const getIcon = (iconName) => {
  if (iconName.startsWith('Fa') && FaIcons[iconName]) return FaIcons[iconName];
  if (iconName.startsWith('Si') && SiIcons[iconName]) return SiIcons[iconName];
  return FaIcons.FaCode;
};

const Skills = () => {
  // Group skills by category
  const categories = [...new Set(techStack.map(skill => skill.category))];

  return (
    <Box id="skills" py={24}>
      <Container maxW="6xl">
        <SectionHeading 
          title="Technology Ecosystem" 
          subtitle="Tools and technologies I use to build scalable solutions." 
        />
        
        <Flex direction="column" gap={12} mt={12}>
          {categories.map((category, idx) => (
            <Box key={category}>
              <Text fontSize="2xl" fontFamily="heading" color="brand.accent" mb={6} borderBottom="2px solid" borderColor="brand.highlight" display="inline-block" pb={2}>
                {category}
              </Text>
              <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={6}>
                {techStack.filter(s => s.category === category).map((skill, i) => {
                  const IconComponent = getIcon(skill.icon);
                  return (
                    <MotionBox
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ y: -5, boxShadow: 'lg', borderColor: 'brand.highlight' }}
                      bg="white"
                      p={6}
                      borderRadius="xl"
                      boxShadow="sm"
                      border="1px solid"
                      borderColor="blackAlpha.100"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      gap={3}
                      cursor="default"
                    >
                      <Icon as={IconComponent} boxSize={8} color={skill.color} />
                      <Text fontWeight="medium" color="brand.text" textAlign="center" fontSize="sm">
                        {skill.name}
                      </Text>
                    </MotionBox>
                  );
                })}
              </SimpleGrid>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Skills;
