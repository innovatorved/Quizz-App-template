import React from 'react';

export default function Question() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-gray-800">
                <ul className="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
                            <li className="relative">
                                <input className="sr-only peer" type="radio" value="yes" name="answer" id="answer_yes"/>
                                <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50" htmlFor="opt1">Yes</label>
                            </li>
                        </ul>

                    </h1>
                </div>
                )
}
