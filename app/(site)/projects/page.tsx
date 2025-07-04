import React from 'react';

const ProjectsPage = () => {
  return (
    <>
      <div className="bg-accent flex flex-col items-center justify-center gap-3 py-14">
        <h1 className="text-center text-3xl font-semibold capitalize lg:text-6xl">Projects</h1>
      </div>
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-5 p-4 lg:flex-row">
        <p>No Projects Found</p>
      </div>
    </>
  );
};

export default ProjectsPage;
