const Modal = ({open, data}) => {
  const handleClick = () => {
    open()
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 py-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-bold" id="modal-title">
                  Detail Informasi
                </h3>
                <div className="mt-2 text-left">
                  <table>
                    <tbody>
                      <tr className="text-sm text-gray-500">
                        <td className="font-bold">Waktu Penyiraman</td>
                        <td>: {data.timestamp}</td>
                      </tr>
                      <tr className="text-sm text-gray-500">
                        <td className="font-bold">Temperature</td>
                        <td>: {data.temperature} C</td>
                      </tr>
                      <tr className="text-sm text-gray-500">
                        <td className="font-bold">Humidity</td>
                        <td>: {data.humidity} %</td>
                      </tr>
                      <tr className="text-sm text-gray-500">
                        <td className="font-bold">Soil Moisture</td>
                        <td>: {(data.soilMoistureA + data.soilMoistureB) / 2} %</td>
                      </tr>
                      <tr className="text-sm text-gray-500">
                        <td className="font-bold">Ketinggian Penampung</td>
                        <td>: {data.waterHeight} cm</td>
                      </tr>
                      <tr className="text-sm text-gray-500">
                        <td className="font-bold">Lama Penyemprotan</td>
                        <td>: {data.pompDuration} detik</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" onClick={handleClick} className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;