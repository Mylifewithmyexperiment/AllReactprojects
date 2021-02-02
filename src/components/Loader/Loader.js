import React from 'react';
// import { connect } from 'react-redux'
import img from '../../images/loader.gif'
class Loader extends React.Component {
   render() {
      return (
         <div>
            { this.props.productItems.loading ? ( <img src={img} alt='loading' /> ) : null }
         </div>
      )
   }
}
export default Loader;