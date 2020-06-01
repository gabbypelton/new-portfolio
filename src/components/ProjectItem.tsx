import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Col,
  Button,
} from "reactstrap";

interface Props {
  project: {
    imageSource: string;
    description: string;
    contribution: string;
    date: string;
    urls: { name: string; location: string }[];
    title: string;
  };
}
interface State {}

export class ProjectItem extends Component<Props, State> {
  state = {
    show: true,
  };

  render() {
    return (
      <Col className="projects__item" xs={12}>
        <Card inverse>
          <CardImg
            style={{
              minHeight: "300px",
              maxHeight: "80vh",
              maxWidth: "100%",
              height: "auto",
              width: "auto",
            }}
            src={this.props.project.imageSource}
            alt="Card image cap"
          />
          <CardImgOverlay className="card__overlay">
            <CardTitle
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "center",
              }}
            >
              {this.props.project.title}
              <small style={{ width: "100%" }} className="text-muted">
                {this.props.project.date}
              </small>
            </CardTitle>
            <CardText>
              <b>
                Product Description:
                <br />
              </b>
              {this.props.project.description}
            </CardText>
            <CardText>
              <b>
                My contribution:
                <br />
              </b>
              {this.props.project.contribution}
            </CardText>
            {this.props.project.urls.map((url) => (
              <Button
                style={{ margin: "2%", minWidth: "100px" }}
                color="info"
                onClick={() => window.open(url.location)}
              >
                {url.name}
              </Button>
            ))}
          </CardImgOverlay>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectItem);
