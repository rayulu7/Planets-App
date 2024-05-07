// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-app" data-testid="planets">
      <h1 className="heading-1">PLANETS</h1>
      <Slider className="slider">
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetsDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
