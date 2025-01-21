import React from 'react'
import Button from '../UI/Button';
import nella from '../../assets/images//nella.svg';;

const AdoptionCard = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-2 mb-2 md:mb-6">
        <div className="rounded-md w-full md:w-1/2 bg-[#FFB74D54] text-primary hover:-translate-y-3 ease-in-out duration-300">
          <img src={nella} alt="Nella" className="w-full h-48 object-cover rounded-t-md" />
          <div className="px-4 space-y-2">
            <p className="mt-4">
              <span className="font-semibold">Breed</span>: {"Labrador Retriever Mix"}
            </p>
            <p>
              <span className="font-semibold">Age</span>:{" "}
              {"3 years"}
            </p>
            <p>
              <span className="font-semibold">
                Personality
              </span>
              : {"Playful, affectionate, and gentle"}
            </p>
            <p>
              <span className="font-semibold">Good with</span>
              : {"Kids, other dogs, and loves people!"}
            </p>
            <Button
              title="Adopt"
              className="my-8 bg-primary text-white rounded-full px-8 py-1 font-medium"
            />
          </div>
        </div>
        
        <div className="rounded-md w-full md:w-1/2 bg-primary text-white hover:-translate-y-3 ease-in-out duration-300">
          <img src={nella} alt="Nella" className="w-full h-48 object-cover rounded-t-md" />
          <div className="px-4 space-y-2">
            <p className="mt-4">
              <span className="font-semibold">Breed</span>:{" "}
              {"Labrador Retriever Mix"}
            </p>
            <p>
              <span className="font-semibold">Age</span>:{" "}
              {"3 years"}
            </p>
            <p>
              <span className="font-semibold">
                Personality
              </span>
              : {"Playful, affectionate, and gentle"}
            </p>
            <p>
              <span className="font-semibold">Good with</span>
              : {"Kids, other dogs, and loves people!"}
            </p>
            <Button
              title="Adopt"
              className="my-8 mb-2 bg-secondary text-primary rounded-full px-8 py-1 font-medium"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <div className="rounded-md w-full md:w-1/2 bg-secondary text-white hover:-translate-y-3 ease-in-out duration-300">
          <img src={nella} alt="Nella" className="w-full h-48 object-cover rounded-t-md" />
          <div className="px-4 space-y-2">
            <p className="mt-4">
              <span className="font-semibold">Breed</span>:{" "}
              {"Labrador Retriever Mix"}
            </p>
            <p>
              <span className="font-semibold">Age</span>:{" "}
              {"3 years"}
            </p>
            <p>
              <span className="font-semibold">
                Personality
              </span>
              : {"Playful, affectionate, and gentle"}
            </p>
            <p>
              <span className="font-semibold">Good with</span>
              : {"Kids, other dogs, and loves people!"}
            </p>
            <Button
              title="Adopt"
              className="my-8 bg-primary text-white rounded-full px-8 py-1 font-medium"
            />
          </div>
        </div>

        <div className="rounded-md w-full md:w-1/2 bg-[#E0E0E0] text-primary hover:-translate-y-3 ease-in-out duration-300">
          <img src={nella} alt="Nella" className="w-full h-48 object-cover rounded-t-md" />
          <div className="px-4 space-y-2">
            <p className="mt-4">
              <span className="font-semibold">Breed</span>:{" "}
              {"Labrador Retriever Mix"}
            </p>
            <p>
              <span className="font-semibold">Age</span>:{" "}
              {"3 years"}
            </p>
            <p>
              <span className="font-semibold">
                Personality
              </span>
              : {"Playful, affectionate, and gentle"}
            </p>
            <p>
              <span className="font-semibold">Good with</span>
              : {"Kids, other dogs, and loves people!"}
            </p>
            <Button
              title="Adopt"
              className="my-8 mb-2 bg-secondary text-primary rounded-full px-8 py-1 font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdoptionCard