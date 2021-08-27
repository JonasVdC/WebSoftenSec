import React from "react";

const HomeContent = () => (
  <div className="next-steps">
    <h2 className="my-5 text-center">What can I do next?</h2>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
            This project was designed for Software security
        </h6>
        <p>
         Welcome to this project which was designed for the course Software security!
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
            Profile
        </h6>
        <p>
          In the profile tab you can access your saved profile data once you are logged in!
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
            External API
        </h6>
        <p>
          Please run the express back-end seperately via the git link provided in the assignment, once this runs you can do the fetches in the external API page, otherwise this will not work!
        </p>
      </div>

      <div className="col-md" />
    </div>
  </div>
);

export default HomeContent;
