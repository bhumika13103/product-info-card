var item1 = {
    imgSrc: "https://m.media-amazon.com/images/I/61sY8BGOyEL._AC_UY327_FMwebp_QL65_.jpg",
    itemName: "iQOO Z9x 5G (Storm Grey, 4GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge",
    itemReviewByPeople: 2124,
    itemBoughtInPastMonth: "1K+ bought in last month",
    discountPrice: "₹12,998",
    mrpPrice: "M.R.P: ₹17,999",
    discountPercent: " (28% off)",
    primeLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__5Y89sq5S18gQFdLWCrWD6fsmUr08j2_Bg&s",
    deliveryDate: "19 August,2024"
};
document.getElementById("img").src = item1.imgSrc;
document.getElementById("name").innerHTML = item1.itemName;
document.getElementById("people-review").innerHTML = item1.itemBoughtInPastMonth;
document.getElementById("discount-price").innerHTML = item1.discountPrice;
document.getElementById("mrp-price").innerHTML = item1.mrpPrice;
document.getElementById("discount-percent").innerHTML = item1.discountPercent;
document.getElementById("logo-prime").src = item1.primeLogo;
document.getElementById("date").innerHTML = item1.deliveryDate;