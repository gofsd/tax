// @flow
import { connect } from "react-redux";
import FilterOfDepartment from "../../stories/screens/FilterOfDepartment";





const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
    KAIG: state.metadata.NDI30420000,
    //M01: state.metadata.M01.filter(item => item.KAWN === 1),
    M99: state.metadata.M99,
    M00: state.metadata.M00

});
export default connect(mapStateToProps, mapDispatchToProps)(FilterOfDepartment);

