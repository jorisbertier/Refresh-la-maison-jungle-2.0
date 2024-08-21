import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    let messageWatering = ""

	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

    switch (scaleValue) {
        case 1:
            messageWatering = "Cette plante requiert peu d'arrosage"
            break;
        case 2:
            messageWatering = "Cette plante requiert modérement d'arrosage"
            break;
        case 3:
            messageWatering = "Cette plante requiert beaucoup de lumière d'arrosage"
            break;
        default:
            console.log("No value");
            break;
    }

        function handleClick() {
            alert(`${messageWatering}`)
        }

	return (
		<div onClick={handleClick}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale