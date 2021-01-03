import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import TextField from '@material-ui/core/TextField';
import { InputLabel } from "@material-ui/core";


export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeAmt = this.onChangeAmt.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
        title: "",
        description: "",
        published: false,
        category: "",
        date:"",
        amt:"0",
        submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeAmt(e) {
    this.setState({
      amt: e.target.value,
    });
  }


  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }
  saveTutorial() {
    let data = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      date:this.state.date,
      amt:this.state.amt,
      published: false
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      title: "",
      description: "",
      published: false,
      category: "",
      date:"",
      amt:"0",
      submitted: false,
    });
  }

  render() { 
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  defaultValue="Exp Name"
                  placeholder="Exp Name"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  defaultValue="General expenses"
                  placeholder="General expenses"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label htmlFor="amt">Amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="amt"
                  defaultValue="0"
                  placeholder="0"
                  required
                  value={this.state.onChangeAmt}
                  onChange={this.onChangeAmt}
                  name="description"
                />
              </div>
              
              <div className="form-group">
                <InputLabel htmlFor="category">Category</InputLabel>
                <select name="category" id="category" className="form-control" required
                  value={this.state.category}
                  onChange={this.onChangeCategory}>
                    <option value="General">General</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Academic">Academic</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Medical">Medical</option>
                    <option value="Clothing">Clothing</option>
                </select>
              </div>

              <div className="form-group">
                <TextField
                    id="date"
                    label="Date of Expense"
                    type="date"
                    value={this.state.date}
                    onChange={this.onChangeDate}
                    defaultValue="2017-05-24"
                    className="form-control"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
              </div>

              <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
   }
}