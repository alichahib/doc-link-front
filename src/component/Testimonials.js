// Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Patients Say</h2>
      <div className="testimonial">
        <img src="avatar1.jpg" alt="Patient Avatar" />
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."</p>
        <p className="author">- John Doe</p>
      </div>
      <div className="testimonial">
        <img src="avatar2.jpg" alt="Patient Avatar" />
        <p>"Pellentesque ut neque. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit."</p>
        <p className="author">- Jane Smith</p>
      </div>
      <div className="testimonial">
        <img src="avatar3.jpg" alt="Patient Avatar" />
        <p>"Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</p>
        <p className="author">- Michael Johnson</p>
      </div>
    </section>
  );
}

export default Testimonials;
