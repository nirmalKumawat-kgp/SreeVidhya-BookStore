import API from "../baseUrl";

const token = localStorage.getItem("authToken");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
export const handleAddToCart = async (bookId) => {
  const { data } = await API.post(`cart/addItem`, { BookId: bookId }, config);
  return data;
};
