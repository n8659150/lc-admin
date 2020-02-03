/* eslint-disable */
import React, { useState, useEffect } from "react";
import fetchFromLeanCloud from "../../services/helpers";
import { Table, Breadcrumb, Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;

function Tables(props) {
    const tableName = props.name;
    let reducerInit = {};
    reducerInit[tableName] = [];
    const [columnSettings, setColumnSettings] = useState(props.tableSettings.columnConfig);
    const [tableData, setTableData] = useState([]);
    function onColumnSelectionChange(checkedValues) {
        let columnConfig = [...props.tableSettings.fixedColumnSets];
        console.log(props.tableSettings);
        props.tableSettings.selectableColumnSets.forEach(selectableColumn => {
            checkedValues.forEach(selectedValue => {
                if (selectableColumn.key === selectedValue) {
                    columnConfig.push(selectableColumn);
                }
            });
        });
        setColumnSettings(columnConfig);
    }
    function onTableChange(pagination, filters, sorter, extra) {
        if (filters) {
            let filteredData = tableData.filter(data => {
                return filters["attributes.category"].length
                    ? filters["attributes.category"].some(
                          filterValue => filterValue === data.attributes.category
                      )
                    : tableData;
            });
            setTableData(filteredData);
        }
    }
    useEffect(() => {
        fetchFromLeanCloud(props.tableName).then(tableData => {
            setTableData(tableData);
        });
    }, []);
    return (
        <div>
            <div className="ts-table-headbar">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a>首 页</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a>用户管理</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <CheckboxGroup
                    options={props.tableSettings.antdSelectOptionMapping}
                    defaultValue={props.tableSettings.antdDefaultSelected}
                    onChange={onColumnSelectionChange}
                />
            </div>
            <div className="ts-table">
                {tableData && (
                    <Table
                        columns={columnSettings}
                        onChange={onTableChange}
                        dataSource={tableData}
                        rowKey="id"
                        pagination={{
                            total: tableData.length,
                            showTotal: (total, range) =>
                                `${range[0]}-${range[1]} of ${total} items`,
                            pageSize: 13,
                            defaultCurrent: 1
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default Tables;
