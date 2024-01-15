const submitBtn = document.querySelector(".submitBtn");
const cancelBtn = document.querySelector(".cancelBtn");
const form = document.querySelector(".form");
const formElements = form.elements;

const handleSubmit = () => {
  const userData = {};
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.tagName === "BUTTON") continue; 
    userData[element.name] = element.value;
  }
  alert(
    `Form Data:\nName: ${userData.name}\nEmail: ${userData.email}\nGender: ${userData.gender}\nHobbies: ${userData.hobbies}\nPlace: ${userData.place}\nDate: ${userData.date}\nBio: ${userData?.bio}`
  );
};

const handleCancel = (e) => {
  e.preventDefault();
  form.reset();
};

submitBtn.addEventListener("click", handleSubmit);
cancelBtn.addEventListener("clicl", handleCancel);
