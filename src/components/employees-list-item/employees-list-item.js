import "./employees-list-item.scss"
import trash from "../../images/trash.webp"
import like from "../../images/like.jpeg"
import cookie from "../../images/cookie.png"

const EmployeesListItem = props => {
	const { name, salary, onToggle, updateSalary, increase, rise, onDelete } =
		props

	let clazz = "char"
	if (increase) {
		clazz += " increase"
	}
	if (rise) {
		clazz += " like"
	}
	return (
		<li className={clazz}>
			<span onClick={onToggle} className='char__name' data-toggle='rise'>
				{name}
			</span>
			<input
				onChange={updateSalary}
				type='text'
				defaultValue={salary + "$"}
				className='char__price'></input>
			<div className='char__icons'>
				<img
					onClick={onToggle}
					data-toggle='increase'
					className='char__сookie'
					src={cookie}
					alt='сookie'
				/>
				<img
					onClick={onDelete}
					className='char__recycle'
					src={trash}
					alt='recycle'
				/>
				<img className='char__thumb' src={like} alt='thumb' />
			</div>
		</li>
	)
}

export default EmployeesListItem
