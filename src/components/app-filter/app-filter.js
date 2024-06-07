import "./app-filter.scss"
import { useState } from "react"

const initialButtonsData = [
	{
		name: "all",
		label: "Все сотрудники"
	},
	{
		name: "rise",
		label: "На повышение"
	},
	{
		name: "moreThan1000",
		label: "ЗП > 1000$"
	}
]

const AppFilter = props => {
	const [buttonsData, setButtonsData] = useState(initialButtonsData)
	const { onFilter, filter } = props
	const buttonsElem = buttonsData.map(item => {
		let clazz = "emp-filter__btn"
		if (item.name === filter) {
			clazz += " emp-filter__btn_active"
		}
		return (
			<button
				type='button'
				key={item.name}
				onClick={() => onFilter(item.name)}
				className={clazz}>
				{item.label}
			</button>
		)
	})
	return <div className='emp-filter'>{buttonsElem}</div>
}

export default AppFilter
