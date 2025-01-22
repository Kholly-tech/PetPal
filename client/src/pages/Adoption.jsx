import React, { useEffect, useState } from 'react'
import UserForm from '../components/Adoption/UserForm'
import PetPref from '../components/Adoption/PetPref';
import OtherQues from '../components/Adoption/OtherQues';

const Adoption = () => {
    const [stage, setStage] = useState(1);
    const [formData, setFormData] = useState({
        // Personal Information
        fullName: '',
        address: '',
        phone: '',
        ownership: '',
        householdMembers: '',
        currentPets: '',
        petExperience: '',
        primaryCaregiver: '',
        hoursAlone: '',
        exercise: '',
        vetContact: '',
        
        // Pet Preferences
        petType: '',
        preferredAge: '',
        sizePreference: '',
        energyLevel: '',
        specificRequirements: '',
        
        // Other Questions
        travelPlan: '',
        vetCosts: '',
        training: '',
        yardFenced: '',
        surrenderReason: ''
      });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(()=> {
        // console.log('Stage A: ', stage);
    },[stage]);

    const handleSubmit = async () => {

        // handle form submission
        return console.log('Form submitted: ', formData);
        // const res = await '';
    };

  return (
    <div className='bg-bg min-h-[calc(100vh-70px)] p-4'>
      <div className='w-full max-w-lg bg-white mx-auto p-8 rounded-lg shadow-md'>
        <h2 className="text-2xl font-bold mb-1">Pet Adoption Application</h2>
        <h2 className="text-sm font-medium mb-6">Complete the form below to begin your adoption process</h2>
        <form className="space-y-6">
          {/* Personal Information */}
          {(() => {
            switch (stage) {
                case 1:
                    return <UserForm formData={formData} handleChange={handleChange} />
                    break;
                case 2:
                    return <PetPref formData={formData} handleChange={handleChange} />
                    break;
                case 3:
                    return <OtherQues formData={formData} handleChange={handleChange} />
                    break;
            
                default:
                    break;
            }
          })()}

            <div className="flex justify-between">
                {stage > 1 && (
                    <button
                        type="button"
                        onClick={() => setStage(stage - 1)}
                        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                    >
                        Previous
                    </button>
                )}
                
                <button
                    type="button"
                    onClick={() => stage < 3 ? setStage(stage + 1) : handleSubmit()}
                    className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 ml-2"
                >
                    {stage === 3 ? 'Submit Application' : 'Next'}
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Adoption
