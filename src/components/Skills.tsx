const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "RESTful APIs", level: 75 },
    { name: "Firebase", level: 65 },
    { name: "SQL Basics", level: 60 },
  ];

  const otherSkills = [
    { name: "Git & GitHub", level: 80 },
    { name: "Responsive Design", level: 90 },
    { name: "UI/UX Basics", level: 75 },
    { name: "Performance Optimization", level: 70 },
    { name: "Web Accessibility", level: 65 },
    { name: "SEO Basics", level: 60 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are the technologies and skills I've acquired throughout my web
            development journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">Frontend</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">Backend</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Other Skills
            </h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
