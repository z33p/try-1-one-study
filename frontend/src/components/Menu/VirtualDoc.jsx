import React, { Component } from "react";
import stringEllipsed from "../Helpers/stringEllipsed.js";
import axios from "axios";

class VirtualDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docs: []
    };

    // Methods
    this.loadDocs = this.loadDocs.bind(this);
  }

  render() {
    return (
      <div className="">
        <button
          className="py-2 w-full text-white bg-blue-600"
          onClick={this.createDoc}
        >
          Criar novo documento
        </button>

        <div className="">{this.loadDocs()}</div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchVirtualDocs();
  }

  fetchVirtualDocs() {
    axios
      .get("/api/virtual_docs", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("Bearer")
        }
      })
      .then(res => this.setState({ docs: res.data }))
      .catch(err => console.log(err));
  }

  loadDocs() {
    if (this.state.docs.findIndex.length === 0)
      return <h3 className="py-2 text-lg">Sem documentos</h3>;

    return this.state.docs.map(doc => (
      <div className="" key={doc.id}>
        {stringEllipsed(doc.title)}
      </div>
    ));
  }

  createDoc() {
    let title = prompt("Qual o nome do documento?");

    if (title === "") return null;

    axios
      .post(
        "/api/virtual_docs",
        {
          title
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("Bearer")
          }
        }
      )
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
}

export default VirtualDoc;
