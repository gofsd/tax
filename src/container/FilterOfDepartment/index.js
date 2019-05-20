// @flow
import { connect } from "react-redux";
import FilterOfDepartment from "../../stories/screens/FilterOfDepartment";
import { selectList, insertRow, updateRow, deleteRows, insertOrUpdate } from "../../actions/dbApi";


const mapDispatchToProps = dispatch => ({
    select: (tableName = "") => dispatch(selectList(tableName)),
    insertItem: (tableName = "", params = {}) => dispatch(insertRow(tableName, params)),
    updateItem: (tableName = "", params = {}) => dispatch(updateRow(tableName, params)),
    deleteItems: (tableName = "", params = {}) => dispatch(deleteRows(tableName, params)),
    insertOrUpdate: (tableName = "", params = {}) => dispatch(insertOrUpdate(tableName, params))
});

const mapStateToProps = state => ({
    KAIG: state.metadata.NDI30420000,
    //M01: state.metadata.M01.filter(item => item.KAWN === 1),
    forestries: state.init.forestries,
    M99: state.metadata.M99,
    M00: state.metadata.M00

});
export default connect(mapStateToProps, mapDispatchToProps)(FilterOfDepartment);

