"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const clsx_1 = require("clsx");
const List_1 = require("@material-ui/core/List");
const ListItem_1 = require("@material-ui/core/ListItem");
const Typography_1 = require("@material-ui/core/Typography");
const styles_1 = require("@material-ui/core/styles");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
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
}));
const Field = props => {
    const { title, children, className, noWrap } = props;
    const classes = useStyles();
    const rootClassName = clsx_1.default(classes.root, className);
    const mapItem = React.useCallback((i, index) => (React.createElement(ListItem_1.default, { key: index, className: classes.listItem, disableGutters: true },
        React.createElement(Typography_1.default, { variant: "body1", className: classes.content }, i))), [classes.content, classes.listItem]);
    if (children === undefined || children === null)
        return null;
    let content = children;
    if (typeof content === 'string' || typeof content === 'number' || noWrap) {
        content = (React.createElement(Typography_1.default, { variant: "body1", className: classes.content }, content));
    }
    else if (typeof content === 'boolean') {
        content = (React.createElement(Typography_1.default, { variant: "body1", className: classes.content }, content ? 'Yes' : 'No'));
    }
    else if (content instanceof Date) {
        content = (React.createElement(Typography_1.default, { variant: "body1", className: classes.content }, content.toLocaleDateString('cs')));
    }
    else if (Array.isArray(content)) {
        if (content.length === 0)
            return null;
        content = React.createElement(List_1.default, { disablePadding: true }, content.map(mapItem));
    }
    return (React.createElement("div", { className: rootClassName },
        React.createElement(Typography_1.default, { color: "textSecondary", variant: "caption", className: classes.title }, title),
        content));
};
exports.default = Field;
//# sourceMappingURL=Field.js.map