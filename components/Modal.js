import { useState } from "react";
import AssetForm from "./AssetForm";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  function onClose(){
    setShowModal(false)
  }

  return (
    <>
      <button
        className="hvr-buzz-out bg-indigo-700 text-white active:bg-indigo-900 font-bold uppercase text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New Asset
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <AssetForm onClose={onClose}/>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
