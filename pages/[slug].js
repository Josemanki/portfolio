import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import SocialNotch from '../components/SocialNotch';

import ReactMarkdown from 'react-markdown';
import { IoMdArrowBack } from 'react-icons/io';
import { SiGithub } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { sanityClient } from '../sanity';
import { groq } from 'next-sanity';
import Image from 'next/image';
import SkillBadge from '../components/SkillBadge';
import LinkButton from '../components/LinkButton';

const Project = ({ projectData }) => {
  const {
    name,
    long_description,
    imageUrl,
    github,
    live,
    skills,
    slug,
    socials,
  } = projectData;

  return (
    <>
      <Head>
        <title>Jose Hernandez - {name}</title>
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
        <meta property="og:title" content={`Jose Hernandez - ${name}`} />
        <meta
          property="og:url"
          content={`https://www.hernandez-jose.com/${slug}`}
        />
        <meta property="og:image" content="/site-preview.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SocialNotch
        github={socials.github}
        linkedin={socials.linkedin}
        email={`mailto:${socials.email}`}
      />

      <div className="container px-4">
        <article>
          <div className="bg-custom-navy-light p-6 rounded-xl shadow-lg mt-4 sm:mt-8">
            <div className="mb-2">
              <Link href={'/#projects'}>
                <a>
                  <p className="inline-flex items-center gap-2 hover:text-rose-500">
                    <IoMdArrowBack /> Back to Homepage
                  </p>
                </a>
              </Link>
            </div>
            <h1 className="text-3xl font-semibold font-poppins mb-4">{name}</h1>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillBadge key={skill._id} {...skill} />
              ))}
            </div>
          </div>
          <div className="my-8 w-full">
            <Image
              src={imageUrl}
              layout="responsive"
              height={45}
              width={'100%'}
              alt={`Preview for ${name}`}
              priority
            />
          </div>
          <div className="flex justify-center flex-wrap gap-4 mb-4">
            {live && (
              <LinkButton
                title={'Live Demo'}
                icon={AiOutlineArrowRight}
                link={live}
                classes={'mb-4'}
                blank
              />
            )}
            <LinkButton
              title={'GitHub'}
              icon={SiGithub}
              link={github}
              classes={'mb-4'}
              blank
            />
          </div>
          <ReactMarkdown
            className={
              'prose prose-invert max-w-none bg-custom-navy-light p-6 mb-4 shadow-xl rounded-lg prose-headings:font-poppins prose-headings:font-medium sm:pb-4'
            }
          >
            {long_description}
          </ReactMarkdown>
        </article>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const projectQuery = groq`*[_type == 'project'] {
    "slug": slug.current
  }`;

  const projects = await sanityClient.fetch(projectQuery);
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectQuery = groq`
  *[_type == 'project' && slug.current == $slug][0] {
    ...,
    'socials': *[_type == 'homepage'][0] {
      github,
      email,
      linkedin
    },
    "imageUrl": image.asset->url,
    skills[]->,
  }
  `;
  const projectData = await sanityClient.fetch(projectQuery, params);

  return {
    props: {
      projectData,
    },
  };
}

export default Project;
