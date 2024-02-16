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
};


function openCitation_modal(identifier) {
  var citationText;
  // Set the citation text based on the identifier
  if (identifier === "Civit_hri24") {
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
  // Display the modal with citation content
  var modal = document.getElementById("citationModal");
  var citationContent = document.getElementById("citationContent");
  citationContent.textContent = citationText;
  modal.style.display = "block";
};

function closeModal() {
  // Close the modal
  var modal = document.getElementById("citationModal");
  modal.style.display = "none";
};


function toggleCitation(containerId) {
  if (containerId == "Civit_hri24"){
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
  var citationContainer = document.getElementById(containerId);
  citationContainer.style.display = citationContainer.style.display === 'block' ? 'none' : 'block';
  if (citationContainer.style.display === 'block') {
    // Set the citation text when the container is displayed
    var citationContent = document.getElementById(containerId).querySelector('pre');
    // Here you can set the appropriate citation text based on the containerId
    citationContent.textContent = citationText;
  };
};

function closeCitation(containerId) {
  var citationContainer = document.getElementById(containerId);
  citationContainer.style.display = 'none';
};
