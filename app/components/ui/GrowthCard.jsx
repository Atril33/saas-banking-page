

const GrowthCard = ({ value, metric, text }) => {
  return (
    <div>
      <h3>{value} <span>{metric}</span></h3>
      <h4>{text}</h4>
    </div>
  )
}

export default GrowthCard