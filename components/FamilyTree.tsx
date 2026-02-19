import React from 'react';
import { TreeNodeData } from '../types';
import { familyTreeData } from '../data';

const TreeNode: React.FC<{ node: TreeNodeData }> = ({ node }) => {
  const getNodeStyles = (type: TreeNodeData['type']) => {
    switch (type) {
      case 'self': return 'border-amber-500 bg-amber-900/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]';
      case 'parent': return 'border-blue-400/50 bg-blue-900/20';
      case 'ancestor': return 'border-gray-600 bg-gray-900/40';
      case 'root': return 'border-purple-400/50 bg-purple-900/20';
      case 'relative': return 'border-pink-400/50 bg-pink-900/20';
      default: return 'border-gray-700 bg-black/40';
    }
  };

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center mx-4 relative">
      
      {/* Node Card */}
      <div 
        className={`
          relative z-10 w-48 p-3 mb-8 text-center rounded-lg shadow-sm border transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm
          ${getNodeStyles(node.type)}
          
          /* Vertical line above the node (connecting to parent) */
          before:content-[''] before:absolute before:-top-5 before:left-1/2 before:-ml-px before:w-0.5 before:h-5 before:bg-gray-600
        `}
      >
        <div className="text-xs font-bold uppercase text-gray-400 mb-1">{node.title}</div>
        <div className="font-bold text-white text-sm">{node.name}</div>
        {node.date && <div className="text-xs text-gray-500 mt-1">{node.date}</div>}
        {node.info && <div className="text-[10px] text-amber-500 mt-1 italic">"{node.info}"</div>}
      </div>

      {/* Children Container */}
      {hasChildren && (
        <div className="flex justify-center relative pt-5">
           
          {node.children!.map((child, index) => {
            const isFirst = index === 0;
            const isLast = index === node.children!.length - 1;
            const isOnly = node.children!.length === 1;

            return (
              <div key={index} className="relative px-2">
                 {/* Top horizontal connector for this child sibling */}
                 {!isOnly && (
                   <>
                     {/* Line to the left (if not first) */}
                     <div className={`absolute top-0 right-1/2 h-0.5 bg-gray-600 ${isFirst ? 'hidden' : 'left-0 right-1/2'}`} />
                     {/* Line to the right (if not last) */}
                     <div className={`absolute top-0 left-1/2 h-0.5 bg-gray-600 ${isLast ? 'hidden' : 'left-1/2 right-0'}`} />
                   </>
                 )}
                 
                 <TreeNode node={child} />
              </div>
            );
          })}
        </div>
      )}
      
      {/* Vertical line from bottom of parent to the children's crossbar */}
      {hasChildren && (
         <div className="absolute top-[calc(100%-2rem)] left-1/2 w-0.5 h-5 bg-gray-600 -translate-y-full" style={{ top: 'auto', bottom: '0', marginBottom: '1.25rem' }}></div> 
      )}
      {hasChildren && (
         <div className="absolute w-0.5 h-5 bg-gray-600" style={{ top: 'calc(4rem + 2px)' }}></div>
      )}
    </div>
  );
};

// Simplified Wrapper to handle the Root node which shouldn't have a top line
const TreeRoot: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
             {/* Root specific styling override to hide top line */}
             <div className="[&>div>div:first-child]:before:hidden"> 
                <TreeNode node={familyTreeData} />
             </div>
        </div>
    )
}

const FamilyTree: React.FC = () => {
  return (
    <section id="tree" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-white font-serif">The Spurlin-McCoy-DuBose Interconnection</h2>
          <p className="mt-2 text-gray-400">
            A visual map of the bloodline. Navigate from the present (You) back to the 1600s.
            <span className="block text-xs text-amber-500 mt-1">*Scroll horizontally to view full breadth</span>
          </p>
        </div>

        <div className="overflow-x-auto pb-12 custom-scrollbar">
          <div className="min-w-[1000px] flex flex-col items-center pt-8">
             <TreeRoot />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyTree;