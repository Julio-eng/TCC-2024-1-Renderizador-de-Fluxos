import React from 'react'

interface Props {
  isOpen: boolean;
  onContinue: () => void;
  onStartOver: () => void;
}

const StartOverModal = ({ isOpen, onContinue, onStartOver }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box">
        <h2 className="text-lg font-semibold mb-4">Deseja continuar de onde parou?</h2>
        <div className="modal-action">
          <button
            onClick={onStartOver}
            className="btn  bg-red-500 text-white">
            Recomeçar
          </button>
          <button
            onClick={onContinue}
            className="btn bg-blue-500 text-white">
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartOverModal