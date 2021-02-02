import React from 'react';


class Office365ImageComponent extends React.Component {

    render() {
        return (
        

            <div className="product_carousel">
            <div className="row">
                <div className="col-2">
                    <div className="carousel carousel-nav" data-flickity='{"asNavFor": ".carousel-main", "draggable": false, "percentPosition": false, "groupCells": "100%", "pageDots": false }'>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e1.png" alt="Office 365 Enterprise E1" className="img-fluid"/></div>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e3.jpg" alt="Office 365 Enterprise E3" className="img-fluid"/></div>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e5.jpg" alt="Office 365 Enterprise E5" className="img-fluid"/></div>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e1.png" alt="Office 365 Enterprise E1" className="img-fluid"/></div>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e3.jpg" alt="Office 365 Enterprise E3" className="img-fluid"/></div>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e5.jpg" alt="Office 365 Enterprise E5" className="img-fluid"/></div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="carousel carousel-main" data-flickity='{"contain": true, "pageDots": false, "fullscreen": true }'>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e1.png" alt="Office 365 Enterprise E1" className="img-fluid"/></div>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e3.jpg" alt="Office 365 Enterprise E3" className="img-fluid"/></div>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e5.jpg" alt="Office 365 Enterprise E5" className="img-fluid"/></div>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e1.png" alt="Office 365 Enterprise E1" className="img-fluid"/></div>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e3.jpg" alt="Office 365 Enterprise E3" className="img-fluid"/></div>
                        <div className="carousel-cell"><img src="./images/office-365-enterprise-e5.jpg" alt="Office 365 Enterprise E5" className="img-fluid"/></div>
                    </div>
                </div>
            </div>
        </div>

            
        );
    }
}

export default Office365ImageComponent;