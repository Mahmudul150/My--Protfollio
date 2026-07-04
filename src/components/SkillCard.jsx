const SkillCard = ({ skill }) => {
  const { name, icon, level } = skill;

  const getLabel = () => {
    if (level >= 85) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <div>

      <div className="flex justify-between items-center mb-3">

        <div className="flex items-center gap-3">
          <img
            src={icon}
            alt={name}
            className="w-8 h-8 object-contain"
          />

          <span className="font-semibold text-slate-800 dark:text-white">
            {name}
          </span>
        </div>

        <div className="text-right">
          <p className="font-bold text-slate-800 dark:text-white">
            {level}%
          </p>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            {getLabel()}
          </p>
        </div>

      </div>

      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-700"
          style={{
            width: `${level}%`,
          }}
        />
      </div>

    </div>
  );
};

export default SkillCard;