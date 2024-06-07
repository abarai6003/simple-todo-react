import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import EmployeesList from "../employees-list/employees-list"
import EmployeesAddForm from "../employees-add-form/employees-add-form"
import { useState } from "react"
import { StrictMode } from "react"
import "./app.scss"

const employees = [
	{
		id: 1,
		name: "Alex B.",
		salary: 800,
		increase: false,
		rise: false
	},
	{
		id: 2,
		name: "Andrew G.",
		salary: 1200,
		increase: false,
		rise: false
	},
	{
		id: 3,
		name: "John R.",
		salary: 1800,
		increase: false,
		rise: false
	}
]
let maxId = 4
const App = () => {
	const [data, setData] = useState(employees)
	const [term, setTerm] = useState("")
	const [filter, setFilter] = useState("all")

	const updateSalary = (id, salary) => {
		const newSalary = parseInt(salary, 10)

		setData(data => {
			return data.map(item => {
				if (item.id === id) {
					return {
						...item,
						salary: newSalary
					}
				}
				return item
			})
		})
	}

	const onSearch = term => {
		setTerm(term)
	}

	const onFilter = filter => {
		setFilter(filter)
	}

	const onAddChar = ({ name, salary }) => {
		if (!name) {
			return
		}
		const id = maxId++
		setData(data => {
			return [
				...data,
				{
					id: id,
					name,
					salary,
					increase: false,
					rise: false
				}
			]
		})
	}

	const onToggle = (id, prop) => {
		setData(data => {
			return data.map(item => {
				if (item.id === id) {
					return {
						...item,
						[prop]: !item[prop]
					}
				}
				return item
			})
		})
	}

	const updateSearchedData = (data, term) => {
		return data.filter(item => item.name.indexOf(term) > -1)
	}

	const updateFilteredData = (data, filter) => {
		switch (filter) {
			case "rise":
				return data.filter(item => item.rise)
			case "moreThan1000":
				return data.filter(item => item.salary > 1000)
			default:
				return data
		}
	}

	const onDelete = id => {
		setData(data => {
			return data.filter(item => item.id !== id)
		})
	}

	const charCount = data.length
	const charIncreasedCount = data.filter(item => item.increase).length

	const filteredData = updateSearchedData(
		updateFilteredData(data, filter),
		term
	)
	return (
		<StrictMode>
			<div className='app'>
				<AppInfo
					charCount={charCount}
					charIncreasedCount={charIncreasedCount}
				/>
				<div className='app__search'>
					<SearchPanel onSearch={onSearch} />
					<AppFilter onFilter={onFilter} filter={filter} />
				</div>

				<div className='app__chars'>
					<div className='app__chars-wrapper'>
						<EmployeesList
							charList={filteredData}
							onToggle={onToggle}
							onDelete={onDelete}
							updateSalary={updateSalary}
						/>
					</div>
				</div>
				<EmployeesAddForm onAddChar={onAddChar} />
			</div>
		</StrictMode>
	)
}

export default App
