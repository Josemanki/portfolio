import { useState, useEffect } from 'react';
import { sanityClient } from '../sanity';
import { groq } from 'next-sanity';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
import Summary from '../components/Summary';
import SocialNotch from '../components/SocialNotch';

export default function Home({ homeData }) {
  const {
    title,
    subtitle,
    about,
    cta,
    footer,
    navbar,
    frontend,
    backend,
    skills,
    projects,
    email,
    linkedin,
    github,
  } = homeData;

  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setCurrentSection(entry.target.id);
      });
    }, options);

    const sections = document.querySelectorAll('.nav-section');
    sections.forEach((x) => observer.observe(x));

    return () => {
      sections.forEach((x) => observer.unobserve(x));
    };
  }, []);

  return (
    <>
      <Head>
        <title>Jose Hernandez - Portfolio</title>
        <meta name="title" content="Jose Hernandez - Portfolio" />
        <meta
          name="description"
          content="Jose Hernandez - Come discover projects, know about the author, take a look at the possibilities."
        />
        <meta
          name="keywords"
          content="portfolio, web developer, frontend, websites"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Jose Hernandez - Portfolio" />
        <meta property="og:url" content="https://www.hernandez-jose.com/" />
        <meta property="og:image" content="/site-preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SocialNotch github={github} linkedin={linkedin} email={email} />
      <Navbar currentSection={currentSection} links={navbar} />
      <Hero title={title} subtitle={subtitle} cta={cta} />
      <AboutMe about={about} />
      <Skills skills={skills} />
      <Summary frontend={frontend} backend={backend} />
      <Projects projects={projects} />
      <Contact email={email} />
      <Footer
        links={footer}
        github={github}
        linkedin={linkedin}
        email={email}
      />
    </>
  );
}

export async function getStaticProps() {
  const homeQuery = groq`
  *[_type == 'homepage'][0] {
    ...,
    skills[]->,
      "projects": *[_type == 'project' && frontPage == true] | order(_createdAt asc) {
      ...,
      skills[]->,
    },
  }
`;

  const homeData = await sanityClient.fetch(homeQuery);
  return {
    props: {
      homeData,
    },
  };
}
