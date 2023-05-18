export const toIndianCurrency = (num) => {
  const curr = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumSignificantDigits: (num + "").replace(".", "").length,
  });
  return curr;
};
