const fileForm = document.querySelector("#fileForm")
const fileInput = document.querySelector("#fileInput")

fileForm.addEventListener("submit", async event => {
  event.preventDefault()
  const file = fileInput.files[0]

  const { url } = await fetch("/s3Url").then(res => res.json())
  console.log(url)

  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: file
  })

  const fileURL = url.split('?')[0]    
  const message = document.createElement("p")
  const message2 = document.createElement("p")
  message.textContent = "Your file was uploaded successfully."
  message2.textContent = fileURL
  document.body.appendChild(message)
  document.body.appendChild(message2)
})