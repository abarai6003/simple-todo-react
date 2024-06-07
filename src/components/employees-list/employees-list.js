import EmployeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.scss"

const EmployeesList = props => {
	const { charList, onToggle, onDelete, updateSalary } = props
	const elements = charList.map(item => {
		const { id, ...itemProps } = item
		return (
			<EmployeesListItem
				key={id}
				onToggle={e =>
					onToggle(id, e.currentTarget.getAttribute("data-toggle"))
				}
				updateSalary={e => updateSalary(id, e.currentTarget.value)}
				onDelete={() => onDelete(id)}
				{...itemProps}
			/>
		)
	})
	return <ul className='char-list'>{elements}</ul>
}

export default EmployeesList
