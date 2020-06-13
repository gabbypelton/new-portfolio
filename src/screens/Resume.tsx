import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Document, Page, pdfjs } from "react-pdf";
import * as pdfFile from "../assets/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {}
interface State {}

export class Resume extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div
        style={{
          width: "inherit",
          maxWidth: "inherit",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
        }}
      >
        <a href={pdfFile} download="Gabriella Pelton Resume 2020">
          <Button style={{ margin: "1rem" }}>Download PDF</Button>
        </a>
        <div>
          <Document file={pdfFile}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    );
  }
}

export default connect()(Resume);
