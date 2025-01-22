import React, { useState } from "react";
import { Input } from "../UI/Input";
import Button from "../UI/Button";
import PopUp from "../UI/PopUp";
import { Icon } from "@iconify/react/dist/iconify.js";
import Socials from "./Socials";
import InfoCard from "../UI/InfoCard";
import { regForNews } from "../../services/functions/newsFunction";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      setError("");
      setSuccessMessage("");
      // console.log("Email:", email);
      if (email) {
        const res = await regForNews(email);
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setError(error?.message ||"An error occurred. Please try again later.");
    } finally {
      setLoading(false);
      setEmail("");
    }
  };


  return (
    <footer className="w-full bg-primary py-8">
      <div className="flex flex-row">
        {/* Company Info Section */}
        <div className="w-1/2 text-white px-5">
          <h1 className="text-3xl">PetPal</h1>
          <p className="text-xs">
            We believe every pet deserves a loving home. We connect animals in need 
            with compassionate people ready to open their hearts.
          </p>
          <br />
          <p className="text-xs">
            Our mission is simple: to help you find the perfect furry companion 
            while making the adoption process easy and supportive. With us, you're not 
            just adopting a pet—you're gaining a lifelong friend and making a difference!
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="w-1/2 flex flex-col items-center text-white">
          <h2 className="text-xl font-medium">
            Subscribe to our Newsletter
          </h2>
          <p className="text-[10px] mb-8">
            Stay updated on new pets and adoption events!
          </p>
          <div className="w-full sm:max-w-[350px] px-8">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            <Input
              placeholder="Email"
              type={'email'}
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-4 py-2 rounded-md"
              error={!email.includes('@') && email.length > 0 ? 'Please enter a valid email' : ''}
            />
            <Button
              className="bg-white text-primary py-1 w-full mt-2 rounded-lg"
              title="Subscribe"
              onClick={handleSubmit}
              loading={loading}
              type={'submit'}
              disabled={!email.includes('@') || email.length === 0}
            />
          </div>
        </div>
      </div>

      {showPopup && (
        <PopUp>
          <InfoCard success={true} title={'Thank You!'} description={'You have successfully subscribed to our newsletter.'} loading={loading} onClose={() => setShowPopup(false)} />
        </PopUp>
      )}

      {/* Footer Bottom */}
      <Socials />
    </footer>
  )
}

export default Footer;