import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface P_props
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?: 's' | 'm' | 'l'
	children: ReactNode
}
