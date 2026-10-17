import { useState } from 'react';
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
import Certifications from './components/Sections/Certifications';
import Contact from './components/Sections/Contact';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

// Original detailed pages
import ProjectDetail from './pages/ProjectDetail';
import BlogPost from './pages/BlogPost';

const HomeLayout = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Certifications />
    <Contact />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);
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

          {loading && <Preloader onComplete={() => setLoading(false)} />}
          <CustomCursor />

          {/* Reading Progress Bar */}
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: '#E50914',
              transformOrigin: '0%',
              scaleX,
              zIndex: 1000,
            }}
          />

          <Box className="App" bg="#050505" color="white" minH="100vh" display="flex" flexDirection="column" overflowX="hidden">
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