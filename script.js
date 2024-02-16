const slider = document.getElementById('timeline-slider');
const events = document.querySelectorAll('.event');

slider.addEventListener('input', () => {
  const value = slider.value;
  events.forEach((event, index) => {
    const position = (index + 1) * 100 / (events.length + 1);
    event.style.left = `${position + value}%`;
  });
});


function openCitation(title) {
  var citationText;
  // Set the citation text based on the title
  if (title === "Civit_hri24") {
    citationText = `@inproceedings{Civit_hri24,
      title = {Introducing Social Robots to Assess Frailty in Older Adults},
      booktitle = {Proceedings of the 2024 {ACM}/{IEEE} {International} {Conference} on {Human}-{Robot} {Interaction}},
      author = {Civit, Aniol
                  and Andriella, Antonio
                  and Barrué, Cristian
                  and Antonio, Maite
                  and Boqué, Concepción
                  and Alenyà, Guillem},
      publisher = {Association for Computing Machinery},
      month = mar,
      year = {2024},
      pages = {XXX--XXX}
    }`;
  } else {
    citationText = "No citation available.";
  }
  // Open a small window with plain text citation
  window.open('', 'Citation', 'width=400,height=200').document.write('<pre>' + citationText + '</pre>');
}
