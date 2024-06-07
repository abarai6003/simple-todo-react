import "./app-info.scss"

const AppInfo = ({ charCount, charIncreasedCount }) => {
	return (
		<div className='app-info'>
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {charCount}</h2>
			<h2>Премию получат: {charIncreasedCount}</h2>
		</div>
	)
}

export default AppInfo
