import React from 'react'

const OtherQues = ({formData, handleChange}) => {
  return (
    <>
    {/* Additional Important Questions */}
    <section>
        <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
        <div className="space-y-4">
            <textarea 
                placeholder="What would be your plan if you need to travel?" 
                name='travelPlan' value={formData.travelPlan} onChange={handleChange}
                className="w-full p-2 border rounded" 
                rows="3"
            ></textarea>

            <select name='vetCosts' value={formData.vetCosts} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="">Are you prepared for emergency vet costs?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="insurance">Will get pet insurance</option>
            </select>

            <textarea 
                placeholder="How do you plan to train/socialize your new pet?" 
                name='training' value={formData.training} onChange={handleChange}
                className="w-full p-2 border rounded" 
                rows="3"
            ></textarea>

            <select name='yardFenced' value={formData.yardFenced} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="">Is your yard fenced? (if applicable)</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="na">Not Applicable</option>
            </select>

            <textarea 
                placeholder="What would make you consider returning/surrendering a pet?" 
                name='surrenderReason' value={formData.surrenderReason} onChange={handleChange}
                className="w-full p-2 border rounded" 
                rows="3"
            ></textarea>
        </div>
    </section>
    </>
  )
}

export default OtherQues
