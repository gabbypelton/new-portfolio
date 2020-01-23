import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Col } from "reactstrap";

interface Props {
  imageSource: string;
  description: string;
  date: string;
  link: string;
  title: string;
}
interface State {}

export class ProjectItem extends Component<Props, State> {
  state = {
      show: true
  };

  render() {
    return (
      <Col className="projects__item" xs={12} lg={6}>
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
      </Col>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);
