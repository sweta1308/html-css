const cancelBtn = document.querySelector(".cancelBtn");
const form = document.querySelector(".form");
const formElements = form.elements;

const handleSubmit = () => {
  const userData = {};
  const hobby = [];
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.tagName === "BUTTON") continue;
    userData[element.name] = element.value;
    userData.hobbies = hobby;
    if (element.type === "radio" && element.checked) {
      userData.gender === element.value
    }
    if (element.name === "hobbies") {
      if (element.checked) {
        hobby.push(element.value)
      }
    }
  }
  alert(
    `Form Data:\nName: ${userData.name}\nEmail: ${userData.email}\nGender: ${userData.gender}\nHobbies: ${userData.hobbies}\nPlace: ${userData.place}\nDate: ${userData.date}\nBio: ${userData?.bio}`
  );
};

const handleRadio = (e) => {
  console.log(e)
}

const handleCancel = (e) => {
  e.preventDefault();
  form.reset();
};

cancelBtn.addEventListener("click", handleCancel);
