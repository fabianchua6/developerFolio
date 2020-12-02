import React from 'react';
import './ProjectCard.css';

function Card(project) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, '_blank');
      win.focus(url);
    }
  }
  const image = project.project.image;
  return (<div className='card' onClick={() => openUrlInNewTab(project.project.url)} onAuxClick={() => openUrlInNewTab(project.project.url)}>
    <header
      className='card-header'
      style={{backgroundImage: 'url(' + image + ')'}}
      >
      <h4 className='card-header-title'>
        {project.project.tag}
      </h4>
    </header>

    <div className='card-body'>
      <p className='date'>{project.project.date}</p>
      <h2>{project.project.title}</h2>
      <p className='body-content'>{project.project.description}</p>
    </div>
    <button className='button button-primary'>
      <i className='fa fa-chevron-right'>
      </i>{project.project.type}
    </button>
  </div>);
}

export default Card;
