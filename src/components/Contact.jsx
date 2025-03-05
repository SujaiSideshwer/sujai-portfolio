import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        {/* <p className="text-gray-600 mb-4">Feel free to reach out to me at:</p> */}
        <a
          href="mailto:sideshwersujai1999@gmail.com"
          className="text-blue-500 hover:underline"
        >
          sideshwersujai1999@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
