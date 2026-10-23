import Image from 'next/image';

const RecentClient = () => {
  return (
    <section className="recent-client">
      <div className="client-companies">
        <Image src="/assets/logos/ephemeral.png" alt="Ephemeral Logo" width={150} height={50} />
        <Image src="/assets/logos/wildcrafted.png" alt="Wildcrafted Logo" width={150} height={50} />
        <Image src="/assets/logos/codecraft.png" alt="Codecraft Logo" width={150} height={50} />
        <Image src="/assets/logos/convergence.png" alt="Convergence Logo" width={150} height={50} />
        <Image src="/assets/logos/imgCompress.png" alt="ImgCompress Logo" width={150} height={50} />
        <Image src="/assets/logos/epicurious.png" alt="Epicurious Logo" width={150} height={50} />
        <Image src="/assets/logos/watchtower.png" alt="Watchtower Logo" width={150} height={50} />
        <Image src="/assets/logos/renaissance.png" alt="Renaissance Logo" width={150} height={50} />
        <Image src="/assets/logos/constrastAi.png" alt="ConstrastAI Logo" width={150} height={50} />
        <Image src="/assets/logos/nietzsche.png" alt="Nietzsche Logo" width={150} height={50} />
      </div>
      <h4>Join 4,000+ companies already growing</h4>
    </section>
  )
}

export default RecentClient;