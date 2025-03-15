const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce platform with product listings, shopping cart, and checkout functionality.",
      image: "/project1.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Restaurant Website",
      description:
        "A modern website for a restaurant featuring menu display, reservation system, and contact information.",
      image: "/project2.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity application that helps users organize tasks, set priorities, and track progress.",
      image: "/project3.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A professional portfolio website to showcase skills, projects, and contact information.",
      image: "/project4.jpg",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I&apos;ve worked on. Each project
            demonstrates different skills and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-60 w-full">
                <div className="absolute inset-0 bg-blue-600 opacity-20 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {project.title}
                  </h3>
                </div>
                <div className="relative h-full w-full bg-gray-300">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                    <span className="text-gray-500 dark:text-gray-400">
                      Project Image
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
