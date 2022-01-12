var secret = {
    data: "I am secret"
  };
  
  function destroy (stuff) {
    stuff = null;
  }
  
  destroy(secret);
  
  console.log(secret); // ?