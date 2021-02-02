import React from 'react'
import Productdata from './Data/Productdetail.json';

class ServiceComponent extends React.Component {



  constructor(props)
  {
        super(props);

      this.state={
          cardDetail:Productdata 
        };
  }

    render() {

        return (
            <div>
            <section className="product_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="product_slider">
                        {this.state.cardDetail.map((productDetail,index)=>(
                            <div  key={index} >
                              
                                <div className="card">
                                    <div className="card-body"  style={{backgroundImage: `url(${productDetail.backgroundImage})`}}>
                                        <div className="mt-auto">
                                          <h5 className="card-title">{productDetail.text}</h5>
                                            <p className="card-text">{productDetail.description}</p>

                                            <a href="#" className="btn btn-primary btn-pink">Know more</a>
                                        </div>
                                    </div>
                                </div>
                              
                               </div>
                                 ))};
                         
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        );
    }

}

export default ServiceComponent;



/*const styles1= {
    backgroundImage: 'url(/images/network_slicing.png)',
  }

const styles2 = {
    backgroundImage: 'url(/images/cloud_applications.png)',
    backgroundPosition: 'center right -60px',
  }

  const styles3 = {
    backgroundImage: 'url(/images/Enabler_services.png)'
  }

  const styles4= {
    backgroundImage: ' url(/images/Rf_planning.png)',
    backgroundPosition: 'right -100px center',
  }

  const styles5= {
    backgroundImage: ' url(/images/network_slicing.png)'
  }

  const styles6= {
    backgroundImage: ' url(/images/cloud_applications.png)',
    backgroundPosition: 'center right -60px',
  }
  


  const styles7= {
    backgroundImage: ' url(/images/Enabler_services.png)'
  }

  const styles8= {
    backgroundImage: ' url(/images/Rf_planning.png)',
    backgroundPosition: 'right -100px center',
  }*/
