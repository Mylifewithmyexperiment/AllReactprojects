import React from 'react';
import Brands from './Data/Brand.json';

class BrandComponent extends React.Component {

    render() {
        return (
        
            <section className="brand-section">
            <div className="container">
                <div className="row">
                {Brands.map((brand,index)=>(
                    <div className="col-lg-2 col-md-3 col-sm-6"  key={index}>
                        <img src={brand.image} className="img-responsive"   alt="Articona"/>
                    </div>
                ))};
                   
                </div>
            </div>
           </section>
        );
    }
}

export default BrandComponent;