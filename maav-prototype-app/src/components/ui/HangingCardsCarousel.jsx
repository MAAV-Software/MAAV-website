'use client'
import React, { useState } from 'react';

const HangingCardsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const cards = [
        {
            id: 1,
            title: 'Embedded Systems',
            description:
                "The Embedded Systems subteam designs custom PCBs and electrical hardware that run the control software and manage battery, motor, and operator safety. We design with Altium Designer and Eagle and integrate off-the-shelf parts.",
            image: '/images/embedded-thumbnail.png',
            color: '#f8fafc'
        },
        {
            id: 2,
            title: 'Software',
            description:
                "Our Software team develops computer vision, guidance, navigation, and control algorithms (running on Raspberry Pi + Hailo AI) for detection, autonomous flight, and tracking. We also build utilities like tooling, the website, and automation.",
            image: '/images/software-thumbnail.png',
            color: '#f1f5f9'
        },
        {
            id: 3,
            title: 'Structures',
            description:
                "The Structures team designs, builds, and tests the drone frame. We use SolidWorks for design and carbon fiber layups, machining, and additive manufacturing for building, then validate through flight testing.",
            image: '/images/structures-thumbnail.png',
            color: '#f8fafc'
        }
    ];

    const handleCardClick = (index) => {
        if (isAnimating || index === activeIndex) return;
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const getCardStyle = (index) => {
        const positions = [
            { x: 0, z: 100, opacity: 1, scale: 1 },
            { x: 180, z: -50, opacity: 0.7, scale: 0.85 },
            { x: -180, z: -50, opacity: 0.7, scale: 0.85 }
        ];

        const relativeIndex = (index - activeIndex + 3) % 3;
        const pos = positions[relativeIndex];

        return {
            transform: `translateX(${pos.x}px) translateZ(${pos.z}px) scale(${pos.scale})`,
            opacity: pos.opacity,
            zIndex: relativeIndex === 0 ? 10 : 5 - relativeIndex,
        };
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">Subteams</h2>

            {/* Cards container */}
            <div className="relative h-64 flex items-center justify-center w-full" style={{ perspective: '1000px' }}>
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        onClick={() => handleCardClick(index)}
                        className="absolute cursor-pointer transition-all duration-500 ease-out"
                        style={getCardStyle(index)}
                    >
                        <div
                            className="w-72 rounded-xl shadow-2xl overflow-hidden border border-slate-200"
                            style={{ backgroundColor: card.color, color: '#0f172a' }}
                        >
                            <div className="h-36 overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-700">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation dots */}
            <div className="flex gap-3 mt-6">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleCardClick(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                ? 'bg-amber-500 scale-125'
                                : 'bg-slate-600 hover:bg-slate-500'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HangingCardsCarousel;
