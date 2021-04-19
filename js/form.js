const subscribeForm = document.getElementById("subscribe-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("subscribe-status");
      const data = new FormData(event.target);
      fetch(event.target.action, {
        method: subscribeForm.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        // status.innerHTML = "Thanks for your submission!";
        subscribeForm.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    subscribeForm.addEventListener("submit", handleSubmit)