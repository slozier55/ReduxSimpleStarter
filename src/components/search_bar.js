import React, {Component}  from 'react';

// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: 'Search Here'};
  }

  render() {
    // return <input onChange={this.onInputChange} />;
        //return <input onChange={(event) => console.log(event.target.value) } />;
        // return <input onChange={event => console.log(event.target.value) } />;
        return (
        <div>

        <input
          value = {this.state.term}
          onChange={event => this.setState({term: event.target.value}) }
         />;
        {/* Value of the input: {this.state.term} */}
        </div>
      )
  }

  // onInputChange(event) {
   //console.log(event.target.value);
  //   console.log(event);
  // }

  // onInputChange(event) {
  //   console.log(event.target.value);
  //   //console.log(event);
  // }


}


export default SearchBar;
