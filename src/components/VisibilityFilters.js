import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
//when clicked on incompleted one it comes directly to visibility filters of component then to onclick
//as an updated state all comes 
//state and function
const VisibilityFilters = ({ activeFilter, setFilter }) => { // active filte updated state
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {  //arrays of keys then map with all, completed and incompleted
        const currentFilter = VISIBILITY_FILTERS[filterKey];  // from constant vsribloe declared it takes here
        return (
          <span
            key={`visibility-filter-${currentFilter}`}  //key to uniquely identify to filter
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {    // from here it get all, incomplete or complelte
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};
//at last it finally call the all connect methods to match  which is here in this case matched at TOdo list

//aftrer all in come here     
const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };   // return the updated state
};
// export default VisibilityFilters;

// updated state will come to mapstatetoprops,
//connecting redux to the view 

//subscribing  visibilityfilters fromm redux state.
export default connect(    
  mapStateToProps,   
  { setFilter }     // from here it wil go to the subscribe part i.e, connect method which is presnt in TodoList and from there it will render data over UI
)(VisibilityFilters); //component that you want to map


// parent to child data transfers using props