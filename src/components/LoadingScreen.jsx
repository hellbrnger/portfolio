import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Loading>";
    
    useEffect(() => {
        let index = 0;
        let forward = true;

        const interval = setInterval(() => {
            if (forward) {
                index++;
                if (index > fullText.length) forward = false;
            } else {
                index--;
                if (index === 0) forward = true;
            }

            setText(fullText.substring(0, index));
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            setTimeout(() => {
                onComplete();
            }, 700);
        }, 2000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
         
            <div className="mb-6 text-4xl font-mono font-bold tracking-widest">
                <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 bg-clip-text text-transparent">
                    {text}
                </span>
                <span className="animate-blink ml-1 text-blue-500">|</span>
            </div>

          
            <div className="w-64 h-2 bg-gray-900 rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-fillBar1"></div>
            </div>
        </div>
    );
};
