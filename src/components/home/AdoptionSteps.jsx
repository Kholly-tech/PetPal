import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const AdoptionSteps = () => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
      {/* Step 1 */}
      <div className="flex flex-col text-center">
        <div className="relative flex justify-center md:justify-start md:ml-10">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary text-lg font-bold">
            1
          </div>
        </div>
        <div className="md:w-1/2 md:text-start flex flex-col items-center md:items-start">
          <p className="mt-6 font-medium text-[17px] text-primary">
            Fill out a quick adoption form to let us know
            about your home and lifestyle
          </p>
          <Icon icon="mdi:arrow-down-bold" width="24" height="24" className="md:hidden mt-2 text-secondary" />
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col  items-center text-center">
        <div className="hidden md:block">
          <p className="font-medium text-lg text-primary">
            Schedule a visit to meet your potential new
            friend
          </p>
        </div>
        <div className="mt-6 relative">
        </div>

        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary text-lg font-bold">
          2
        </div>
        <div className="md:hidden flex flex-col items-center">
          <p className="font-medium text-lg text-primary">
            Schedule a visit to meet your potential new
            friend
          </p>
          <Icon icon="mdi:arrow-down-bold" width="24" height="24" className="md:hidden mt-2 text-secondary" />
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 lg:ml-48 bg-secondary rounded-full flex items-center justify-center text-primary text-lg font-bold">
          3
        </div>
        <div className="flex">
            <div className="lg:w-1/2">
            </div>
            <div className="lg:w-1/2 lg:text-start">
              <p className="mt-6 font-medium text-lg text-primary">
                Once approved, take your new pet home to start
                your journey together
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionSteps;
