import React, { Component } from 'react';
import DishdetailComponent from './DishdetailComponent';
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDish(dish) {
    if (dish != null) {
      return <DishdetailComponent dishDetails={dish} />;
    } else {
      return <div></div>;
    }
  }
  render() {
    const menu = this.props.dishes.map(dish => {
      return (

      );
    });
    return (
      <div className='container'>
        <div className='row'>{menu}</div>
        <div>{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;
