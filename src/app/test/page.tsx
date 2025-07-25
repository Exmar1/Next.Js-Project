import { Button, Htag, P, Tag } from '../../../components'

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
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s' color='ghost'>
				Ghost
			</Tag>
			<Tag size='m' color='red'>
				Red
			</Tag>
			<Tag size='s' color='green'>
				Green
			</Tag>
			<Tag color='primary'>Примари</Tag>
		</>
	)
}
