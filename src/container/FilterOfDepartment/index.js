// @flow
import { connect } from "react-redux";
import FilterOfDepartment from "../../stories/screens/FilterOfDepartment";
import { selectList, insertRow, updateRow, deleteRows, insertOrUpdate, setForesteries, selectQuartals, loadMetadata, setSaws } from "../../actions/dbApi";
import { setFilter } from "../../actions/maquette";

const mapDispatchToProps = dispatch => ({
    select: (tableName = "") => dispatch(selectList(tableName)),
    insertItem: (tableName = "", params = {}) => dispatch(insertRow(tableName, params)),
    updateItem: (tableName = "", params = {}) => dispatch(updateRow(tableName, params)),
    deleteItems: (tableName = "", params = {}) => dispatch(deleteRows(tableName, params)),
    insertOrUpdate: (tableName = "", params = {}) => dispatch(insertOrUpdate(tableName, params)),
    setForestry: () =>  dispatch(setForesteries()),
    setQuartals: (params) => dispatch(selectQuartals(params)),
    setMeta: () => dispatch(loadMetadata()),
    setFilter: (params) => dispatch(setFilter(params)),
    setSaw: async() => await dispatch(setSaws())
});

const mapStateToProps = state => ({
    seeded: state.init.seeded,
    KAIG: state.metadata.NDI30420000,
    //M01: state.metadata.M01.filter(item => item.KAWN === 1),
    forestries: state.init.forestries,
    quartels: state.init.quartels,
    M99: state.metadata.M99,
    M00: state.metadata.M00

});
export default connect(mapStateToProps, mapDispatchToProps)(FilterOfDepartment);

