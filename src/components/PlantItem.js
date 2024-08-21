import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({name,cover, id, light, water}) {
    return (<div>
                <li key={`${name}-${id}`} className='lmj-plant-item'>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
                    {name}
                    <CareScale careType="water" scaleValue={water} />
                    <CareScale careType="light" scaleValue={light} />
                </li>
    </div>)
}

export default PlantItem