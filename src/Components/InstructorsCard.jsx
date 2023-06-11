import React from 'react';
import { motion } from "framer-motion"

const InstructorsCard = ({ item }) => {
    const { instructorEmail, instructorImage, instructorName, role, takenClass } = item
    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative w-60 h-72 rounded-md overflow-hidden shadow-md"
            >
                <img
                    src={instructorImage}
                    alt="Card Image"
                    className="w-full h-full object-cover"
                />
                <div className="absolute   inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute bg-black  inset-0 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-60 transition-opacity duration-500">
                    <h2 className="text-2xl font-bold mb-2">{instructorName}</h2>
                    <p className="text-sm">Taken Class:{takenClass}</p>
                    <p className="text-sm">Email:{instructorEmail}</p>
                    {/* <button className="mt-4 bg-white text-black px-4 py-2 rounded-full">Button</button> */}
                </div>
            </motion.div>

        </div>
    );
};

export default InstructorsCard;