import { connect } from "react-redux";
import Saw from "../../stories/screens/Saw";
import {initMetadata, importForestries} from "../../actions/init";
import {selectList} from "../../actions/dbApi";
import {getForestries} from "../../actions/api";

const mapDispatchToProps = dispatch => ({
    initMetadata: () => dispatch(initMetadata()),
    select: (tableName = "") => dispatch(selectList(tableName)),
    importForestries: () => dispatch(importForestries()),

});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Saw);
