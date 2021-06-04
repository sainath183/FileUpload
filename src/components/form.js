import React, { Component } from 'react'
import axios from 'axios';
import "./form.css"
import { Button } from "@chakra-ui/button"



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            eventPlace: "",
            eventSummary: "",
            selectedFile: null
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    lasthandler = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    eventNamehandler = (e) => {
        this.setState({
          eventPlace  : e.target.value
        })
    }

    eventSummaryhandler = (e) => {
        this.setState({
        eventSummary: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            eventPlace: '',
            eventSummary: "",
            UploadFile:""
        })
     e.preventDefault()       
    }

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
        };
        onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        
        console.log(this.state.selectedFile);
        axios.post("api/uploadfile", formData);
        };
        
    render() {
        return (
            <div className="App1">

                <form id="my-form" onSubmit={this.handleSubmit}>
                    <h1>Admin Login</h1>
                    <label>First-Name :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>Last-Name :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Event-Place :</label> <input type="text" value={this.state.eventPlace} onChange={this.eventNamehandler} placeholder="EventName..." /><br />
                    
                    <div>
				       <label>Upload-File :</label> <input type="file" onChange={this.onFileChange} />
				        <button onClick={this.onFileUpload}>Upload!</button>
			        </div>
                    <label>EventSummary :</label><input type="text" value={this.state.eventSummary} onChange={this.eventSummaryhandler} placeholder="EventSummary..." />
                    <Button colorScheme="blue">Submit</Button>
    

                </form>

            </div>
            
        )
    }
}
export default Form