import React from 'react';
import FeaturedService from './Data/Featuredservice.json';


class FeaturedserviceComponent extends React.Component {



    constructor(props)
    {
          super(props);
  
        this.state={
            featureServiceDetail:FeaturedService 
          };
    }



    render() {
        return (
            <section className="featured_services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-white"><strong className="text-pink">Featured</strong> Services</h2>
                        <div className="service_slider">
                        {this.state.featureServiceDetail.map((services,index)=>(
                         
                            <div  key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <img src={services.image} alt="Network Security" />
                                        <h5 className="card-title">{services.title}</h5>
                                    </div>
                                </div>
                            </div>

                              ))};
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default FeaturedserviceComponent;