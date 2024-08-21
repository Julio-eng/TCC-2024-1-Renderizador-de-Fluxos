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
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Deseja continuar de onde parou?</h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onStartOver}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Recomeçar
          </button>
          <button
            onClick={onContinue}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartOverModal