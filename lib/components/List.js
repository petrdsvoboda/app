"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const CircularProgress_1 = require("@material-ui/core/CircularProgress");
const List_1 = require("@material-ui/core/List");
const Typography_1 = require("@material-ui/core/Typography");
const styles_1 = require("@material-ui/core/styles");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    placeholder: {
        margin: theme.spacing(2, 4),
        alignSelf: 'center',
        justifySelf: 'center',
        fontSize: '1rem',
        lineHeight: 1,
        flexGrow: 1
    }
}));
const List = (props) => {
    const { data, itemRenderer, ListProps, isFetching, fallbackText } = props;
    const classes = useStyles();
    if (isFetching) {
        return React.createElement(CircularProgress_1.default, { className: classes.placeholder });
    }
    if (data === null || data === undefined || (data.length === 0 && !isFetching)) {
        return (React.createElement(Typography_1.default, { color: "textSecondary", className: classes.placeholder }, fallbackText ? fallbackText : 'No data found'));
    }
    return React.createElement(List_1.default, Object.assign({}, ListProps), data.map(itemRenderer));
};
exports.default = List;
//# sourceMappingURL=List.js.map