import React from "react";
import "./Reviews.css";

function Reviews() {
  return (
   <section className="reviews-section">
  <div className="reviews-container">
    
    <h2 className="reviews-title">What Our Patients Say</h2>

    <div className="reviews-rating">
      <span className="stars">★★★★★</span>
      <span className="rating-number">5.0</span>
    </div>

    <p className="reviews-subtitle">
      Based on 198+ verified reviews
    </p>

    <div className="reviews-grid">
      
      <div className="review-card">
        <div className="card-stars">★★★★★</div>
        <p>
          "The therapist guided me with specific exercises and regular therapy sessions.
          My back pain has completely disappeared. Highly recommend!"
        </p>
        <h4>Rajesh Kumar</h4>
        <span>December 2024</span>
      </div>

      <div className="review-card">
        <div className="card-stars">★★★★★</div>
        <p>
          "The staff was welcoming and made me feel comfortable from the start.
          Dr. Shankar is incredibly professional and knowledgeable."
        </p>
        <h4>Priya Sharma</h4>
        <span>November 2024</span>
      </div>

      <div className="review-card">
        <div className="card-stars">★★★★★</div>
        <p>
          "Best place to heal your pain. The 24/7 availability is a huge plus
          for emergency situations."
        </p>
        <h4>Arun Vel</h4>
        <span>October 2024</span>
      </div>

            <div className="review-card">
        <div className="card-stars">★★★★★</div>
        <p>
          "After my Knee surgery the rehabilitation progrram here helped me recover faster then expected.
          very gratful for their care."
        </p>
        <h4>Lakshmi Devi</h4>
        <span>September 2024</span>
      </div>

           <div className="review-card">
        <div className="card-stars">★★★★★</div>
        <p>
          "Home visit service was excellent. tThe therapist came on 
          time and provided professional treatment at my doorstep."
        </p>
        <h4>Vijay Anand</h4>
        <span>August 2024</span>
      </div>

         <div className="review-card">
        <div className="card-stars">★★★★★</div>
        <p>
          "Personalized exercise programs really work! My
          chronic shoulder pain is now manageable thanks to physio Foundation."
        </p>
        <h4>Meena Balan</h4>
        <span>july 2024</span>
      </div>
 </div>
        <div className="cta-text">
         <p>Join thousands of satisfied patients who have experienced our expert physiotherapy care</p>
        </div>

    

  </div>
</section>
  );
}

export default Reviews;