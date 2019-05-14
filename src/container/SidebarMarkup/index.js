import * as React from "react";
import SidebarM from "../../stories/screens/SidebarMarkup";


export default class SidebarContainer extends React.Component {
	render() {
		return <SidebarM navigation={this.props.navigation} />;
	}
}
