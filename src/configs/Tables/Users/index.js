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
export const UsersColumnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220,
    },
    {
        title: "用户名",
        dataIndex: "attributes.username",
        key: "attributes.username",
        width: 100,
        fixed: true,
    },
    {
        title: "邮箱",
        dataIndex: "attributes.email",
        key: "attributes.email",
        width: 200,
    },
    {
        title: "邮箱已验证",
        dataIndex: "attributes.emailVerified",
        key: "attributes.emailVerified",
        width: 100,
        render: emailVerified => emailVerified ? "是" : "否"
    },
    {
        title: "手机已验证",
        dataIndex: "attributes.mobileVerified",
        key: "attributes.mobileVerified",
        width: 100,
        render: mobileVerified => mobileVerified ? "是" : "否"
    },
    ...commonFields,
]