import React, {Component} from 'react';
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

class Layout extends Component {

    componentDidMount() {
        const {title = "商城"} = this.props;
        document.title = title;
    }

    render() {
        const {children, showTopBar, showBottomBar} = this.props;
        console.log("children", children);
        return (
            <div>
                {showTopBar && <TopBar/>}
                {this.props.children}
                {showBottomBar && <BottomBar/>}
            </div>

        );
    }
}

export default Layout;