import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Enquiry = () => {
  const [formData ,setFormData ] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    travelers: "",
    days: "",
    hotel: "",
    month: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = (e) => {
    e.preventDefault();

  const message = `
    New Tour Enquiry
    Name: ${formData.fullName}
    Email: ${formData.email}
    Mobile: ${formData.mobile}
    City: ${formData.city}
    Travelers: ${formData.travelers}
    Days: ${formData.days}
    Hotel: ${formData.hotel}
    Travel Month: ${formData.month}  
  `;
  // OPTION POPUP
    const choice = window.confirm(
      "Press OK for WhatsApp \nPress Cancel for Email"
    );

    if (choice) {
      const phoneNumber = "917874041324";

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");
    }

    // Email
    else {

      emailjs.send(
        "service_qozrjdw",
        "template_647ughw",
        {
          fullName: formData.fullName,
          email: formData.email,
          mobile: formData.mobile,
          city: formData.city,
          travelers: formData.travelers,
          days: formData.days,
          hotel: formData.hotel,
          month: formData.month,
        },
        "R-XlgvaRjW49SHxpq"
      )
      .then(() => {
        alert("Enquiry Sent Successfully ");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed To Send Enquiry ");
      });


    }
  };
  return (
    <div className="text-black bg-transparent p-2 md:p-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-6 md:p-10">
        
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-6">
          Hi &#128075;, Enquiry Now To Get Best Price.
        </h2>

        <form className="space-y-4 " onSubmit={handleSubmit}>
          
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              className="input-style"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="input-style"
              onChange={handleChange}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No.*"
              className="input-style"
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="Your City*"
              className="input-style"
              onChange={handleChange}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="number"
              name="travelers"
              placeholder="No. Of Travelers*"
              min='1'
              className="input-style"
              onChange={handleChange}
            />
            <input
              type="text"
              name="days"
              list="days-options"
              placeholder="Select or Enter Days"
              className="input-style"
              onChange={handleChange}
            />

            <datalist id="days-options">
              <option value="1-3 Days" />
              <option value="4-7 Days" />
              <option value="7+ Days" />
            </datalist>
  
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select 
              name="hotel"
              onChange={handleChange}
              className="input-style">
              <option>---Select Hotel Category---</option>
              <option>3 Star</option>
              <option>4 Star</option>
              <option>5 Star</option>
            </select>

            <input
              type="month"
              name="month"
              placeholder=""
              className="input-style"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg text-lg font-semibold transition cursor-pointer"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;

//service id :service_8vsd24e