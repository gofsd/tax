import { connect } from "react-redux";
import { setMakets } from '../../actions/filter'
import ModalInner from "../../stories/components/ModalInner";

const mapDispatchToProps = dispatch => ({
    setMakets: (flag, id, value) => dispatch(setMakets(flag, id, value))
});

const mapStateToProps = (state) => ({
    data: state.mainForm.makets,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalInner);
