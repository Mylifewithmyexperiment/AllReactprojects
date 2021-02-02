import React from 'react'
import LogoComponent from './LogoComponent'
import EmptyCartDetailComponent from './EmptyCartDetailComponent'
import SearchComponent from './SearchComponent'
import MyAccountComponent from './MyAccountComponent';
import MenuComponent from './MenuComponent';
import FooterComponent from './FootComponent';
import BannerComponent from './BannerComponent';
import ServiceComponent from './ServiceComponent';
import FeaturedserviceComponent from './FeaturedserviceComponent';
import BrandComponent from './BrandComponent';
import StickyiconComponent from './StickyiconComponent';
import './App.css';

class HomePage extends React.Component{

    constructor(title, theme) {
        super();
        this.title = title;
        this.theme = theme;
        this.state = {
            homePageJson : [],
            isLogoComponentEnabled:true,
            isSearchComponentEnabled:true,
            isMyAccountComponentEnabled:true,
            isCartComponentEnabled:true,
            isMenuComponentEnabled:true,
            isBannerComponentEnabled:true,
            isServiceComponentEnabled:true,
            isFeaturedServiceComponentEnabled:true,
            isStickyIconComponentEnabled:true,
            isBrandComponentEnabled:true,
            isFooterComponentEnabled:true
        }
    }

    componentDidMount() {

        fetch('http://localhost:1337/home-page-components')
        .then(response => {
      
            if (!response.ok) {
              console.log(response);
            }
            return response.json();
          })
          .then(json => {
            
            {json.map((data,index) => {

                let componentName = data.ComponentName;
                let enabled = data.enabled;
               
                console.log(componentName)
                console.log(enabled)
    
                switch (componentName) {
                    case 'LogoComponent':   
                        this.setState( {
                            isLogoComponentEnabled : enabled
                        });
                    case 'CartComponent':
                        return this.setState( {
                            isCartComponentEnabled : enabled
                        });
                    case 'SearchComponent':
                        return this.setState( {
                            isSearchComponentEnabled : enabled
                        });
                    case 'MyAccountComponent':
                        return this.setState( {
                            isMyAccountComponentEnabled : enabled
                        });
                    case 'MenuComponent':
                          return this.setState( {
                            isMenuComponentEnabled : enabled
                        });
                    case 'FooterComponent':
                      return this.setState( {
                            isFooterComponentEnabled : enabled
                        });
                    case 'BannerComponent':
                          return this.setState( {
                              isBannerComponentEnabled : enabled
                          });
                    case 'ServiceComponent':
                          return this.setState( {
                            isServiceComponentEnabled : enabled
                        });
                    case 'FeaturedserviceComponent':
                        return this.setState( {
                            isFeaturedServiceComponentEnabled : enabled
                        });
                    case 'BrandComponent':
                        return this.setState( {
                             isBrandComponentEnabled : enabled
                        });
                    case 'StickyiconComponent':
                        return this.setState( {
                            isStickyIconComponentEnabled : enabled
                        });
                    default:
                      return null;
                    }
                }
            )} 
        })
    }

    render() {
        
        return( 
            <div className="w-100">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-pink" id="mainheader">
                <div className="container">

                   
                    {this.state.isLogoComponentEnabled ? <LogoComponent imagePath='/images/logo.png'/>   : ""}
                    <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span className="navbar-toggler-icon" />
                    </button>
                    
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        {this.state.isSearchComponentEnabled ? <SearchComponent searchText="What are you looking for"/> : ""}
                        {this.state.isMyAccountComponentEnabled ? <MyAccountComponent/> : ""}
                        {this.state.isCartComponentEnabled ? <EmptyCartDetailComponent/> : ""}
                    </div>
                </div>
            </nav>
            {this.state.isMenuComponentEnabled ? <MenuComponent/> : ""}

            <BannerComponent/>
            <ServiceComponent/>
            <FeaturedserviceComponent/>
            {this.state.isStickyIconComponentEnabled ? <StickyiconComponent/> : ""}
            {this.state.isBrandComponentEnabled ? <BrandComponent/> : ""}

            {this.state.isFooterComponentEnabled ? <FooterComponent/> : ""}
            </div>
        )
    };
}
export default HomePage;
