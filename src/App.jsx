import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import theme from './theme';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Blog from './components/Sections/Blog';
import Certifications from './components/Sections/Certifications';
import Contact from './components/Sections/Contact';

// Original detailed pages
import ProjectDetail from './pages/ProjectDetail';
import BlogPost from './pages/BlogPost';

const HomeLayout = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Blog />
    <Certifications />
    <Contact />
  </>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Helmet>
            <title>Nitish Singh | Java Full Stack Developer & AI Builder</title>
            <meta name="description" content="Portfolio of Nitish Singh, a Java Full Stack Developer specializing in AI solutions, Spring Boot, and React." />
          </Helmet>

          {/* Reading Progress Bar */}
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: '#C8A97E',
              transformOrigin: '0%',
              scaleX,
              zIndex: 1000,
            }}
          />

          <Box className="App" bg="brand.bg" color="brand.text" minH="100vh" display="flex" flexDirection="column">
            <Navbar />
            <Box as="main" flex="1">
              <Routes>
                <Route path="/" element={<HomeLayout />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;