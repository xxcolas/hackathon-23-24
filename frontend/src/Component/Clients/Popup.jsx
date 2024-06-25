import React from "react";


const Popup = ({audioURL}) => {
    return (
        <div className="absolute bg-black w-4/5 h-3/4 flex flex-col items-center rounded-lg">
            <h1 className="text-red-50">Audio terminé</h1>
        
            <button className="text-white bg-green-500 p-2 rounded-lg mt-3 w-2/3">Envoyer</button>

            <div className="flex flex-row justify-around gap-3 mt-3">
                <button className="text-white bg-green-500 p-2 rounded-lg">Ecouter l'audio</button>
                <button className="text-white bg-green-500 p-2 rounded-lg">Refaire l'audio</button>
            </div>

            <div>
          <h3>Écouter l'enregistrement :</h3>
          <audio className="w-64" src={audioURL} controls="controls" />
        </div>
    </div>
    )
}

export default Popup;