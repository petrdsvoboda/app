import * as React from 'react'
import clsx from 'clsx'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			marginBottom: theme.spacing(1),
			'&:last-child': {
				marginBottom: 0
			}
		},
		title: {
			lineHeight: 1
		},
		content: {
			lineHeight: 1
		},
		listItem: {
			padding: 0
		}
	})
)

interface Props {
	title: string
	children?: any
	className?: string
	noWrap?: boolean
}

const Field: React.FC<Props> = props => {
	const { title, children, className, noWrap } = props
	const classes = useStyles()
	const rootClassName = clsx(classes.root, className)

	const mapItem = React.useCallback(
		(i: any, index: number) => (
			<ListItem key={index} className={classes.listItem} disableGutters={true}>
				<Typography variant="body1" className={classes.content}>
					{i}
				</Typography>
			</ListItem>
		),
		[classes.content, classes.listItem]
	)

	if (children === undefined || children === null) return null

	let content = children
	if (typeof content === 'string' || typeof content === 'number' || noWrap) {
		content = (
			<Typography variant="body1" className={classes.content}>
				{content}
			</Typography>
		)
	} else if (typeof content === 'boolean') {
		content = (
			<Typography variant="body1" className={classes.content}>
				{content ? 'Yes' : 'No'}
			</Typography>
		)
	} else if (content instanceof Date) {
		content = (
			<Typography variant="body1" className={classes.content}>
				{content.toLocaleDateString('cs')}
			</Typography>
		)
	} else if (Array.isArray(content)) {
		if (content.length === 0) return null
		content = <List disablePadding={true}>{content.map(mapItem)}</List>
	}

	return (
		<div className={rootClassName}>
			<Typography color="textSecondary" variant="caption" className={classes.title}>
				{title}
			</Typography>
			{content}
		</div>
	)
}

export default Field
