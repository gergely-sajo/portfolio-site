import React from 'react';
import StackItems from './StackItems';

function ProjectPreviewImgLeft(props) {
  return (
    <div className="project-preview">
      <div className="project-preview__img--left project-preview__img--desktop">
        <img className="project__img" src={props.imgSrc} loading="lazy" alt={props.imgAlt}/>
      </div>
      <div className="project-preview__content--right">
        <h3 className="page-section__subtitle">{props.projectName}</h3>
        <p className="page-section__text-desc">{props.projectDesc}</p>
          <div className="project-preview__img--left project-preview__img--mobile">
            <img className="project__img" src={props.imgSrc} loading="lazy" alt={props.imgAlt}/>
          </div>  
          <div className="project__tech-list">
          <h4 className="page-section__text-title page-section__text-title--black">Stack Used:</h4>
          <ul className="page-section__text-desc">
            {props.stackList.map(item => (
                <StackItems
                  stackIcon={item.stackIcon} 
                  stackName={item.stackName} 
                />
            ))}
          </ul>
          <a href={props.viewSite} target="_blank"><button className="btn btn-dark m-r--s">View Site</button></a>
          <a href={props.viewCode} target="_blank"><button className="btn btn-dark">View Code</button></a>
        </div>      
      </div>   
    </div>  
  )
}
  
export default ProjectPreviewImgLeft;