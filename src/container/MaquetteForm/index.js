// @flow
import { connect } from "react-redux";
import { generateForm } from "../../actions/maquette";
import MaquetteForm from "../../stories/components/MaquetteForm";


const mapDispatchToProps = dispatch => ({
    generateForm: () => dispatch(generateForm())
});

const mapStateToProps = state => ({
    forestry: 1,
    quartalquarter: 1,
    saw: state.mainForm.selectedSaw,
    cur: true,
    metadata: state.metadata,
    maquetteName: state.mainForm.name,
    NDI10200003: state.metadata.NDI10200003,
    struct: state.init.struct,
    form: state.mainForm
});
export default connect(mapStateToProps, mapDispatchToProps)(MaquetteForm);
