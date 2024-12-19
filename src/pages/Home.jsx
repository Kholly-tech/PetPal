import React from "react";
import Button from "@components/UI/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import gallery from '@assets/images/gallery.svg';
import process from '@assets/images/process.svg';
import spot from '@assets/images/spot.svg';
import nella from '@assets/images/nella.svg';

const Home = () => {
  return (
    <div className="w-full min-h-[calc(100vh-3rem)] bg-bg">
      <div className="items-center justify-center text-center mx-auto max-w-2xl">
        <div className="text-primary text-4xl font-normal pt-12">
          Find Your Furry Forever Friend Today – Adopt,
          Love, and Make a Difference!
        </div>
        <div className="text-secondary text-4xl font-normal pt-12">
          Find Your Perfect Companion – Adopt, Don’t Shop!
        </div>

        <Button
          title={
            <div className="bg-secondary text-primary flex items-center gap-2">
              Start Adoption
              <Icon icon="material-symbols:arrow-right-alt" />
            </div>
          }
          className={
            "mt-8 py-3 px-10 bg-secondary text-primary rounded-full  font-medium"
          }
          loading={false}
        />
      </div>

      <div className="max-w-full ml-8 mt-6">
        <img src={gallery} alt="" />

        <div className="mt-8">
          <h2 className="text-4xl text-primary font-semibold mb-4">
            How it works
          </h2>
          <img src={process} alt="" />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="ml-8 text-4xl text-primary font-semibold mb-4">
          Spotlight of the Week
        </h2>
        <div className="bg-[#E0E0E0] w-full flex">
          <div className="w-1/2">
            <img src={nella} alt="" />
          </div>
          <div className="w-1/2 mr-8 mt-6">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              Nella
            </p>
            <p>
              <span className="font-semibold">Age:</span> 3
              years
            </p>
            <p>
              <span className="font-semibold">Breed:</span>{" "}
              Labrador Retriever Mix
            </p>
            <p>
              <span className="font-semibold">Size:</span>{" "}
              Medium (45 Ibs)
            </p>
            <p>
              <span className="font-semibold">
                Personality:
              </span>{" "}
              Playful, Affectionate and Gentle
            </p>
            <p>
              <span className="font-semibold">
                Compatibility:
              </span>{" "}
              Great with kids, gets along well with other
              dogs, and loves people!
            </p>
            <p>
              <span className="font-semibold">
                About Nella:
              </span>{" "}
              Nella is a sweet, energetic, and loving dog
              who’s looking for her forever home. She adores
              belly rubs, going for walks, and playing
              fetch. Nella has been with a foster family
              where she’s learned basic commands, is
              crate-trained, and loves to cuddle up after a
              long day of play. Her foster family describes
              her as “the happiest little soul with a big
              heart for everyone she meets.”
            </p>
            <div className="mt-8 right-1">
              <Button
                title={"Adopt Nella"}
                className="bg-primary text-secondary px-8 py-2 rounded-full font-medium text-lg justify-end"
              />
            </div>
          </div>
        </div>
        {/* <img src={spot} alt="" /> */}
      </div>
    </div>
  );
};

export default Home;
