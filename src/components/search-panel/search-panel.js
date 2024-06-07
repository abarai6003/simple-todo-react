import "./search-panel.scss"
import { useState } from "react"

const SearchPanel = props => {
	const [term, setTerm] = useState("")

	const onChangeText = e => {
		const term = e.target.value
		setTerm(() => term)
		props.onSearch(term)
	}

	return (
		<input
			value={term}
			onChange={onChangeText}
			className='emp-search'
			type='text'
			placeholder='Найти сотрудника'
		/>
	)
}

export default SearchPanel
