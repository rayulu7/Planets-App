// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsDetails} = props
  const {name, description, imageUrl} = planetsDetails

  return (
    <div className="app-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
