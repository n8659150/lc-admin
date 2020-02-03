/* eslint-disable */
import React, { useState, useEffect } from "react";
import fetchFromLeanCloud from "../../services/helpers";
import { Table, Checkbox, Input } from "antd";
const CheckboxGroup = Checkbox.Group;
const { Search } = Input;

function Tables(props) {
    const tableName = props.name;
    let reducerInit = {};
    reducerInit[tableName] = [];
    const [columnSettings, setColumnSettings] = useState(props.tableSettings.columnConfig);
    const [tableData, setTableData] = useState([]);
    const [rawData, setRawData] = useState([]);
    function onTableSearch(inputValue) {
        if (!inputValue) return;
        let filteredData = [];
        rawData.forEach(data => {
            Object.values(data.attributes).forEach(value => {
                if (`${value}`.includes(inputValue)) {
                    filteredData.push(data);
                }
            })
        })
        setTableData([...new Set(filteredData)]);
        
    }
    function onColumnSelectionChange(checkedValues) {
        let columnConfig = [...props.tableSettings.fixedColumnSets];
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
        console.log(filters);
        if (filters) {
            let filteredData = rawData.filter(data => {
                return filters["attributes.category"].length
                    ? filters["attributes.category"].some(
                          filterValue => filterValue === data.attributes.category
                      )
                    : rawData;
            });
            setTableData(filteredData);
        }
    }
    useEffect(() => {
        fetchFromLeanCloud(props.tableName).then(tableData => {
            setRawData(tableData);
            setTableData(tableData);
        });
    }, []);
    return (
        <div>
            <div className="ts-table-headbar">
                <CheckboxGroup
                    options={props.tableSettings.antdSelectOptionMapping}
                    defaultValue={props.tableSettings.antdDefaultSelected}
                    onChange={onColumnSelectionChange}
                />
                <Search
                    placeholder="输入关键字搜索"
                    // enterButton="Search"
                    enterButton
                    style={{ width: 340 }}
                    onSearch={value => onTableSearch(value)}
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
