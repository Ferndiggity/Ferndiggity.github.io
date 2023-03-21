document.getElementById('moodSelect').addEventListener('change', function() {
  const mood = this.value;
  
  switch (mood) {
    case 'happy':
      window.location.href = 'happy.html';
      break;
    case 'sad':
      window.location.href = 'sad.html';
      break;
    case 'angry':
      window.location.href = 'angry.html';
      break;
    default:
      console.log('No mood selected');
  }
});
