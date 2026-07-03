const SkillCard = ({ skill }) => {
  const { name, icon, level } = skill;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300">

      {/* Top */}
      <div className="flex items-center gap-3">
        <img src={icon} alt={name} className="w-10 h-10" />

        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {name}
        </h3>
      </div>

      {/* Percentage */}
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300 mt-4">
        <span>Skill Level</span>
        <span>{level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full mt-2 overflow-hidden">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>

    </div>
  );
};

export default SkillCard;