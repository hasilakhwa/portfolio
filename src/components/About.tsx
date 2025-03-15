const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I am a passionate web developer with expertise in creating modern,
            responsive, and user-friendly websites and web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey in web development began with a curiosity about how
              websites work. This curiosity evolved into a passion for creating
              digital experiences that are both functional and aesthetically
              pleasing.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I&apos;ve dedicated myself to mastering modern web technologies
              and best practices, constantly learning and adapting to the
              ever-changing landscape of web development.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My goal is to create web solutions that not only meet but exceed
              client expectations, delivering value through clean code,
              intuitive design, and optimal performance.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Education & Experience</h3>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-1">Web Development</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                Self-Taught | 2023 - Present
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Learning and improving my skills through online courses,
                documentation, and building real-world projects.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-1">Freelance Projects</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                Remote Work | 2023 - Present
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Working on various web development projects for clients,
                focusing on creating responsive and user-friendly websites.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">Technical Skills</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                Continuous Learning
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Mastering modern web technologies including React, Next.js, and
                various other development tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
