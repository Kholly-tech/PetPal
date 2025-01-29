import React, { useEffect, useState } from 'react'
import UserForm from '../components/Adoption/UserForm'
import PetPref from '../components/Adoption/PetPref';
import OtherQues from '../components/Adoption/OtherQues';
import { adoptPet } from '../services/functions/petFunctions';
import { useSearchParams } from 'react-router-dom';
import PopUp from '../components/UI/PopUp';
import SuccessCard from '../components/UI/InfoCard';

const Adoption = () => {
    const [stage, setStage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        // Personal Information
        fullName: '',
        address: '',
        phone: '',
        homeOwnership: '',
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
        petGender: '',
        energyLevel: '',
        specificRequirements: '',
        
        // Other Questions
        travelPlan: '',
        vetCosts: '',
        training: '',
        yardFenced: '',
        surrenderReason: ''
      });
      let petId;

      useEffect(()=> {
        if(searchParams) petId = searchParams.get('pId') || null ;
      },[searchParams]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            // handle form submission
            setLoading(true)
            setError('');
            console.log('Form submitted: ', formData);
            const res = await adoptPet(formData, petId);
            if(res.status === 'success') setSuccess(true);
        } catch (error) {
            setError(error.message || 'Unable to submit application');
            console.log(error);
        } finally {
            setLoading(false);
        }
        
    };

  return (
    <div className='bg-bg min-h-[calc(100vh-70px)] p-4'>
      <div className='w-full max-w-3xl bg-white mx-auto p-8 rounded-lg shadow-md'>
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

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
            </div>
          )}

            <div className="flex justify-between">
                {stage > 1 && (
                    <button
                        type="button"
                        onClick={() => setStage(stage - 1)}
                        className="w-1/3 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
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

        {success && (
            <PopUp>
                <SuccessCard title='Success' loading={loading} success={true}
                    description='Your application has been recorded and it is being reviewed' onClose={() => {
                        setSuccess(false);
                    }}  />
            </PopUp>
        )}
      </div>
    </div>
  )
}

export default Adoption
