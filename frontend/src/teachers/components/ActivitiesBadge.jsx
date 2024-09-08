/* eslint-disable react/prop-types */
const ActivitiesBadge = ({ children, color }) => {
  return (
    <div className={`inline-block ${color} font-bold text-xs rounded p-2`}>
      <span>{children}</span>
    </div>
  );
};

export default ActivitiesBadge;
