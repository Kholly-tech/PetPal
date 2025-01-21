import React from "react";
import Button from "@components/UI/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import gallery from "@assets/images/gallery.svg";
import process from "@assets/images/process.svg";
import spot from "@assets/images/spot.svg";
import nella from "@assets/images/nella.svg";
import AdoptionSteps from "../components/home/AdoptionSteps";
import { Link, useNavigate } from "react-router-dom";
import AdoptionCard from "../components/home/AdoptionCard";
import ImageHolder from "../components/UI/ImageHolder";
import StarRating from "../components/UI/StarRating";
import TestimonialSection from "../components/home/Testimonials";
import PetGallery from "../components/home/PetGallery";
import { petImages } from "../assets/DemoData/DemoPets";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[calc(100vh-3rem)] bg-bg ">
      <div className="items-center justify-center text-center mx-auto sm: md:max-w-2xl lg:max-w-4xl">
        <div className="text-primary text-4xl max-w-2xl mx-auto font-normal pt-12">
          Find Your Furry Forever Friend Today – Adopt,
          Love, and Make a Difference!
        </div>
        <div className="text-secondary text-4xl max-w-2xl mx-auto font-normal pt-12">
          Find Your Perfect Companion – Adopt, Don’t Shop!
        </div>

        <div className="justify-center flex mt-8">
          <div className="flex -space-x-2">
            {[1,2,3].map((item,i)=>(
              <div key={i} className="w-12 h-12 transform hover:-translate-y-2 transition-transform duration-300">
                <ImageHolder image={nella} />
              </div>
            ))}
          </div>
          <div className="ml-2">
            <StarRating rating={3.5} />
            <p className="text-primary text-sm">Over 10k people found a friend here</p>
          </div>
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
          onClick={() => {window.open('https://wa.me/2349076889241', '_blank');}}
        />
      </div>

      <div className="max-w-full mx-1 md:mx-5 mt-6">
        <PetGallery petImages={petImages.slice(0, window.innerWidth >= 1024 ? 12: window.innerWidth >= 768 ? 8 : 6)} />

        <div className="mt-8">
          <h2 className="text-4xl text-primary font-semibold mb-4">
            How it works
          </h2>
          <AdoptionSteps />
          {/* <img src={process} alt="" /> */}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="ml-8 text-4xl text-primary font-semibold mb-4">
          Spotlight of the Week
        </h2>
        <div className="bg-[#E0E0E0] w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={nella} alt="Nella the dog" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 px-6 md:mr-8 md:mt-6">
            <>
              <p>
                <span className="font-semibold">Name:</span> Nella
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
                who's looking for her forever home. She adores
                belly rubs, going for walks, and playing
                fetch. Nella has been with a foster family
                where she's learned basic commands, is
                crate-trained, and loves to cuddle up after a
                long day of play. Her foster family describes
                her as "the happiest little soul with a big
                heart for everyone she meets."
              </p>
            </>
            <div className="mt-4 mb-2 flex justify-center md:justify-end">
              <Button
                title={"Adopt Nella"}
                className="bg-primary text-secondary px-8 py-2 rounded-full font-medium text-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full mx-2 md:mx-4 mt-6">
        <div className="w-full justify-between flex text-primary font-semibold mb-4">
          <h2 className="text-2xl ">
            Friends ready for adoption
          </h2>
          <Link to="/all">See all</Link>
        </div>
        <AdoptionCard />

        {/* What people say about us */}
        {/* <div className="mt-8">
          <h1 className="text-primary text-2xl font-medium">What people say about us</h1>
          <div className="w-full flex pl-8 mt-4 pb-4">
            <div className="w-20 h-20 justify-center">
              <ImageHolder image='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80' />
            </div>
            <div className="w-full max-w-[700px] px-3 ml-6">
              <p>Thanks to PetPal, we adopted our adorable dog, Bella. The staff was amazing and helped us prepare for bringing her home. Bella has been the perfect addition to our family, and we’re so grateful!"</p>
              <p>- Mark & Lisa</p>
              <div className="w-11 h-11 rounded-full bg-[#D9D9D9] justify-center">
                <Icon icon="ic:outline-greater-than" width={32} height={52} />
              </div>
            </div>
          </div>
        </div> */}
        <TestimonialSection />
      </div>
    </div>
  );
};

export default Home;
