import React, {useState} from 'react'
import {GeneralContainer, Wrapper} from "./Menu.elements"
import Properties from "../Properties/Properties"
import Rings from "../Ring/Rings"
import Futer from "../Futer/Futer"

const Menu = () => {
    const [currentRotateOne, setCurrentRotateOne] = useState({name: "a1"})
    const [currentRotateTwo, setCurrentRotateTwo] = useState({name: "a2"})
    const [currentRotateThree, setCurrentRotateThree] = useState({name: "a1"})
    const [currentRotateFour, setCurrentRotateFour] = useState({name: "a1"})
    return (
        <div>
            <GeneralContainer>
                <Wrapper>
                    <Properties
                        setCurrentRotateOne={setCurrentRotateOne}
                        setCurrentRotateTwo={setCurrentRotateTwo}
                        setCurrentRotateThree={setCurrentRotateThree}
                        setCurrentRotateFour={setCurrentRotateFour}
                        currentRotateOne={currentRotateOne}
                        currentRotateTwo={currentRotateTwo}
                        currentRotateThree={currentRotateThree}
                        currentRotateFour={currentRotateFour}
                    />
                    <Rings
                        currentRotateOne={currentRotateOne}
                        currentRotateTwo={currentRotateTwo}
                        currentRotateThree={currentRotateThree}
                        currentRotateFour={currentRotateFour}
                    />
                </Wrapper>
            </GeneralContainer>
            <Futer/>
        </div>
    )
}

export default Menu