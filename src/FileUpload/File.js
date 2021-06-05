import axios from 'axios';
import React,{Component} from 'react'
;
import { Button } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"

class File extends Component {

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
        
			<Center>
				<Input type="file" width="300px" onChange={this.onFileChange} />
				<Button margin="20px" border="2px" borderColor="blue.500" onClick={this.onFileUpload}>
				Upload
				</Button>
			</Center>
	);
	}
}

export default File;
