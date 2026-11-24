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
    <section className="relative mt-20 flex w-full max-w-[1350px] flex-col items-center justify-center gap-4 px-12.5">
      <TagBadge text="Testimonials" />
      <h2 className="w-[906px] text-center text-[4rem] leading-[4rem] font-semibold text-black max-[950px]:w-full">
        Real Feedback from Satisfied Customers
      </h2>
      <p className="w-[598px] text-center text-lg font-medium text-gray-500 max-md:w-full">
        Discover what real clients have to say about how our services have
        helped them achieve their goals and manage their finances effortlessly.
      </p>

      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {clientReviews.map((review, index) => (
          <TestimonialsCard
            key={index}
            name={review.name}
            position={review.position}
            review={review.review}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
