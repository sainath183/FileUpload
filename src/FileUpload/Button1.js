import React, { Component } from 'react'
import { Button } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"



export default class Button1 extends Component {
    render() {
        return (
            <Center>
                <Button size="md" height="48px" width="100px" border="2px" borderColor="green.500">Submit</Button>

            </Center>
        )
    }
}
