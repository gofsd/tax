// @flow
import { connect } from "react-redux";

import MaquetteForm from "../../stories/components/MaquetteForm";


const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
    forestry: 1,
    quartalquarter: 1,
    saw: state.mainForm.selectedSaw,
    metadata: state.metadata,
    maquetteName: state.mainForm.name,
    NDI10200003: state.metadata.NDI10200003,
});
export default connect(mapStateToProps, mapDispatchToProps)(MaquetteForm);
