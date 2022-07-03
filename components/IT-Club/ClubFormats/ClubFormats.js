import {Data} from "./Data";
import Image from "next/image";
import Modal from 'react-modal';
import {useState} from "react";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Index(desc2) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="">
            <button onClick={openModal}>Кененирээк</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="sm:w-[90%] sm:pl-[20%] flex flex-col items-end">
                    <button onClick={closeModal} className="float-right text-[32px] font-bold">X</button>
                    <p>{desc2}</p>
                </div>
            </Modal>
        </div>
    );
}

export default function ClubFormats() {
    const Modal = (index) => {
        return index + 1
    }
    return (
        <div className="container mx-auto">
            <div className="mt-14">
                <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6"> IT-КЛУБТУН ФОРМАТТАРЫ  </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {
                    Data.map((item, index) => {
                        const desc = (item.ImgClubdesc).substr(0,100)
                        const desc2 = (item.ImgClubdesc)
                        return (
                            <div className="sm:rounded-[20px] rounded-[20px] w-[99%] md:w-[95] p-3 md:p-8 md:p-4 bg-white md:rounded-[30px] mt-2">
                                <div className="flex justify-between items-center">
                                    <Image src={item.ImgClubFormats} alt=""/>
                                    <h1 className="text-[#9099A3] text-[24px] leading-[36px] font-black">{Modal(index)}.</h1>
                                </div>
                                <div className="w-[85%]">
                                    <h1 className="mt-4 text-[#2C3E50] leading-[30px] font-bold text-[16px] md:text-[20px]">{item.ImgClubtit}</h1>
                                    <p className="mt-2 text-[#2C3E50] leading-[21px] font-extra-light text-[15px] lg:text-[17px]">{desc}</p>
                                </div>
                                {/*<div className="flex justify-end mt-4">*/}
                                {/*    <button className="btn" >{Index(desc2)}</button>*/}
                                {/*</div>*/}
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}


