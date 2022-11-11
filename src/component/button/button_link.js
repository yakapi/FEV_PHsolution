import React from "react"

class ButtonLink extends React.Component{
  render() {
    return (
        <div onClick={this.props.haveTo} className={this.props.color}>
          <p>{this.props.name}</p>
        </div>
    );
  }
}
export default ButtonLink
