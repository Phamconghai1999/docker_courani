<template lang="">
  <div class="progress-bar">
    <ul>
      <li>
        <p>ALL (5)</p>
      </li>
      <li>
        <p>TODO (3)</p>
      </li>
      <li>
        <p>DOING (1)</p>
      </li>
      <li>
        <p>DONE (1)</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "progress-bar",
  data() {
    return {};
  },
};
</script>
<style lang="css">
.progress-bar {
  background: #a3ffc2;
  color: rgb(0, 0, 0);
  text-align: center;
  border-radius: 3px;
  padding: 0px;
  margin: 0px;
}
.progress-bar ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  margin: 0px;
}
.progress-bar ul li {
  margin: 0px 25px;
  padding: 10px;
}
.progress-bar ul li p {
  margin: 0px;
  padding: 0px;
}
</style>
