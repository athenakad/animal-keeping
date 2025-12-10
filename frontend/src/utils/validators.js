export const validators = {
  email: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  phone: (phone) => {
    const regex = /^69\d{8}$/;
    return regex.test(phone);
  },

  required: (value) => {
    return value && value.toString().trim().length > 0;
  },

  minLength: (value, length) => {
    return value && value.length >= length;
  }
};
