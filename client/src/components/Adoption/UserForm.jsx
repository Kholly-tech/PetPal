import React from 'react'

const UserForm = ({formData, handleChange}) => {
  return (
    <>
    <section>
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
        <div className="space-y-4">
            <input type="text" name='fullName' value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Home Address" name='address' value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="tel" placeholder="Phone Number" name='phone' value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
    </section>

    {/* Living Situation */}
    <section>
        <h3 className="text-xl font-semibold mb-4">Living Situation</h3>
        <select name='ownership' value={formData.ownership} onChange={handleChange} className="w-full p-2 border rounded">
            <option value=''>Do you own or rent your home?</option>
            <option value='own'>Own</option>
            <option value='rent'>Rent</option>
        </select>
        <input type="number" name='householdMembers' value={formData.householdMembers} onChange={handleChange} placeholder="How many people live in your household?" className="w-full p-2 border rounded mt-4" />
    </section>

    {/* Pet Experience */}
    <section>
        <h3 className="text-xl font-semibold mb-4">Pet Experience</h3>
        <textarea placeholder="Do you have any current pets? Please describe." name='currentPets' value={formData.currentPets} onChange={handleChange} className="w-full p-2 border rounded" rows="3"></textarea>
        <textarea placeholder="Previous pet ownership experience?" name='petExperience' value={formData.petExperience} onChange={handleChange} className="w-full p-2 border rounded mt-4" rows="3"></textarea>
    </section>

    {/* Care Planning */}
    <section>
        <h3 className="text-xl font-semibold mb-4">Care Planning</h3>
        <div className="space-y-4">
            <input type="text" placeholder="Who will be the primary caregiver?" name='primaryCaregiver' value={formData.primaryCaregiver} onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="text" placeholder="Average hours pet will be alone daily" name='hoursAlone' value={formData.hoursAlone} onChange={handleChange} className="w-full p-2 border rounded" />
            <textarea placeholder="How will you exercise the pet?" name='exercise' value={formData.exercise} onChange={handleChange} className="w-full p-2 border rounded" rows="3"></textarea>
        </div>
    </section>

    {/* Veterinary Reference */}
    <section>
        <h3 className="text-xl font-semibold mb-4">Veterinary Reference</h3>
        <input type="text" placeholder="Veterinarian Name & Contact" name='vetContact' value={formData.vetContact} onChange={handleChange} className="w-full p-2 border rounded" />
    </section>
    </>
  )
}

export default UserForm
