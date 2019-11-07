import * as React from 'react';
import { ListProps as MUIListProps } from '@material-ui/core/List';
interface Props<T> {
    data: T[];
    itemRenderer: (item: T) => React.FC;
    ListProps?: MUIListProps;
    isFetching?: boolean;
    fallbackText?: string;
}
declare const List: <T extends {}>(props: Props<T>) => React.FunctionComponentElement<Props<T>>;
export default List;
