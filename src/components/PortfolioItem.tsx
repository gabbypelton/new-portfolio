import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";

interface Props {
  imageSource: string;
  description: string;
  date: string;
  link: string;
  title: string;
}
interface State {}

export class PortfolioItem extends Component<Props, State> {
  state = {
      show: true
  };

  render() {
    return (
      <div>
        <Card inverse>
          <CardImg width="100%" src={this.props.imageSource} alt="Card image cap" />
          <CardImgOverlay className="card__overlay">
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>
              {this.props.description}
            </CardText>
            <CardText>
              <small className="text-muted">{this.props.date}</small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItem);
