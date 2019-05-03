// @flow
import { connect } from "react-redux";
import FilterOfDepartment from "../../stories/screens/FilterOfDepartment";





const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
    KALG: state.metadata.NDI15500009,
    KAIG: state.metadata.NDI30420000,
    KAWN: state.metadata.NDI15500009,
    KAVN: state.metadata.NDI15500009,
    KARN: state.metadata.NDI15500009,
    OBLA: state.metadata.NDI15500004,
    M01: state.metadata.M01.filter(item => item.KAWN === 1),
    M99: state.metadata.M99,
    M00: state.metadata.M00

});
export default connect(mapStateToProps, mapDispatchToProps)(FilterOfDepartment);

