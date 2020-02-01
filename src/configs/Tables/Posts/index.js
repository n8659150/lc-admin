import React from "react";
import { Tag } from 'antd';
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
const columnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220,
    },
    {
        title: "作者",
        dataIndex: "attributes.username",
        key: "attributes.username",
        width: 100,
        selectable: false,
    },
    {
        title: "类别",
        dataIndex: "attributes.category",
        key: "attributes.category",
        filters: [{text: "GeekTalk", value:"GeekTalk"}, {text: "GeekToBuy", value:"GeekToBuy"}, {text: "GeekCode", value:"GeekCode"}, {text: "GeekLove", value:"GeekLove"}],
        width: 100,
    },
    {
        title: "内容",
        dataIndex: "attributes.content",
        key: "attributes.content",
        ellipsis: true,
    },
    {
        title: "标签",
        dataIndex: "attributes.tags",
        key: "attributes.tags",
        render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 3 ? 'geekblue' : 'green';
                return (
                  <Tag color={color} key={tag}>
                    { tag }
                  </Tag>
                );
              })}
            </span>
        ),
        width: 200,
    },
    {
        title: "分享数",
        dataIndex: "attributes.shareCount",
        key: "attributes.shareCount",
        width: 90,
    },
    {
        title: "点赞数",
        dataIndex: "attributes.upCount",
        key: "attributes.upCount",
        width: 90,
    },
    ...commonFields,
];
const fixedColumnSets = columnConfig.filter((column) => !column.selectable);
const selectableColumnSets = columnConfig.filter((column) => column.selectable);
const antdSelectOptionMapping = [
    {
        label: "id",
        value: "id"
    },
    {
        label: "类别",
        value: "attributes.category"
    },
    {
        label: "内容",
        value: "attributes.content"
    },
    {
        label: "标签",
        value: "attributes.tags"
    },
    {
        label: "分享数",
        value: "attributes.shareCount"
    },
    {
        label: "点赞数",
        value: "attributes.upCount"
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

export const postTableSettings = {
    columnConfig,
    fixedColumnSets,
    selectableColumnSets,
    antdSelectOptionMapping
}