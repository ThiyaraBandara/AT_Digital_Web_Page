// Add click event listener to all questions
document.querySelectorAll(".faq-question, .faq-question1").forEach(question => {
    question.addEventListener("click", () => {
        const faqItem = question.closest(".faq-item");
        const answer = faqItem.querySelector(".faq-answer");
        const span = question.querySelector("span");

        // Toggle the current FAQ item
        const isOpen = faqItem.classList.contains("open");

        // If the clicked item was open, close it
        if (isOpen) {
            faqItem.classList.remove("open");
            answer.style.display = "none"; // Hide the answer
            span.textContent = "+"; // Change the symbol to plus
        } else {
            // Close all other FAQ items first
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("open");
                item.querySelector(".faq-answer").style.display = "none";
                item.querySelector("span").textContent = "+"; // Reset all symbols to "+"
            });

            // Now open the clicked FAQ item
            faqItem.classList.add("open");
            answer.style.display = "block"; // Show the answer
            span.textContent = "-"; // Change the symbol to minus
        }
    });
});
// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger Menu Toggle Functionality
document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show'); // Toggle the 'show' class
});

