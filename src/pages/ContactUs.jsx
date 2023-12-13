function ContactUs(){
    return(
        <>
        <div>
               <h2>Contact Us</h2>
    <p>If you have any questions, concerns, or feedback, please don't hesitate to get in touch with us. We are here to help you!</p>

    <h3>Contact Information</h3>
    <p>
      <strong>Email:</strong> contact@mountainstateswap.com<br />
      <strong>Phone:</strong> (304)-293-0000<br />
      <strong>Address:</strong> Morgantown ,West Virginia
    </p>

    <h3>Contact Form</h3>
    <p>If you prefer, you can also use the contact form below to send us a message:</p>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
        </>
    );
} export default ContactUs;