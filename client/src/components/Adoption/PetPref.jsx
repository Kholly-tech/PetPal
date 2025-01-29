import React from 'react'

const PetPref = ({formData, handleChange}) => {
  return (
    <>
    <section>
        <h3 className="text-xl font-semibold mb-4">Pet Preferences</h3>
        <div className="space-y-4">
            <select name='petType' value={formData.petType} onChange={handleChange} className="w-full p-2 border outline-none rounded">
                <option value="">Preferred Pet Type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="rabbit">Rabbit</option>
                <option value="other">Other</option>
            </select>

            <select name='preferredAge' value={formData.preferredAge} onChange={handleChange} className="w-full p-2 border outline-none rounded">
                <option value="">Preferred Age</option>
                <option value="baby">Baby</option>
                <option value="young">Young</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
            </select>

            <select name='sizePreference' value={formData.sizePreference} onChange={handleChange} className="w-full p-2 border outline-none rounded">
                <option value="">Size Preference</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>

            <select name='petGender' value={formData.petGender} onChange={handleChange} className="w-full p-2 border outline-none rounded">
                <option value="">Pet Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="any">Any Gender</option>
            </select>

            <select name='energyLevel' value={formData.energyLevel} onChange={handleChange} className="w-full p-2 border outline-none rounded">
                <option value="">Energy Level</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
            </select>

            <textarea 
                placeholder="Any specific breeds, characteristics, or special requirements you're looking for?" 
                name='specificRequirements' value={formData.specificRequirements} onChange={handleChange}
                className="w-full p-2 border outline-none rounded resize-none" 
                rows="3"
            ></textarea>
        </div>
    </section>
    </>
  )
}

export default PetPref
