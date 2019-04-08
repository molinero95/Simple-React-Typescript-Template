import React = require("react");
import { NavLink } from "react-router-dom";

interface INavMenuProps {

}

interface INavMenuState {

}

export class NavMenu extends React.Component<INavMenuProps, INavMenuState>{
    constructor(props: INavMenuProps) {
        super(props);
    }

    public render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to={"/home"} exact activeClassName='active' className="nav-link nav-item" href="#">Home </NavLink>
                <NavLink to={"/login"} exact activeClassName='active' className="nav-link nav-item" href="#">Login </NavLink>
            </nav>
        )
    }
}