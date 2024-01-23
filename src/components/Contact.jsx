import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_5o21pos',
        'template_eq7it9h',
        {
          from_name: form.name,
          to_name: "Taukir Shaikh",
          from_email: form.email,
          to_email: "shaikhtaukir0212@gmail.com",
          message: form.message,
          client_email: form.email,
        },
        'FCa47-5JUO9xZNCIt',
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log("Could not send message - " + error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div name='contact' className='w-full h-5/6 bg-[#0a192f] flex flex-col justify-center items-center p-4'>
      <div className="w-full bg-inherit m-10"/>
      <form method='POST' ref={formRef} onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - shaikhtaukir0212@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] text-black p-2' type="text" required placeholder='Name' name='name' value={form.name} onChange={handleChange} />
        <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" required placeholder='Email' name='email' value={form.email} onChange={handleChange} />
        <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" required rows="10" placeholder='Message' value={form.message} onChange={handleChange}></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send 👉 </button>
      </form>


    </div>
  )
}

export default Contact