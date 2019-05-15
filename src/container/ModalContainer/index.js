import { connect } from "react-redux";
import {setMakets, setSaw} from '../../actions/filter'
import ModalInner from "../../stories/components/ModalInner";

const mapDispatchToProps = dispatch => ({
    setMakets: (flag, id, value) => dispatch(setMakets(flag, id, value)),
    setSaw: (id, value) => dispatch(setSaw(id, value))
});

const mapStateToProps = (state) => ({
    data: state.mainForm.saws[state.mainForm.selectedSaw],
    saws: state.mainForm.saws,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalInner);
