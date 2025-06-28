import cn from 'classnames'
import React from 'react'
import { P_props } from './P_props'
import styles from './p.module.css'

export const P = ({
	size = 'm',
	children,
	className,
	...props
}: P_props): React.JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.l]: size == 'l',
			})}
			{...props}
		>
			{children}
		</p>
	)
}
