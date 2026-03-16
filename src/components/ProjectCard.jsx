function ProjectCard({ project }) {
  return (
    <div style={styles.card}>
      <img src={project.image} alt={project.name} style={styles.image} />

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <div style={styles.tech}>
        {project.tech.map((t) => (
          <span key={t} style={styles.tag}>
            {t}
          </span>
        ))}
      </div>

      <div style={styles.links}>
        <a href={project.github} target="_blank">Github</a>
        {project.demo && (
          <a href={project.demo} target="_blank">Demo</a>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    maxWidth: "320px"
  },
  image: {
    width: "100%",
    borderRadius: "6px",
    marginBottom: "10px"
  },
  tech: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
    marginTop: "8px"
  },
  tag: {
    fontSize: "12px",
    background: "#eee",
    padding: "3px 6px",
    borderRadius: "4px"
  },
  links: {
    marginTop: "10px",
    display: "flex",
    gap: "10px"
  }
};

export default ProjectCard;