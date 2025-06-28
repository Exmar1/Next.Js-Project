import { Button, Htag } from '../../../components'

export default function TestPage() {
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow='right'>
				Кнопка
			</Button>
			<Button appearance='ghost' arrow='down'>
				Кнопка
			</Button>
		</>
	)
}
