// Oddiy foiz hisoblagich funksiyasi
function calculateInterest() {
    // Qiymatlarni olish va ularni raqamga (Number) aylantirish
    const principal = Number(document.getElementById('principal').value);
    const rate = Number(document.getElementById('rate').value);
    const years = Number(document.getElementById('years').value);

    // TypeError oldini olish uchun tekshiruv
    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert("Iltimos, barcha kataklarga to'g'ri raqam kiriting.");
        return;
    }

    // Hisoblash mantiqi
    const interest = (principal * rate * years) / 100;
    
    // Natijani ko'rsatish
    document.getElementById('result').innerText = interest.toFixed(2);
}
