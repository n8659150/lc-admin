import { columnConfig } from "./columnConfig";
import { antdSelectOptionMapping } from "./antdSelectOptionMapping";
const fixedColumnSets = columnConfig.filter(column => column.selectable === false);
const selectableColumnSets = columnConfig.filter(column => column.selectable !== false);
const antdDefaultSelected = antdSelectOptionMapping.map(option => option.value);
export const usersTableSettings = {
    columnConfig,
    fixedColumnSets,
    selectableColumnSets,
    antdSelectOptionMapping,
    antdDefaultSelected
};
