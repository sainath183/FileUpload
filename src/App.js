import React from "react"
import File from "./FileUpload/File"
import { ChakraProvider } from "@chakra-ui/react"
import Button1 from "./FileUpload/Button1"

function App() {
    return(
        <ChakraProvider>
            <File />
            <br />
            <File />
            <Button1 />
        </ChakraProvider>
        
      
    )
}

export default App