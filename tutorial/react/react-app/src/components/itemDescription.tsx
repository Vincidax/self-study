import React, { Component } from "react";

type ItemDescriptionProps = {
  name: string;
  description: string;
};

class ItemDescription extends Component<ItemDescriptionProps> {
  render() {
    const { name, description } = this.props;

    return (
      <div>
        <p>{name}</p>
        <p>
          <i>{description}</i>
        </p>
      </div>
    );
  }
}

export default ItemDescription;
