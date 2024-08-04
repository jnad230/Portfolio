import React from 'react'

const MagicButton = ({ title, icon, position, handleClick, otherClasses }: { title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string; }) => {
    return (
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6  text-white inline-block  md:w-60 md:mt-10" onClick={handleClick}>
        <span className="absolute inset-0 overflow-hidden rounded-lg">
            <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.6)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:w-60 md:mt-10" />
        </span>
        <div className={`relative flex justify-between items-center w-full z-10 rounded-lg bg-zinc-950 py-2 px-5 ring-1 ring-white/10 md:w-60 md:mt-10 gap-2 ${otherClasses}`}>
            <span>
                {position === 'left' && icon}
            </span>
            <span>
                {title}
            </span>
            <span>
                {position === 'right' && icon}
            </span>
        </div>

        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple/0 via-purple/90 to-purple/0 from-transition-opacity duration-500 group-hover:opacity-40" />
        </button>
    )
}

export default MagicButton