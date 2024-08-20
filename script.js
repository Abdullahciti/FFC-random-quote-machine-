const body = document.querySelector("body"),
  qouteText = document.querySelector(".qoute-box .qoute-text"),
  qouteAuthor = document.querySelector(".qoute .author span"),
  btn = document.querySelector(".row .new-qoute");

let fetchedData;

let fetchData = fetch("./db/data.json")
  .then((res) => res.json())
  .then((data) => {
    fetchedData = data;
    console.log(fetchedData);
    const newQoute = () => {
      const randomIndex = Math.floor(Math.random() * fetchedData.length); // Get a random quote
      document.documentElement.style.setProperty(
        "--bg-main-color",
        fetchedData[randomIndex].color
      );
      qouteText.textContent = fetchedData[randomIndex].qouteText;
      qouteAuthor.textContent = fetchedData[randomIndex].fullName;
    };

    btn.addEventListener("click", (e) => {
      newQoute();
    });
  });

body.onload = () => {
  let fetchData = fetch("./db/data.json")
    .then((res) => res.json())
    .then((data) => {
      fetchedData = data;
      console.log(fetchedData);
      const newQoute = () => {
        const randomIndex = Math.floor(Math.random() * fetchedData.length); // Get a random quote
        document.documentElement.style.setProperty(
          "--bg-main-color",
          fetchedData[randomIndex].color
        );
        qouteText.textContent = fetchedData[randomIndex].qouteText;
        qouteAuthor.textContent = fetchedData[randomIndex].fullName;
      };

      newQoute();
    });
};
