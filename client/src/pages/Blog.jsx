import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Blog = () => {
  const [state, handleSubmit] = useForm("mnnnrqjz");
  const [media, setMedia] = useState([]);
  
  if (state.succeeded) {
    return (
      <div className="min-h-[calc(100vh-70px)] bg-bg flex items-center justify-center">
        {/* <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-primary text-2xl font-bold">Thank you for subscribing!</h2>
          <p className="text-lightBlack mt-2">We'll keep you updated with our latest pet news.</p>
        </div> */}
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-70px)] bg-black py-12 px-4">
      {/* <div className="max-w-2xl mx-auto bg-black rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">APPLICATION FORM</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label kol={'name'} text='1. Enter your full Name' />
            <div className='flex gap-4'>
                <Input type='text' id='fname' name='fname' place='First Name' required />
                <Input type='text' id='lname' name='lname' place='Last Name' required />
            </div>
          </div>

          <div>
            <Label kol={'email'} text='2. Enter your email address' />
            <Input type='email' id='email' name='email' place='you@example.com' required />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'address'} text='3. Address' />
            <Input type='address' id='email' name='address' place='Address' required />
            <ValidationError prefix="Address" field="address" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'phone'} text='4. Phone number' />
            <Input type='phone' id='phone' name='phone' place='Phone' required />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'marry'} text='5. Are you married' />
            <Input type='text' id='marry' name='marry' place='' required />
            <ValidationError prefix="Marry" field="marry" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Label kol={'kids'} text='6. Do you have kids' />
            <Input type='text' id='kids' name='kids' place='' required />
            <ValidationError prefix="Kids" field="kids" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          
          <div>
            <Label kol={'pets'} text='7. Do you have Pets' />
            <Input type='text' id='pets' name='pets' place='' required />
            <ValidationError prefix="Pets" field="pets" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'car'} text='8. Do you have car' />
            <Input type='text' id='car' name='car' place='' required />
            <ValidationError prefix="Car" field="car" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'occupation'} text='9. Occupation' />
            <Input type='text' id='occupation' name='occupation' place='' required />
            <ValidationError prefix="Occupation" field="occupation" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'no'} text='10. How many people will be living in the house' />
            <Input type='number' id='no' name='no' place='' required />
            <ValidationError prefix="No" field="no" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'income'} text='11. Monthly income' />
            <Input type='text' id='income' name='income' place='' required />
            <ValidationError prefix="Income" field="income" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'soon'} text='12. How soon do you intend moving in' />
            <Input type='text' id='soon' name='soon' place='' required />
            <ValidationError prefix="Soon" field="soon" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'date'} text='13. Date' />
            <Input type='date' id='date' name='date' place='' required />
            <ValidationError prefix="Date" field="date" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'license'} text='14. A picture of occupant/Driver’s license' />
            <CreateMediaPost media={media} setMedia={setMedia} />
            <Input type='file' id='license' name='license' place='Phone' required />
            <ValidationError prefix="License" field="license" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'deposit'} text='15. How soon you make the security deposit payment' />
            <Input type='text' id='deposit' name='deposit' place='' required />
            <ValidationError prefix="Deposit" field="deposit" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'keys'} text='16. How soon do you want to get the keys' />
            <Input type='text' id='keys' name='keys' place='' required />
            <ValidationError prefix="Keys" field="keys" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'smoke'} text='17. Do you smoke' />
            <Input type='' id='keys' name='keys' place='' required />
            <ValidationError prefix="Keys" field="keys" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <Label kol={'keys'} text='16. How soon do you want to get the keys' />
            <Input type='text' id='keys' name='keys' place='' required />
            <ValidationError prefix="Keys" field="keys" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="petType" className="block text-lightBlack font-medium mb-2">
              What type of pet do you have?
            </label>
            <select
              id="petType"
              name="petType"
              className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select pet type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-lightBlack font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-semiWhite rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Share your thoughts with us..."
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {state.submitting ? 'Sending...' : 'Subscribe Now'}
          </button>
        </form>
      </div> */}
    </div>
  );
}

export default Blog;



// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
