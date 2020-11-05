import React, {useContext} from 'react';
import './Blog.css';
import ProjectCard from '../../components/projectCard/ProjectCard';
import {projectSection} from '../../portfolio';
import {Fade} from 'react-reveal';
import StyleContext from '../../contexts/StyleContext';

export default function ProjectTest() {
  console.log(projectSection.title);
  const {isDark} = useContext(StyleContext);
  return (<Fade bottom='bottom' duration={1000} distance='20px'>
    <div className='main' id='projects'>
      <div className='blog-header'>
        <h1 className='blog-header-text'>{projectSection.title}</h1>
        <p className={isDark ?
            'dark-mode blog-subtitle'
            : 'subTitle blog-subtitle'
}>
          {projectSection.subtitle}
        </p>
      </div>
      <div className='blog-main-div'>
        <div className='blog-text-div'>
          {
            projectSection.projects.map((project) => {
              return (<ProjectCard project={{
                  tag: project.tag,
                  date: project.date,
                  url: project.url,
                  title: project.title,
                  description: project.description,
                  image: project.image,
                  type: project.type
                }}/>);
            })
          }
        </div>
      </div>
    </div>
  </Fade>);
}
