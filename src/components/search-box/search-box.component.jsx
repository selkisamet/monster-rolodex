import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
    render() {

        return (
            <div className="container">
                {/* Bu şekildede yapılabilirdi onChange={this.props.onChangeHandler} */}
                <input type="search" className={`search-box ${this.props.className}`} placeholder={this.props.placeholder} onChange={(event) => this.props.onChangeHandler(event)} />
            </div>
        )
    }
}

export default SearchBox;