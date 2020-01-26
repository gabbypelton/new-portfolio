import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Col
} from "reactstrap";

interface Props {
  imageSource: string;
  description: string;
  contribution: string;
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
      <Col className="projects__item" xs={12}>
        <a href={this.props.link}>
          <Card inverse>
            <CardImg
              style={{
                maxHeight: "80vh",
                maxWidth: "100%",
                height: "auto",
                width: "auto"
              }}
              src={this.props.imageSource}
              alt="Card image cap"
            />
            <CardImgOverlay className="card__overlay">
              <CardTitle style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                {this.props.title}
                <small style={{width: "100%"}}className="text-muted">{this.props.date}</small>
              </CardTitle>
              <CardText>
                <text style={{ fontWeight: "bold" }}>Product Description: </text>
                {this.props.description}
              </CardText>
              <CardText>
                <text style={{ fontWeight: "bold" }}>My contribution: </text>
                {this.props.contribution}
              </CardText>
            </CardImgOverlay>
          </Card>
        </a>
      </Col>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);
