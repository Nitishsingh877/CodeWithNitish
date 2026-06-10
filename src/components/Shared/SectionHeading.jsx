import { Heading, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionVStack = motion(VStack);

const SectionHeading = ({ title, subtitle }) => {
  return (
    <MotionVStack
      spacing={4}
      mb={12}
      textAlign="center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Heading
        as="h2"
        size="2xl"
        fontFamily="heading"
        color="brand.accent"
        fontWeight="bold"
      >
        {title}
      </Heading>
      {subtitle && (
        <Text color="brand.secondary" fontSize="lg" maxW="2xl">
          {subtitle}
        </Text>
      )}
    </MotionVStack>
  );
};

export default SectionHeading;
