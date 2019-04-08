import React = require("react");

interface IHomeProps{
    
}

interface IHomeState{

}

export class Home extends React.Component<IHomeProps, IHomeState>{
    constructor(props: IHomeProps){
        super(props);
        this.setState({});
    }


    public render(){
        return (
            <div>
                Soy el home
            </div>
        )
    }
}