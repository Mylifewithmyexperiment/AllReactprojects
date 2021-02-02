import React from 'react';

class LogoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageName : null,
            imagePath : this.props.imagePath,
            subTitle : this.props.subTitle,
            error: false,
            isLoaded: false,
            result : []
        }
    }

    componentDidMount1() {
        fetch("http://localhost:1337/logo-component")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded : true,
                result: result,
                imageName : result.imageName,
                subTitle : result.subtitle,
                imagePath : result.image
              });
            },
            /*
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }*/
        )
    }
  
    render() {

        return(
            <div>
                 <a className="navbar-brand mr-auto mr-lg-0" href="/"><img src='/images/logo-stl.png' alt="logo" /><span>Marketplace</span></a>
            </div>     
        )
        /*const {  imageName , imagePath, subTitle , error, isLoaded, result} = this.state;
        
        if (error) {
            return <div>Loading...</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            let value;
            return (
                <div>
                    {this.state.result.image.map((data,index) => {value = data.url;})}               
                    <a className="navbar-brand mr-auto mr-lg-0" href="/"><img src='/images/logo.pna' alt="logo" /><span>{this.state.subTitle}</span></a>
                </div>  
            );
        }*/
    }
}

export default LogoComponent;