let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}
 
themeButton.addEventListener("click", toggleDarkMode);

const signNowButton = document.getElementById("sign-now-button");

const addSignature = () => {
    const nameInput = document.getElementById("name").value;
    const hometownInput = document.getElementById("hometown").value;

    const newSignature = document.createElement("p");
    newSignature.textContent = `🖊️ ${nameInput} from ${hometownInput} supports this.`;

    const signaturesSection = document.querySelector(".signatures");
    signaturesSection.appendChild(newSignature);
}

const validateForm = () => {
    let containsErrors = false;

    const petitionInputs = document.getElementById("sign-petition").elements;

    for (let i = 0; i < petitionInputs.length; i++) {
        if (petitionInputs[i].value.length < 2) {
            containsErrors = true;
            petitionInputs[i].classList.add('error');
        } else {
            petitionInputs[i].classList.remove('error');
        }
    }

    if (!containsErrors) {
        addSignature();

        // Clearing input fields
        for (let i = 0; i < petitionInputs.length; i++) {
            petitionInputs[i].value = '';
        }
        toggleModel();
        containsErrors = false; // Resetting containsErrors for the new form
    }
}

signNowButton.addEventListener('click', validateForm);

let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
};

// Select all elements with the class "revealable"
const revealableContainers = document.querySelectorAll('.revealable');

// Function to reveal elements
function reveal() {
    // Loop through each revealable container
    for (let i = 0; i < revealableContainers.length; i++) {
        const container = revealableContainers[i];
        const containerTop = container.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the container is in the viewport
        if (containerTop < windowHeight * 0.8) {
            container.classList.add('revealed'); // Add the 'revealed' class to reveal the container
        } else {
            container.classList.remove('revealed'); // Remove the 'revealed' class to hide the container
        }
    }
}

// Call the reveal function initially to reveal elements that are already in the viewport
reveal();

// Add event listener to reveal elements on scroll
window.addEventListener('scroll', reveal);


function toggleModal(person) {
    // Selecting modal and modalContent elements
    const modal = document.getElementById('thanks-modal');
    const modalContent = document.getElementById('thanks-modal-content');

    // Displaying the modal
    modal.style.display = 'flex';

    // Timeout to hide the modal after a few seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 4000); // Adjust the time duration as needed (3000 milliseconds = 4 seconds)

    function scaleImage() {
        const image = document.getElementById('Thank-you-image');
        let scaleFactor = 1;

        // Check if the current scale factor is 1
        if (scaleFactor === 1) {
            // If it is, set it to 0.8
            scaleFactor = 0.8;
        } else {
            // If not, set it back to 1
            scaleFactor = 1;
        }

        // Apply the scale factor to the image
        modalImage.style.transform = `scale(${scaleFactor})`;
    }
    const intervalId = setInterval(scaleImage, 500);
}
