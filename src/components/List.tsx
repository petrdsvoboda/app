import * as React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import MUIList, { ListProps as MUIListProps } from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		placeholder: {
			margin: theme.spacing(2, 4),
			alignSelf: 'center',
			justifySelf: 'center',
			fontSize: '1rem',
			lineHeight: 1,
			flexGrow: 1
		}
	})
)

interface Props<T> {
	data: T[]
	itemRenderer: (item: T) => React.FC
	ListProps?: MUIListProps
	isFetching?: boolean
	fallbackText?: string
}

const List = <T extends {}>(props: Props<T>): React.FunctionComponentElement<Props<T>> => {
	const { data, itemRenderer, ListProps, isFetching, fallbackText } = props
	const classes = useStyles()

	if (isFetching) {
		return <CircularProgress className={classes.placeholder} />
	}

	if ((!data || data.length === 0) && !isFetching) {
		return (
			<Typography color="textSecondary" className={classes.placeholder}>
				{fallbackText ? fallbackText : 'No data found'}
			</Typography>
		)
	}

	return <MUIList {...ListProps}>{data.map(itemRenderer)}</MUIList>
}

export default List
