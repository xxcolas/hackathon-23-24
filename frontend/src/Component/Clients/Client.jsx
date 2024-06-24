import React from "react";
import { useEffect, useState } from 'react'
import Speech from "./Speech";
import { SaveAudio } from "./SaveAudio";

const Client = () => {

  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600">
            <h1 className="text-white text-center">Demmarer l'enregistrement</h1>
            <button className="bg-red-500 text-white font-bold w-24 h-24 rounded-full ">
                GO
            </button>
            <Speech />
            <SaveAudio />
        </div>
    )
}

export default Client;