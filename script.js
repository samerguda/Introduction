function readText() {
    const textToRead = `
        Hello, I'm [Your Name]. 
        I’m a web developer at one of the largest companies in Saudi Arabia, with many years of experience in the field.
        
        Experience: Throughout my career, I’ve not only developed numerous websites but also had the pleasure of teaching a wide range of students, helping them to build their skills in web development.
        
        Certifications: I’m certified by Meta, Google, and IBM, which has equipped me with the latest knowledge and techniques in the industry.
        
        Teaching Approach: I believe in a practical, hands-on learning experience. My goal is to help you not just learn, but truly master HTML, CSS, and Bootstrap through real-world applications.
        
        Conclusion: I’m excited to guide you on your journey to becoming a proficient web developer. Let’s get started!
    `;

    const speech = new SpeechSynthesisUtterance(textToRead);
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}