import useFetchProjects from './fetchProjects';

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className='projects'>
        <div className='projects-center'>
          <h2>Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>

      <div className='projects-center'>
        {projects.map((project) => {
          const { id, title, url, img } = project;

          return (
            <a href={url} key={id} target='_blank' rel='noreferrer' className='project'>
              <img src={img} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
