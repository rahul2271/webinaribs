// components/Tile.js
// import Image from 'next/image';

// const Tile = ({ iconSrc, title, description, bgColorClass, borderColorClass }) => {
//   return (
//     <div className={`${bgColorClass} ${borderColorClass}  border-2 text-center p-5 rounded-lg flex flex-col items-center w-full`}>
//       <Image className='border-2 border-white rounded-[50px] p-2  ' src={iconSrc} alt={title} width={64} height={64} />
//       <h3 className="mt-4 mb-2 text-xl font-semibold">{title}</h3>
//       <p className='font-light text-[12px]'>{description}</p>
//     </div>
//   );
// };

// export default Tile;


// components/Tile.js
import Image from 'next/image';

const Tile = ({ iconSrc, title, description, bgColorClass, borderColorClass }) => {
  return (
    <div className={`${bgColorClass} ${borderColorClass} transform transition-transform duration-300 hover:-translate-y-4 hover:shadow-lg text-center p-5 rounded-lg flex flex-col items-center w-full border-2`}>
      <div className="p-4 border-2 rounded-full border-current">
        <Image src={iconSrc} alt={title} width={64} height={64} />
      </div>
      <h3 className="mt-4 mb-2 text-lg font-semibold">{title}</h3>
      <p  className='font-light text-[12px]'>{description}</p>
    </div>
  );
};

export default Tile;
