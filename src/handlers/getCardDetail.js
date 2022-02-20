import renderCard from '../helpers/renderCard.js';
import { fetchData } from '../helpers/fetchData.js';
// Fetch card data from API for card detail page
const getCardDetail = async (url) => {
  try {
    const data = await fetchData(url);
    renderCard(data);
  } catch (error) {
    console.log(error);
  }
};
export default getCardDetail;
