// data
const feedback = [
  {
    item: "Saddle (Purple, Red & Sun)",
    review:
      "Beautiful flowers, shipped fast and delivered in perfect condition. Great seller! A++++",
  },
  {
    item: "Cemetery Vase Bouquet (Pink, Purple & White)",
    review:
      "Beautiful arrangements that coordinate perfectly with the headstone arrangement purchased. Thank you so very much!",
  },
  {
    item: "Cemetery Vase Bouquet (Purple Two Tones)",
    review:
      "Excellent Ebay Seller..Very Pretty Flowers..Much Appreciated !! Fast Shipping..Thanks..",
  },
  {
    item: "Cemetery Vase Bouquet (White & Yellow)",
    review:
      "Very beautiful Memorial flowers!! Thank you Very fast shipping and delivery!!",
  },
  {
    item: "Cemetery Vase Bouquet (Blue, Orange & Yellow)",
    review:
      "Beautiful floral arrangement packaged carefully and shipped quickly.",
  },
  {
    item: "Cemetery Bouquet w/o Vase (Yellow)",
    review:
      "THESE YELLOW ROSES ARE BEAUTIFUL!!!! AND you can absolutely trust this seller! thank you for providing",
  },
  {
    item: "Memorial Cross (Red)",
    review:
      "Great quality. Very Very Quick turnaround. Received in great condition. . Highly recommended! Fabulous deal. Great seller.",
  },
];

const setReview = (int) => {
  // get elements
  const pEl = document.getElementById("purchasedItem");
  const divEl = document.getElementById("review");
  // set element content
  pEl.textContent = feedback[int].item;
  divEl.textContent = feedback[int].review;
};

const increase = (int) => {
  if (int === feedback.length - 1) int = 0;
  else int++;
  return int;
};

const decrease = (int) => {
  if (int === 0) int = feedback.length - 1;
  else int--;
  return int;
};

export const renderReview = () => {
  // set counter
  let counter = 0;
  // set default review
  setReview(counter);
  // get next button
  const nextBtn = document.getElementById("next");
  // add onclick event listener
  nextBtn.onclick = () => {
    counter = increase(counter);
    setReview(counter);
  };
  // prev button
  const prevBtn = document.getElementById("prev");
  // add onclick event listener
  prevBtn.onclick = () => {
    counter = decrease(counter);
    setReview(counter);
  };
};
