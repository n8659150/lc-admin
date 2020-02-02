import { columnConfig } from "./columnConfig";
import { antdSelectOptionMapping } from "./antdSelectOptionMapping";
const fixedColumnSets = columnConfig.filter(column => !column.selectable);
const selectableColumnSets = columnConfig.filter(column => column.selectable);
export const usersTableSettings = {
    columnConfig,
    fixedColumnSets,
    selectableColumnSets,
    antdSelectOptionMapping
};
