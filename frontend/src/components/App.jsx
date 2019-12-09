import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Main from "./Main.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "z33p",
        email: "z33p@gmail.com",
        password: "#Z33333p"
      }
    };

    // Methods
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.create = this.create.bind(this);

    if (localStorage.getItem("Bearer") == null) {
      this.login();
    }
  }

  render() {
    return (
      <Router>
        <>
          {/* <Header /> */}
          <div className="flex">
            <Nav />
            <Main />
          </div>
        </>
      </Router>
    );
  }

  register() {
    axios
      .post("/auth/register", this.state.user)
      .then(res => {
        console.log(res);
        localStorage.setItem("Bearer", res.data.token);
      })
      .catch(err => console.log(err));
  }

  login() {
    axios
      .post("/auth/login", this.state.user)
      .then(res => {
        console.log(res);
        localStorage.setItem("Bearer", res.data.token);
        this.create();
      })
      .catch(err => {
        console.log(err);
        this.register();
      });
  }

  create() {
    axios
      .post("/api/users", null, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("Bearer")
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}

export default App;
