import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MTY2MzU3NTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mx="auto" />
          <Heading as="h1" size="2xl" mt={4}>
            Will Smith
          </Heading>
          <Text fontSize="xl" color="gray.500">
            Full Stack Developer
          </Text>
        </Box>

        {/* About Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">Hi Fabian! Things are up and running for tomorrow's case :)</Text>
        </Box>

        {/* Projects Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Projects
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project One
              </Heading>
              <Text mt={2}>A brief description of Project One. It is a web application that allows users to do amazing things.</Text>
              <Link href="https://github.com/johndoe/project-one" isExternal color="teal.500" mt={2}>
                View on GitHub
              </Link>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">
                Project Two
              </Heading>
              <Text mt={2}>A brief description of Project Two. It is a mobile application that helps users manage their tasks efficiently.</Text>
              <Link href="https://github.com/johndoe/project-two" isExternal color="teal.500" mt={2}>
                View on GitHub
              </Link>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h2" size="xl" mb={4}>
            Contact
          </Heading>
          <Text fontSize="md" mb={4}>
            Feel free to reach out to me on any of the following platforms:
          </Text>
          <HStack spacing={4} justify="center">
            <IconButton as="a" href="https://github.com/johndoe" aria-label="GitHub" icon={<FaGithub />} size="lg" isRound />
            <IconButton as="a" href="https://linkedin.com/in/johndoe" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" isRound />
            <IconButton as="a" href="https://twitter.com/johndoe" aria-label="Twitter" icon={<FaTwitter />} size="lg" isRound />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
