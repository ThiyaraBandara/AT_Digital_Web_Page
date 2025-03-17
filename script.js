document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        question.nextElementSibling.classList.toggle("show");
    });
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('open');
        
        // Toggle the plus/minus sign
        const span = button.querySelector('span');
        span.textContent = faqItem.classList.contains('open') ? '-' : '+';
    });
});