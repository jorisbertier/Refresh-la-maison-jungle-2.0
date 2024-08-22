import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({name,cover, id, light, water}) {

    function handleClick(e) {
        console.log(`✨ Ceci est mon event sur la plante ${name}:`, e)
    }
    return (<div>
                <li key={`${name}-${id}`} className='lmj-plant-item' onClick={() => handleClick(name)}>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
                    {name}
                    <CareScale careType="water" scaleValue={water} />
                    <CareScale careType="light" scaleValue={light} />
                </li>
    </div>)
}
// 
export default PlantItem