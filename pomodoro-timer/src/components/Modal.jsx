function Modal ({hidden, closeModal, newTimer}) {
    return (
        
            <div className={`${hidden} font-mono absolute inset-5 w-3/4 h-2/6 text-6xl flex flex-col flex-wrap justify-center content-center items-center text-center bg-white pt-12 m-auto gap-7`}>
                <p className="text-4xl m-auto">Time is over! Take a break!</p>
                <div className="flex flex-row gap-16 mb-4 content-center items-center">
                    <button className="text-2xl m-auto" onClick={closeModal}>Ok</button>
                    <button className="text-2xl m-auto" onClick={newTimer}>New timer</button>
                </div>
            </div>
       
    )
}

export default Modal