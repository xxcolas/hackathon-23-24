import React, { useState, useEffect } from 'react';

const SpeechRecognitionComponent = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Votre navigateur ne supporte pas la Web Speech API");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'fr-FR';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptSegment = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript( transcriptSegment);
        } else {
          interimTranscript += transcriptSegment;
        }
      }
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  const handleListening = () => {
    setIsListening(prevState => !prevState);
  };

  return (
    <div className="p-4">
      <button onClick={handleListening} className="bg-blue-500 text-white p-2 rounded">
        {isListening ? 'Arrêter' : 'Commencer'} l'écoute
      </button>
      <div className="mt-4">
        <p>Texte reconnu : {transcript}</p>
      </div>
    </div>
  );
};

export default SpeechRecognitionComponent;
