import React, {useState} from 'react'
import {GeneralContainer, Wrapper} from "./Menu.elements"
import Properties from "../Properties/Properties"
import Rings from "../Ring/Rings"
import Futer from "../Futer/Futer"
import Render3d from "../Render3d";

const Menu = () => {
    const [currentRotateOne, setCurrentRotateOne] = useState({name: "a1"})
    const [currentRotateTwo, setCurrentRotateTwo] = useState({name: "a1"})
    const [currentRotateThree, setCurrentRotateThree] = useState({name: "a1"})
    const [currentRotateFour, setCurrentRotateFour] = useState({name: "a1"})
    return (
        <div>
            <GeneralContainer>
                {/*<Wrapper>*/}
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
                    {/*<Rings*/}
                    {/*    currentRotateOne={currentRotateOne}*/}
                    {/*    currentRotateTwo={currentRotateTwo}*/}
                    {/*    currentRotateThree={currentRotateThree}*/}
                    {/*    currentRotateFour={currentRotateFour}*/}
                    {/*/>*/}
                    <Render3d/>
                {/*</Wrapper>*/}
            </GeneralContainer>
            <Futer/>
        </div>
    )
}

export default Menu