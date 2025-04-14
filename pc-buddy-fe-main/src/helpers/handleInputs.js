export const handleInputChange = (e, setState) => {
  setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
