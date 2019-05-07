// @flow
import { connect } from "react-redux";

import MaquetteForm from "../../stories/components/MaquetteForm";


const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
    forestry: 1,
    quartalquarter: 1,
    saw: 1,
    metadata: state.metadata,
    maquetteName: state.mainForm.name
});
export default connect(mapStateToProps, mapDispatchToProps)(MaquetteForm);
