export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('el-GR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatTime = (time) => {
  return time;
};

export const getMinDate = () => {
  return new Date().toISOString().split('T')[0];
};

export const isValidDate = (date) => {
  const selected = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected >= today;
};