import { Button, Htag, P } from '../../../components'

export default function TestPage() {
	return (
		<>
			<Htag tag='h1'>Текст</Htag>

			<P size='14px'>Параграф 14px</P>
			<P size='16px'>Параграф 16px</P>
			<P size='18px'>Параграф 18px</P>
			<Button appearance='primary' arrow='right'>
				Кнопка
			</Button>
			<Button appearance='ghost' arrow='down'>
				Кнопка
			</Button>
		</>
	)
}
