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
                <h1>LOGIN</h1>
            </div>
        )
    }
}