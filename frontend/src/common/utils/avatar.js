export const generateAvatar = (name, lastName) => {
  const initials = (name?.charAt(0) || "") + (lastName?.charAt(0) || "");

  const colors = ["#2b4eff", "#346EE0", "#40298b", "#F15050"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return {
    initials: initials.toUpperCase(),
    backgroundColor: randomColor,
  };
};
