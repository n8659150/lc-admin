import moment from 'moment';
moment.locale('zh-cn');
const commonFields = [
    {
        title: "创建时间",
        dataIndex: "createdAt",
        key: "createdAt",
        render: createdAt => moment(createdAt).toNow(),
        width: 150,
    },
    {
        title: "修改时间",
        dataIndex: "updatedAt",
        key: "updatedAt",
        render: updatedAt => moment(updatedAt).toNow(),
        width: 150,
    },
]
export const columnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220,
    },
    {
        title: "昵称",
        dataIndex: "attributes.nick",
        key: "attributes.nick",
        width: 160,
    },
    {
        title: "邮箱",
        dataIndex: "attributes.mail",
        key: "attributes.mail",
        width: 200,
        selectable: false
    },
    {
        title: "系统信息",
        dataIndex: "attributes.ua",
        key: "attributes.ua",
    },
    {
        title: "内容",
        dataIndex: "attributes.comment",
        key: "attributes.comment",
        ellipsis: true,
    },
    ...commonFields,
]

const fixedColumnSets = columnConfig.filter((column) => !column.selectable);
const selectableColumnSets = columnConfig.filter((column) => column.selectable);
const antdSelectOptionMapping = [
    {
        label: "id",
        value: "id"
    },
    {
        label: "邮箱",
        value: "attributes.mail"
    },
    {
        label: "系统信息",
        value: "attributes.ua"
    },
    {
        label: "内容",
        value: "attributes.comment"
    },
    {
        label: "创建时间",
        value: "createdAt"
    },
    {
        label: "修改时间",
        value: "updatedAt"
    }
];

export const commentsTableSettings = {
    columnConfig,
    fixedColumnSets,
    selectableColumnSets,
    antdSelectOptionMapping
}
