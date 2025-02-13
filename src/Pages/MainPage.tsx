import React from "react";

const MainPage = () => {
  return (
    <section>
      <div>
        <div className="m-3">
          <button
            type="button"
            className="btn yobr-button-primary-bg-color yobr-hover-color yobr-primary-text-color"
          >
            Primary
          </button>
          <button
            type="button"
            className="btn yobr-button-secondary-bg-color yobr-hover-color yobr-primary-text-color"
          >
            Secondary
          </button>
          <button type="button" className="btn tab-color">
            Tab color
          </button>
        </div>
        <h1 className="yobr-domine-font yobr-primary-text-color">
          Domine Font
        </h1>
        <h1 className="yobr-work-sans-font yobr-secondary-text-color">
          Work Sans Font
        </h1>
      </div>
    </section>
  );
};

export default MainPage;
