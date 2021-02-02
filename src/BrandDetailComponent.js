
import React from 'react';
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FootComponent';
import StickyiconComponent from './StickyiconComponent';

class BrandDetailComponent extends React.Component {

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

        <section className="banner_section" style={{backgroundImage: 'url(./images/Brand_banner.jpg)'}}>
            <div className="container">
                <div className="row">

                </div>
            </div>
        </section>
      
        <section className="brand_detail_grid">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h1 className="title">First-class Microsoft skills with <b className="text-pink">STERLITE</b>.</h1>
                        <h4 className="description">Work productively wherever you are with our first-class Microsoft skills.</h4>
                        <h4 className="description">Discover more and secure your individual workshop appointment.</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-columns">
                            <a href="javascript:void(0);" className="card bg-microsoft365">
                                <img src="./images/Brands/Microsoft/microsoft365.png" className="card-img-top" alt="Microsoft 365"/>
                            </a>
                            <a href="javascript:void(0);" className="card bg-window10">
                                <img src="./images/Brands/Microsoft/windows10.png" className="card-img-top" alt="Windows 10"/>
                            </a>
                            <a href="javascript:void(0);" className="card bg-azure">
                                <img src="./images/Brands/Microsoft/azure.png" className="card-img-top" alt="Azure"/>
                            </a>
                            <a href="./office365_details.html" className="card bg-office365">
                                <img src="./images/Brands/Microsoft/office_365.png" className="card-img-top" alt="Office 365"/>
                            </a>
                            <a href="javascript:void(0);" className="card bg-msurface">
                                <img src="./images/Brands/Microsoft/microsoft-surface.png" className="card-img-top" alt="Microsoft Surface"/>
                            </a>
                            <a href="javascript:void(0);" className="card bg-microsoftteams">
                                <img src="./images/Brands/Microsoft/microsoft-teams.png" className="card-img-top" alt="Microsoft Teams"/>
                            </a>
                            <a href="javascript:void(0);" className="card bg-ems">
                                <img src="./images/Brands/Microsoft/ems.png" className="card-img-top" alt="Enterprise Mobility & Security"/>
                            </a>
                            <a href="javascript:void(0);" className="card bg-ws">
                                <img src="./images/Brands/Microsoft/window-server.png" className="card-img-top" alt="Windows Server"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section className="infoblock">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-12">
                        <img src="./images/brand_details_img.jpg" className="img-fluid" />
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <h3 className="text-white">Microsoft Workshops at <span className="text-pink">STERLITE</span>.</h3>
                        <p className="text-white">The cloud opens new doors for your company. Get ahead of the game with Office 365, Windows 10, EMS, Azure and Business Intelligence (BI) – but only if you can capture the full potential of these powerful tools. Our workshops make sure you can.</p>
                        <a href="javascript:void(0);" className="btn btn-pink addtocart"><i className="fas fa-file-download"></i>Download the info brochure</a>
                    </div>
                </div>
            </div>
        </section>
 
        <section className="infoblock bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-12">
                        <img src="./images/ms-gold-partner.png" className="img-fluid" alt="Microsoft Gold Partner" />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-12">
                        <h3 className="text-pink">We are a Microsoft Gold partner.</h3>
                        <p><b>The perfect combination of knowledge, experience and success makes us one of the industry leaders.</b> For our customers, this means they benefit from our premium knowledge and proven experience that goes far beyond the average.</p>
                        <p>Together we develop solutions that make the difference. The partnership between Sterlite and Microsoft has a long and successful tradition—Sterlite has been Microsoft Gold Partner ten times now.</p>

                        <h4 className="text-pink">Sterlite at a glance:</h4>

                        <ul>
                            <li>2,500 certifications</li>
                            <li>40 SAM certifications</li>
                        </ul>
                        <p>But that’s not all. As a Gold Partner, we offer attractive Microsoft partner conditions and exclusive offers that you the customer can benefit from. You also have the opportunity to take part in exclusive events where we present current IT developments.</p>
                    </div>
                </div>
            </div>
        </section>
      
   
        <section className="refrences">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-pink">References</h2>
                        <div className="card-columns">
                            <a href="javascript:void(0);" className="card">
                                <img src="./images/ref1.jpg" className="card-img-top" alt="Refrences"/>
                                <div className="card-body">
                                    <h4 className="card-title">Uniform it infrastructure for A.I.M. all in mental GMBH</h4>
                                </div>
                            </a>
                            <a href="javascript:void(0);" className="card">
                                <img src="./images/ref2.jpg" className="card-img-top" alt="Refrences"/>
                                <div className="card-body">
                                    <h4 className="card-title">FNT Takes IST business into the cloud.</h4>
                                    <p className="description">FNT is a leading provider of integrated software solutions for IT management, data centre infrastructure management and telecommunication infrastructure management worldwide. Microsoft Cloud supports the software firm and its innovative spirit in key areas.</p>
                                </div>
                            </a>
                            <a href="javascript:void(0);" className="card">
                                <img src="./images/ref3.jpg" className="card-img-top" alt="Refrences"/>
                                <div className="card-body">
                                    <h4 className="card-title">LEDVANCE - fast migration of central file services to the cloud with microsoft azure.</h4>
                                    <p className="description">LEDVANCE has become one of the world’s leading providers of general lighting. The company’s core business centres around LED luminaires, intelligent and networked smart home solutions as well as traditional light sources.</p>
                                </div>
                            </a>
                            <a href="javascript:void(0);" className="card">
                                <img src="./images/ref4.jpg" className="card-img-top" alt="Refrences"/>
                                <div className="card-body">
                                    <h4 className="card-title">Creativity puts Abele Ingenieure ahead of the competition.</h4>
                                    <p className="description">"Creativity is a competitive factor" is the motto of David Abele, managing director of Abele Ingenieure from Augsburg in the second generation. Over the past ten years, Abele Ingenieure has developed from a pure service provider for design tasks to a general contractor for plant construction.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

   <FooterComponent/>
   </div>
        );
    }
}

export default BrandDetailComponent;








