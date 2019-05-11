import { connect } from "react-redux";

import MarkupScreen from '../../stories/screens/MarkupScreen'
import { someAction } from "../../actions/markup";

const mapDispatchToProps = dispatch => ({
    someAction: (id) => dispatch(someAction(id))
});

const mapStateToProps = (state) => ({
    prop: state.markup.prop,
});

export default connect(mapStateToProps, mapDispatchToProps)(MarkupScreen)
