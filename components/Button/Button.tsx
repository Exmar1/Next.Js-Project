import cn from 'classnames'
import styles from './Button.module.css'
import { ButtonProps } from './Button_props'
import ArrowIcon from './arrow.svg'

export const Button = ({
	appearance,
	children,
	arrow = 'none',
	className,
	...props
}: ButtonProps): React.JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow == 'down',
						[styles.right]: arrow == 'right',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	)
}
