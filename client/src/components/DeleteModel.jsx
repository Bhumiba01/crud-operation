const DeleteModel = ({closeModal,itemId,HandleDelete}) => {
    
    const confirmDelete = () =>{
        console.log(itemId);
        HandleDelete(itemId,closeModal);
    }

    return (
        <div  className="fixed top-0 left-0 z-0  right-0  flex justify-center  place-content-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative z-20 bg-white opacity-100 rounded-lg shadow">
                    <div className="p-6 text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 ">Are you sure you want to delete this product?</h3>
                        <button type="button" onClick={confirmDelete}  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Yes, I'm sure
                        </button>
                        <button onClick={closeModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">No, cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModel;

