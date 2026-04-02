// export default function MetricCard({
//   icon,
//   title,
//   value,
//   percentage,
//   barColor,
//   bgColor,
// }) {
//   return (
    
//     <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm group hover:bg-slate-100 transition-all">
    
//       <div className="flex justify-between items-start mb-4">
//         <div
//           className={`w-12 h-12 rounded-2xl ${bgColor} flex items-center justify-center text-white`}
//         >
//           {icon}
//         </div>
//         <span className="text-green-500 bg-green-100 px-2 py-1 rounded-full text-xs font-bold">
//           {percentage}
//         </span>
//       </div>
//       <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm uppercase tracking-wider">
//         {title}
//       </p>
//       <p className="text-3xl font-extrabold">{value}</p>
//       <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
//         <div className={`${barColor} h-full`} style={{ width: "70%" }}></div>
//       </div>
//     </div>
//   );
// }



export default function MetricCard({
  icon,
  title,
  value,
  percentage,
  barColor,
  bgColor,
}) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 
    p-4 sm:p-5 md:p-6 
    rounded-xl shadow-sm 
    group hover:bg-slate-100 transition-all duration-300">

      {/* Top Section */}
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        
        {/* Icon */}
        <div
          className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
          rounded-xl sm:rounded-2xl ${bgColor} 
          flex items-center justify-center text-white text-lg sm:text-xl`}
        >
          {icon}
        </div>

        {/* Percentage */}
        <span className="text-green-500 bg-green-100 
        px-2 py-1 rounded-full 
        text-[10px] sm:text-xs font-bold whitespace-nowrap">
          {percentage}
        </span>
      </div>

      {/* Title */}
      <p className="text-gray-500 dark:text-gray-400 
      font-semibold text-xs sm:text-sm uppercase tracking-wider">
        {title}
      </p>

      {/* Value */}
      <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
        {value}
      </p>

      {/* Progress Bar */}
      <div className="mt-3 sm:mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`${barColor} h-full transition-all duration-500`}
          style={{ width: "70%" }}
        ></div>
      </div>
    </div>
  );
}