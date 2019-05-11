// @flow
import { connect } from "react-redux";

import BlankPage from "../../stories/screens/MarkupScreen";
import MForm from "../MaquetteForm";
import { changeForm, createMakets } from "../../actions/filter";


const mapDispatchToProps = dispatch => ({
	changeForm: (name) => dispatch(changeForm(name)),
	createMakets: (M, children) => dispatch(createMakets(M, children))
});

const mapStateToProps = state => ({
	KAVN: state.metadata.NDI15500009,
	KARN: state.metadata.NDI15500009,
	KAVS: state.metadata.NDI15500009,

	KAKZ: state.metadata.NDI10200001,
	KAKI: state.metadata.NDI10100002,
	KAZU: state.metadata.NDI10100003,

	KAVQ: state.metadata.NDI15500009,
	PPGH: state.metadata.NDI15500009,
	MForm,
	maket_availability: state.metadata.maket_availability,

	makets: state.mainForm.makets,

	selectedKakz: 60,
	// quarter_num: state.filter.kv_num,
	// forestry_name: state.filter.name,
	// department_num: state.department,
});
export default connect(mapStateToProps, mapDispatchToProps)(BlankPage);

