import React = require("react");

interface ILoginProps{

}

interface ILoginState{

}

export class Login extends React.Component<ILoginProps, ILoginState>{
    constructor(props: ILoginProps){
        super(props);
    }

    public render(){
        return (
            <div>
                <h3>Login</h3>
            </div>
        )
    }
}