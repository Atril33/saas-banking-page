import Image from 'next/image';

const TestimonialsCard = ({ name, position, review }) => {
  return (
    <div>
      <div>
        <h4>
          {name}
        </h4>
        <p>{position}</p>
      </div>
      <p>
        {review}
      </p>
      <Image src="/assets/ratings.png" alt="Star Rating" width={100} height={20} />

    </div>
  )
}

export default TestimonialsCard;