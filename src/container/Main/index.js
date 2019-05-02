// @flow
import * as React from "react";
import { connect } from "react-redux";
import App from "../../App"
import * as db from "../../actions/db"
import { initMetadata } from "../../actions/init"



class MainContainer extends React.Component {
	componentDidMount() {
        this.props.initMetadata()
        setTimeout(() => {
            initMetadata()
        }, 1000);
    }
    
	render() {
		return <App {...this.props}/>;
	}
}




const mapDispatchToProps = dispatch => ({
    initMetadata: () => dispatch(initMetadata())
})

const mapStateToProps = state => ({
    defaultScreen: state.navigation.defaultScreen
});
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

