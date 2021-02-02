import React from 'react';
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FootComponent';
import StickyiconComponent from './StickyiconComponent';



class EmptyCartComponent extends React.Component {

    render() {
        return (

            <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-pink" id="mainheader">
                 <div className="container">
                     <LogoComponent imagePath="/images/logo.png"/>
 
                     <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                         <span className="navbar-toggler-icon" />
                     </button>
                     
                     <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                         <SearchComponent searchText="What are you looking for"/>
                         <MyAccountComponent/>
                         <CartComponent/>
                     </div>
                 </div>
             </nav>
             <MenuComponent/>
             <StickyiconComponent/>

            
        <section className="cart_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-white gothamMedium basket mb-4">Your Shopping Basket <span className="gothamLight">Empty</span></h3>
                    </div>
                </div>
            </div>
        </section>
       





             <FooterComponent/>
             </div>
        
            
        );
    }
}

export default EmptyCartComponent;