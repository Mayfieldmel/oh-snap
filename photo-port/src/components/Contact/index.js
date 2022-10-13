import React, {useState} from "react";

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // sync formState with user input
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
    
    // form submission
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
      
   
  // render jsx
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
         {/* name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
         {/* email input */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onChange={handleChange} name="email" />
        </div>
         {/* message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
