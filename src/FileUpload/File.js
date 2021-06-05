import axios from 'axios';

import React,{Component} from 'react';

class App extends Component {

	state = {
	selectedFile: null
	};
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
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload
				</button>
			</div>
	);
	}
}

export default App;
