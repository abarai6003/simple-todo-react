import "./employees-add-form.scss"
import { useState } from "react"

const EmployeesAddForm = props => {
	const [name, setName] = useState()
	const [salary, setSalary] = useState()
	const onChange = e => {
		const fieldName = e.target.name,
			value = e.target.value

		switch (fieldName) {
			case "name":
				setName(value)
				break
			default:
				setSalary(value)
		}
	}

	const onSubmit = e => {
		e.preventDefault()
		props.onAddChar({ name, salary })
		setName("")
		setSalary("")
	}
	return (
		<div className='app-adding'>
			<h2>Добавьте нового сотрудника</h2>
			<form onSubmit={onSubmit} action='#'>
				<div className='app-adding__wrapper'>
					<input
						value={name}
						onChange={onChange}
						name='name'
						type='text'
						placeholder='Как его зовут?'
					/>
					<input
						value={salary}
						onChange={onChange}
						name='salary'
						type='text'
						placeholder='Какая ЗП в $?'
					/>
					<button>Добавить</button>
				</div>
			</form>
		</div>
	)
}

export default EmployeesAddForm
