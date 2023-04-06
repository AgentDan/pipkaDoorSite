import React from "react"
import {OptionGemContainer, OptionGemDetails} from "./Gem.elements"

const Gem = ({
                 setCurrentRotateOne,
                 setCurrentRotateTwo,
                 setCurrentRotateThree,
                 setCurrentRotateFour,
                 currentRotateOne,
                 currentRotateTwo,
                 currentRotateThree,
                 currentRotateFour,
             }) => {

    const one = (oneVariation) => {
        setCurrentRotateOne({name: oneVariation})
    }

    const two = (twoVariation) => {
        setCurrentRotateTwo({name: twoVariation})
    }

    const three = (threeVariation) => {
        setCurrentRotateThree({name: threeVariation})
    }

    const four = (fourVariation) => {
        setCurrentRotateFour({name: fourVariation})
    }

    return (
        <OptionGemContainer>

            <h2 className="">Ручки</h2>
            <div className="flex flex-wrap">

                {
                    currentRotateOne.name === "a1" ? (
                        <div className="">
                            <button
                                className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Нажимная хром
                            </button>
                        </div>
                    ) : (
                        <div className="">
                            <button
                                onClick={() => one("a1")}
                                className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Нажимная хром
                            </button>
                        </div>
                    )
                }

                {
                    currentRotateOne.name === "a2" ? (
                        <div className="">
                            <button
                                className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Ручка-кнопка
                            </button>
                        </div>
                    ) : (
                        <div className="">
                            <button
                                onClick={() => one("a2")}
                                className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Ручка-кнопка
                            </button>
                        </div>
                    )
                }

            </div>

            <h2 className="mt-8">Глазок</h2>
            <div className="flex flex-wrap">

                {
                    currentRotateTwo.name === "a2" ? (
                        <div className="">
                            <button
                                className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Круглый хром
                            </button>
                        </div>
                    ) : (
                        <div className="">
                            <button
                                onClick={() => two("a2")}
                                className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Круглый хром
                            </button>
                        </div>
                    )
                }

                {
                    currentRotateTwo.name === "a1" ? (
                        <div className="">
                            <button
                                className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Квадратный черный
                            </button>
                        </div>
                    ) : (
                        <div className="">
                            <button
                                onClick={() => two("a1")}
                                className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Квадратный черный
                            </button>
                        </div>
                    )
                }

            </div>

            <h2 className="mt-8">Накладки</h2>
            <div className="flex flex-wrap">

                {
                    currentRotateThree.name === "a1" ? (
                        <div className="">
                            <button
                                className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Хром
                            </button>
                        </div>
                    ) : (
                        <div className="">
                            <button
                                onClick={() => three("a1")}
                                className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Хром
                            </button>
                        </div>
                    )
                }

                {
                    currentRotateThree.name === "a2" ? (
                        <div className="">
                            <button
                                className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Черная
                            </button>
                        </div>
                    ) : (
                        <div className="">
                            <button
                                onClick={() => three("a2")}
                                className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Черная
                            </button>
                        </div>
                    )
                }

            </div>

            <h2 className="mt-8">Доп. элементы</h2>
            <div className="flex flex-wrap">

                {
                    currentRotateFour.name === "a1" ? (
                        <div className="">
                            <button
                                className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Показать элементы
                            </button>
                        </div>
                    ) : (
                        <div className="">
                            <button
                                onClick={() => four("a1")}
                                className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Показать элементы
                            </button>
                        </div>
                    )
                }

                {
                    currentRotateFour.name === "a2" ? (
                        <div className="">
                            <button
                                className="w-24 h-12 m-2 text-xs bg-gray-500 hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Скрыть элементы
                            </button>
                        </div>
                    ) : (
                        <div className="">
                            <button
                                onClick={() => four("a2")}
                                className="w-24 h-12 m-2 text-xs bg-transparent hover:bg-gray-700 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded">
                                Скрыть элементы
                            </button>
                        </div>
                    )
                }

            </div>

        </OptionGemContainer>
    )
}

export default Gem
