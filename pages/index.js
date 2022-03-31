import { useState, useEffect } from 'react';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MessageSection from '../components/MessageSection';
import { Nav } from '../components/Nav';
import RecentWork from '../components/RecentWork';
import TalkTech from '../components/TalkTech';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setCurrentSection(entry.target.id);
      });
    }, options);

    const sections = document.querySelectorAll('.section-home');
    sections.forEach((x) => observer.observe(x));

    return () => {
      sections.forEach((x) => observer.unobserve(x));
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Jose Hernandez - Portfolio</title>
        <meta name="title" content="Jose Hernandez - Portfolio" />
        <meta
          name="description"
          content="Jose Hernandez - Come discover projects, know about the author, take a look at the possibilities."
        />
        <meta name="keywords" content="portfolio, web developer, frontend, websites" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Jose Hernandez - Portfolio" />
        <meta property="og:url" content="https://www.hernandez-jose.com/" />
        <meta property="og:image" content="/site-preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav showSidebar={showSidebar} setShowSidebar={setShowSidebar} currentSection={currentSection} />
      <Hero />
      <MessageSection />
      <RecentWork />
      <AboutMe />
      <TalkTech />
      <Contact />
      <Footer />
    </div>
  );
}
