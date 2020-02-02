import React from "react";
import { Tag } from "antd";
import { commonFields } from "../commonFields";
export const columnConfig = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 220
    },
    {
        title: "作者",
        dataIndex: "attributes.username",
        key: "attributes.username",
        width: 100,
        selectable: false
    },
    {
        title: "类别",
        dataIndex: "attributes.category",
        key: "attributes.category",
        filters: [
            { text: "GeekTalk", value: "GeekTalk" },
            { text: "GeekToBuy", value: "GeekToBuy" },
            { text: "GeekCode", value: "GeekCode" },
            { text: "GeekLove", value: "GeekLove" }
        ],
        width: 100
    },
    {
        title: "内容",
        dataIndex: "attributes.content",
        key: "attributes.content",
        ellipsis: true
    },
    {
        title: "标签",
        dataIndex: "attributes.tags",
        key: "attributes.tags",
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 3 ? "geekblue" : "green";
                    return (
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
            </span>
        ),
        width: 200
    },
    {
        title: "分享数",
        dataIndex: "attributes.shareCount",
        key: "attributes.shareCount",
        width: 90
    },
    {
        title: "点赞数",
        dataIndex: "attributes.upCount",
        key: "attributes.upCount",
        width: 90
    },
    ...commonFields
];
