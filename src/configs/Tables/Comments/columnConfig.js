import { commonFields } from "../commonFields";
export const columnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220
    },
    {
        title: "昵称",
        dataIndex: "attributes.nick",
        key: "attributes.nick",
        width: 160
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
        key: "attributes.ua"
    },
    {
        title: "内容",
        dataIndex: "attributes.comment",
        key: "attributes.comment",
        ellipsis: true
    },
    ...commonFields
];
