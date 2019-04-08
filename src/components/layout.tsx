import React = require("react");
import { NavMenu } from "./navMenu";

interface ILayoutProps{
    children?: React.ReactNode;
}

interface ILayoutState{

}


export class Layout extends React.Component<ILayoutProps, ILayoutState>{
    constructor(props:ILayoutProps){
        super(props);
    }


    public render(){
        return (
            <div>
                <NavMenu/>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}