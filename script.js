document.getElementById('questionnaire-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const response1 = document.getElementById('question1').value;
    const response2 = document.getElementById('question2').value;
    const response3 = document.getElementById('question3').value;
    const response4 = document.getElementById('question4').value;

    // Simpan data ke localStorage
    localStorage.setItem('response1', response1);
    localStorage.setItem('response2', response2);
    localStorage.setItem('response3', response3);
    localStorage.setItem('response4', response4);

    // Tampilkan alert kepada pengguna bahwa data sudah disimpan
    alert('Thank you for your answers! They have been recorded.');
    
    // Menampilkan jawaban yang sudah disimpan di konsol
    console.log(`Your name: ${response1}`);
    console.log(`How you feel about being friends with me: ${response2}`);
    console.log(`What you think about me: ${response3}`);
    console.log(`What you want to tell me: ${response4}`);
});
