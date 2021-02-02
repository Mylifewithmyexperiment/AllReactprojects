import React from 'react'
import LogoComponent from './LogoComponent'
import CartComponent from './CartComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FootComponent';
import StickyiconComponent from './StickyiconComponent';
import video from './video.js';



class Office365DetailComponent extends React.Component {

    constructor(props)
    {
          super(props);
    }


    render() {
        return(


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


      
        <section className="banner_section" style={{backgroundImage: `url(./images/banner_office365.png)`}}>
            <div className="container">
                <div className="row">

                </div>
            </div>
        </section>
      

       
        <section className="brand_detail_grid grid5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-columns pt-0">
                            <a href="brand_details.html" className="card bg-secondary">
                                <div className="card-body">OVERVIEW</div>
                            </a>
                            <a href="javascript:void(0);" className="card bg-microsoft365 bg-lightGray">
                                <div className="card-body">Microsoft 365</div>
                            </a>
                            <a href="javascript:void(0);" className="card bg-window10 bg-lightGray">
                                <div className="card-body">Windows 10</div>
                            </a>
                            <a href="javascript:void(0);" className="card bg-azure bg-lightGray">
                                <div className="card-body">Azure</div>
                            </a>
                            <a href="./office365_details.html" className="card bg-office365 bg-lightGray active">
                                <div className="card-body">Office 365</div>
                            </a>
                            <a href="javascript:void(0);" className="card bg-msurface bg-lightGray">
                                <div className="card-body">Microsoft Surface</div>
                            </a>
                            <a href="javascript:void(0);" className="card bg-microsoftteams bg-lightGray">
                                <div className="card-body">Teams</div>
                            </a>
                            <a href="javascript:void(0);" className="card bg-ems bg-lightGray">
                                <div className="card-body">EMS</div>
                            </a>
                            <a href="javascript:void(0);" className="card bg-ws bg-lightGray">
                                <div className="card-body">Windows Server</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      

        <section className="infoblock">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <h1 className="title mb-2 text-office365">Microsoft Office 365.</h1>
                        <h3 className="description mb-3">Uncompromising productivity wherever you are.</h3>
                    </div>
                    <div className="col-xl-8 col-lg-12">
                        <p className="text-white">All of your apps. Always up-to-date. Available everywhere. Office 365 is a cloud-based subscription service that brings together tried and tested Microsoft Office applications with the best solutions for the modern workplace. With well-know apps such as Excel and Outlook plus powerful cloud services like SharePoint and Microsoft Teams, Office 365 ensures that teams can work creatively from almost any location and on any device.</p>

                        <p className="text-white">Discover a new level of productivity with Business Intelligence and innovative communication and collaboration. Office 365 also helps your company make advances in the areas of security, mobile end device admin and mobility. You receive enterprise tools with predictable monthly costs and no initial investment in the infrastructure, reliable security and a guaranteed availability of 99.9%</p>

                        <div className="btnGroups">
                            <a href="javascript:void(0);" className="btn btn-white"><img src="./images/Office365.png" className="w-85px mr-3 mb-0"/>Office 365 Business</a>
                            <a href="./office365_cartdetails.html" className="btn btn-white"><img src="./images/Office365.png" className="w-85px mr-3 mb-0"/>Office 365 Enterprise</a>
                            <a href="javascript:void(0);" className="btn btn-white"><img src="./images/Office365.png" className="w-85px mr-3 mb-0"/>Office 365 Firstline</a>
                            <a href="javascript:void(0);" className="btn btn-white"><img src="./images/Office365.png" className="w-85px mr-3 mb-0"/>Office 365 eDiscovery</a>
                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <h3 className="text-pink">Our workshop offer for you.</h3>
                        <p className="text-white">Learn everything about the new features of Office 365, modern working, the interplay with modern end devices and how they can help you and your company achieve more.</p>
                        <a href="javascript:void(0);" className="btn btn-pink addtocart px-3 mb-3"><i className="fas fa-file-download"></i>INFO FOR A FREE WORKSHOP</a>
                        <a href="javascript:void(0);" className="btn btn-pink addtocart mb-3"><i className="fas fa-file-download"></i>GET IN TOUCH</a>
                        <h3 className="text-white gothamLight">Find out more about individual Microsoft 365 components.</h3>
                    </div>
                </div>
            </div>
        </section>
      

        
        <section className="team_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <img src="./images/banner_team.jpg" className="card-img-top" alt="Team Banner"/>
                            <div className="card-body">
                                <h3 className="card-title mb-2">STAY PRODUCTIVE WITH MICROSOFT TEAMS.</h3>
                                <a href="javscript:void(0);" className="btn btn-pink addtocart mb-0 px-3">FIND OUT MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="infoblock bg-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7">
                        <h3 className="text-office365">Tried and tested applications, now even better.</h3>
                        <p>Depending on the selected package, Office 365 includes the applications you know and love such as Word, Excel, PowerPoint and Outlook, enhanced with tools for better collaboration, Meaning you can access your data whenever and wherever you are—from a PC, Mac or tablet. The apps are always up-to-date and updates are received automatically.</p>
                    </div>
                    <div className="col-xl-5">
                        <img src="./images/img_office365-logos.png" alt="office365 logos" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>


      
        <section className="infoblock fluid-bg" style={{backgroundImage: 'linear-gradient(-90deg, #c89f7b 62%, transparent),url(./images/bg1.png)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <img src="./images/bg1.png" className="img-fluid d-block d-lg-none" alt="Step up productivity" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3 className="text-pink">Step up productivity.</h3>
                        <p>Use Office with integrated AI, online storage and file sharing. The application is designed for the way people work today, empowering your teams to stay connected and productive no matter where they are.</p>
                    </div>
                </div>
            </div>
        </section>
      

     
        <section className="infoblock fluid-bg bg-right" style={{backgroundImage: 'linear-gradient(-90deg, transparent, #c7abb9 38%),url(./images/bg2.png)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <img src="./images/bg2.png" className="img-fluid d-block d-lg-none" alt="Archieve more" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3 className="text-pink">Achieve more.</h3>
                        <p>Attract new customers and optimise your business processes. Expand your analysis to cover individual reports with Power BI, allowing you to examine your data more closely and gain new insights.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="infoblock fluid-bg" style={{backgroundImage: 'linear-gradient(-90deg, #4b4444 62%, transparent), url(./images/bg3.png)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <img src="./images/bg3.png" className="img-fluid d-block d-lg-none" alt="Collaborate better" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3 className="text-pink">Collaborate better.</h3>
                        <p className="text-white">Collaborate with internal members of your team and external stakeholders everywhere, at any time. Your Office 365 subscription includes the Office Mobile app. Manage e-mails, take part in meetings and edit documents—wherever you are.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="infoblock fluid-bg bg-right" style={{backgroundImage: 'linear-gradient(-90deg, transparent, #c89f7b 38%),url(./images/bg4.png)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <img src="./images/bg4.png" className="img-fluid d-block d-lg-none" alt="Increase security" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3 className="text-pink">Increase security.</h3>
                        <p>Protect your company from external threats and data breaches with integrated data protection and compliance solutions. Advanced Threat Protection delivers extended protection thanks to a range of functions that help defend against unknown malware and viruses.</p>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="infoblock fluid-bg" style={{backgroundImage: 'linear-gradient(-90deg, #c7abb9 62%, transparent) , url(./images/bg5.png)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <img src="./images/bg5.png" className="img-fluid d-block d-lg-none" alt="Simplify IT management" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3 className="text-pink">Simplify IT management.</h3>
                        <p>Easily configure and manage users, devices and data and spend more time focussing on your business. By leveraging cloud-based services, you can reduce the overall costs for deploying, managing, and retiring devices.</p>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="infoblock fluid-bg bg-right" style={{backgroundImage: 'linear-gradient(-90deg, transparent, #4b4444 38%) , url(./images/bg6.png)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <img src="./images/bg6.png" className="img-fluid d-block d-lg-none" alt="Stay up-to-date" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h3 className="text-pink">Stay up-to-date.</h3>
                        <p className="text-white">Keeping your applications up-to-date is child’s play. Thanks to automatic updates, you’ll always have the latest version of your Office applications on all your devices.</p>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="refrences">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="text-office365">Our Office 365 success stories - This is what our customers say.</h3>
                    </div>
                    <div className="col-lg-6">
                        <div className="youtube" data-embed="DVl0R6lJUJ0">
                            <div className="play-button"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="youtube" data-embed="SAj4Ch9oPOE">
                            <div className="play-button"></div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <h3 className="text-pink">References</h3>
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


export default Office365DetailComponent;