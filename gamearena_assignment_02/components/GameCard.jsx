import React from 'react';
import { StarIcon, TrophyIcon, GamepadIcon } from './Icons';

const GameCard = ({ game }) => {
  const isEditorsChoice = game.editors_choice === 'Y';
  
  // Determine score color
  let scoreColor = "text-red-400";
  if (game.score >= 8) scoreColor = "text-green-400";
  else if (game.score >= 6) scoreColor = "text-yellow-400";

  return (
    <div className="group relative bg-slate-800 hover:bg-slate-750 rounded-xl overflow-hidden shadow-lg border border-slate-700 transition-all duration-300 hover:shadow-indigo-500/20 hover:-translate-y-1 flex flex-col h-full">
      {/* Platform Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
           {/* Title */}
          <h3 className="text-xl font-bold text-slate-100 line-clamp-2 leading-tight group-hover:text-indigo-300 transition-colors">
            {game.title}
          </h3>
          
          {/* Score Badge */}
          <div className="flex items-center space-x-1 bg-slate-900/50 px-2 py-1 rounded-lg backdrop-blur-sm border border-slate-700 shadow-sm shrink-0 ml-2">
            <StarIcon className={`w-4 h-4 ${scoreColor}`} fill="currentColor" />
            <span className={`text-sm font-bold ${scoreColor}`}>{game.score}</span>
          </div>
        </div>

        {/* Metadata */}
        <div className="space-y-1 mb-4">
           <div className="flex items-center text-slate-400 text-sm">
             <GamepadIcon className="w-4 h-4 mr-2 text-slate-500" />
             <span className="font-medium">{game.platform}</span>
           </div>
           <div className="flex items-center text-slate-500 text-xs uppercase tracking-wide font-semibold">
              <span className="bg-slate-700/50 px-2 py-0.5 rounded text-slate-400">{game.genre}</span>
           </div>
        </div>
        
        {/* Editor's Choice Badge - Sticky to bottom if needed, or inline */}
        <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between">
          {isEditorsChoice ? (
            <div className="flex items-center space-x-1.5 text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20 shadow-[0_0_10px_rgba(251,191,36,0.1)]">
              <TrophyIcon className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Editor's Choice</span>
            </div>
          ) : (
            <div className="text-transparent select-none">.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;