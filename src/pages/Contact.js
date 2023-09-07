import ContactForm from "../Components/Contact/Form";

const Contact = () => {
  return (
    <>
      <section className="py-5">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40008.45425589545!2d81.51457950966814!3d21.312702712702364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a291fd2fffae377%3A0xf87213e560d357bc!2sKapasda%2C%20Chhattisgarh%20490042!5e1!3m2!1sen!2sin!4v1693741497757!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
     <ContactForm/>
        
      </section>
    </>
  );
};

export default Contact;
