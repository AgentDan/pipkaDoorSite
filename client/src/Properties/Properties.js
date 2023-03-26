import React from 'react'
import {PropertiesContainer, PropertiesWrapper} from "./Properties.element"
import Gem from "./Options/Gem/Gem"

const Properties = ({
                        setCurrentRotateOne,
                        setCurrentRotateTwo,
                        setCurrentRotateThree,
                        setCurrentRotateFour,
                        currentRotateOne,
                        currentRotateTwo,
                        currentRotateThree,
                        currentRotateFour,
                    }) => {
    return (
        <PropertiesContainer>
            <PropertiesWrapper>
                <div>
                    <Gem
                        setCurrentRotateOne={setCurrentRotateOne}
                        setCurrentRotateTwo={setCurrentRotateTwo}
                        setCurrentRotateThree={setCurrentRotateThree}
                        setCurrentRotateFour={setCurrentRotateFour}
                        currentRotateOne={currentRotateOne}
                        currentRotateTwo={currentRotateTwo}
                        currentRotateThree={currentRotateThree}
                        currentRotateFour={currentRotateFour}
                    />
                </div>
            </PropertiesWrapper>
        </PropertiesContainer>
    )
}

export default Properties