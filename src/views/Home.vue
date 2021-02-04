<template>
<div>
  <h1>Home Page</h1>
  <button text color="primary" @click="upload()">Upload</button>
  
  </div>
</template>

<script>
import Game from "../lib/Game";
console.log("3")
export default {
  name: 'home',
   methods:
  {
    upload() {
      console.log("upload clicked")
      let upload;
      try {
         upload = Game.Set(
          true,
          Date.now(),
          ["Researcher","Scientist"]
        );
        console.log("success")
        alert("Upload Success!");
      } catch (err) {
        alert("Upload Failed!", err);
      }
      return upload;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
