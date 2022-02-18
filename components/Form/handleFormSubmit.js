import validURL from "./urlValidation";

const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

const errorClasses = [
  "placeholder:text-[#ffc6c8]",
  "border-[3px]",
  "border-[hsl(0,87%,67%)]",
];
const addErrorMassage = (input, setErrorMassage, errorMassage) => {
  input.classList.add(...errorClasses);
  setErrorMassage(errorMassage);
};
const removeErrorMassage = (input, setErrorMassage) => {
  input.classList.remove(...errorClasses);
  setErrorMassage("");
};

const handleFormSubmit = async (
  e,
  shortLinks,
  setLoading,
  setShortLinks,
  setErrorMassage
) => {
  e.preventDefault();
  const input = e.target.children[0];

  if (input.value === "") {
    addErrorMassage(input, setErrorMassage, "Please add a link");
  } else {
    removeErrorMassage(input, setErrorMassage);
  }

  if (input.value === "") return;
  setLoading(true);

  if (validURL(input.value)) {
    let isSameLink = false;
    //  fetch data
    const res = await fetch(`${BASE_URL}${input.value}`);
    const link = await res.json();
    shortLinks.forEach((shortLink) => {
      if (
        link.ok &&
        shortLink.result.original_link === link.result.original_link
      ) {
        isSameLink = true;
      }
    });
    if (link.ok && !isSameLink) {
      if (shortLinks.length >= 3) {
        shortLinks.pop();
      }
      input.value = "";
      setShortLinks((prevLinks) => [link, ...prevLinks]);
      removeErrorMassage(input, setErrorMassage);
    } else if (isSameLink) {
      addErrorMassage(input, setErrorMassage, "This link is already exist");
    }
  } else {
    addErrorMassage(input, setErrorMassage, "Please add a valid Link");
  }
  setLoading(false);
};

export default handleFormSubmit;
