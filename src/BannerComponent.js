import React from 'react'
import PostData from './Data/post.json';
import { Link } from 'react-router-dom';



class BannerComponent extends React.Component {

    constructor(props)
    {
          super(props);

        this.state={
            activeindex:0,
            length:PostData.length,
            bannerDetail:PostData[0]
          
          };
    }

    componentDidMount()
    {
      setInterval(()=>{
        let index=this.state.activeindex;
        let length=this.state.length;
       
        if(index<length-1)
        {
            this.setState({
              bannerDetail:PostData[index+1],
              activeindex:index+1
            });
           

        }
        else{
          this.setState({
            activeindex:0
          });
        }
        } , 5000);

    }
      

    render() {

        return(

         <section id="myCarousel" className="carousel slide" data-ride="carousel">
           <Link to={`/product-detail`}>
          <div className="carousel-inner">       
            <div className="carousel-item active" style={{backgroundImage: `url(${this.state.bannerDetail.backgroundImage})`}}>
              <div className="container">
                <div className="carousel-caption mw-480 text-left">
                  <h1 className="text-white"><strong className="text-pink">{this.state.bannerDetail.text}</strong><br />as a service</h1>
                   <p>{this.state.bannerDetail.description}</p>
                  <a className="btn btn-lg btn-pink"  role="button">Know more</a>
                </div>
              </div>
            </div>
          </div>
          </Link> 
          </section>
        );
    }
}

export default BannerComponent;

//<div>{this.state.backgroundImage}</div>