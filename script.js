// 1. Efek Sticky Header saat Scrolling
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// 2. Smooth Scrolling untuk Nav Link (sudah dicover CSS, tapi ini untuk kontrol lebih)
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Handling Form Subscribe
const subscribeForm = document.getElementById('subscribe-form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        alert(`Terima kasih! Email ${email} telah terdaftar di Bangkit Tani Farm.`);
        this.reset();
    });
}