'use client';
import { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTab from './ProjectTab';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'techshop website',
    description: 'eshop project with nextjs and typescript',
    image: '/images/techshop.png',
    tag: ['All', 'NextJs'],
    gitUrl: '/',
    previewUrl: 'https://shop-tech-five.vercel.app/',
  },
  {
    id: 2,
    title: 'budget app ',
    description: 'A project with nextjs to keep your accounts update',
    image: '/images/budget_app.png',
    tag: ['All', 'NextJs'],
    gitUrl: '/',
    previewUrl: 'https://budget-app-pearl.vercel.app/sign-in',
  },
  {
    id: 3,
    title: 'movieapp database',
    description: 'like imdb a movie app made by nextjs',
    image: '/images/movieapp.png',
    tag: ['All', 'NextJs'],
    gitUrl: '/',
    previewUrl: 'https://movie-project-vert.vercel.app/',
  },
  {
    id: 4,
    title: 'blog-project',
    description: 'a multi interactive blog with news comments authentication and admin dashboard',
    image: '/images/blog.png',
    tag: ['All', 'React'],
    gitUrl: '/',
    previewUrl: 'https://blog-project-iv7u.onrender.com/',
  },
  {
    id: 5,
    title: 'microbrewery',
    description: 'an app with beer database and many animations',
    image: '/images/microbrewery.png',
    tag: ['All', 'Javascript'],
    gitUrl: '/',
    previewUrl: 'https://bacillus-homebrewery.netlify.app/',
  },
  {
    id: 6,
    title: 'vinylio-shop',
    description: 'an app with vinyls database..',
    image: '/images/vinylio.png',
    tag: ['All', 'React'],
    gitUrl: '/',
    previewUrl: 'https://vinylio-shop.onrender.com/',
  },
  {
    id: 7,
    title: 'cocktails-shop',
    description: 'an app with spectacular cocktails..',
    image: '/images/cocktails.png',
    tag: ['All', 'React'],
    gitUrl: '/',
    previewUrl: 'https://coctail-app.onrender.com/',
  },
  {
    id: 8,
    title: 'omnifood',
    description: 'build static page with javascript',
    image: '/images/omnifood.png',
    tag: ['All', 'Javascript'],
    gitUrl: '/',
    previewUrl: 'https://omnifood-argyris.netlify.app',
  },
  {
    id: 9,
    title: 'notebook',
    description: 'a digital notebook to keep all your notes..',
    image: '/images/notebook.png',
    tag: ['All', 'NextJs'],
    gitUrl: '/',
    previewUrl: 'https://notebook-app-six.vercel.app/',
  },
  {
    id: 10,
    title: 'store_app',
    description: 'a digital notebook to keep all your files..',
    image: '/images/store_app.png',
    tag: ['All', 'NextJs'],
    gitUrl: '/',
    previewUrl: 'https://store-8bb7r7ep9-argyris-projects.vercel.app/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const handleToChange = (newTag) => {
    setTag(newTag);
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-purple-400 text-center text-6xl font-semibold mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2  py-6 ">
        <ProjectTab onClick={handleToChange} name="All" isSelected={tag === 'All'} />
        <ProjectTab onClick={handleToChange} name="React" isSelected={tag === 'React'} />
        <ProjectTab onClick={handleToChange} name="NextJs" isSelected={tag === 'NextJs'} />
        <ProjectTab onClick={handleToChange} name="Javascript" isSelected={tag === 'Javascript'} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectsSection;
