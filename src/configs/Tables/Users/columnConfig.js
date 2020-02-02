import { commonFields } from "../commonFields";
export const columnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220
    },
    {
        title: "用户名",
        dataIndex: "attributes.username",
        key: "attributes.username",
        width: 100,
        selectable: false
    },
    {
        title: "邮箱",
        dataIndex: "attributes.email",
        key: "attributes.email",
        width: 200
    },
    {
        title: "邮箱已验证",
        dataIndex: "attributes.emailVerified",
        key: "attributes.emailVerified",
        width: 100,
        render: emailVerified => (emailVerified ? "是" : "否")
    },
    {
        title: "手机已验证",
        dataIndex: "attributes.mobileVerified",
        key: "attributes.mobileVerified",
        width: 100,
        render: mobileVerified => (mobileVerified ? "是" : "否")
    },
    ...commonFields
];
