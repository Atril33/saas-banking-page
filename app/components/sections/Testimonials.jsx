import TagBadge from "../ui/TagBadge";
import TestimonialsCard from "../ui/TestimonialsCard";

const Testimonials = () => {
  const clientReviews = [
    {
      name: "Brian Ramirez",
      position: "Financial Analyst",
      review:
        "This banking app has completely transformed how I manage my finances. It is user-friendly and efficient!",
    },
    {
      name: "David Anderson",
      position: "Marketing Manager",
      review:
        "I love the instant transfer feature! It makes sending money to friends and family a breeze.",
    },
    {
      name: "James Carter",
      position: "Graphic Designer",
      review:
        "The budgeting tools are fantastic. They’ve really helped me keep track of my spending!",
    },
    {
      name: "Jane Doe",
      position: "Data Scientist",
      review:
        "I have never felt more secure about my online banking. The security features are top-notch!",
    },
    {
      name: "David Anderson",
      position: "Marketing Manager",
      review:
        "I love the instant transfer feature! It makes sending money to friends and family a breeze.",
    },
    {
      name: "Brian Ramirez",
      position: "Financial Analyst",
      review:
        "This banking app has completely transformed how I manage my finances. It is user-friendly and efficient!",
    },
    {
      name: "David Anderson",
      position: "Marketing Manager",
      review:
        "I love the instant transfer feature! It makes sending money to friends and family a breeze.",
    },
    {
      name: "James Carter",
      position: "Graphic Designer",
      review:
        "The budgeting tools are fantastic. They’ve really helped me keep track of my spending!",
    },
    {
      name: "Jane Doe",
      position: "Data Scientist",
      review:
        "I have never felt more secure about my online banking. The security features are top-notch!",
    },
    {
      name: "David Anderson",
      position: "Marketing Manager",
      review:
        "I love the instant transfer feature! It makes sending money to friends and family a breeze.",
    },
  ];
  return (
    <section className="testimonials">
      <TagBadge text="Testimonials" />
      <h2 className="testimonails-title">Real Feedback from Satisfied Customers</h2>
      <p className="testimonails-description">Discover what real clients have to say about how our services have helped them achieve their goals and manage their finances effortlessly.</p>

      <div className="testimonials-reviews">
        {clientReviews.map((review, index) => (
          <TestimonialsCard key={index}
            name={review.name}
            position={review.position}
            review={review.review}
          />
        ))}

      </div>
    </section>
  )
}

export default Testimonials;