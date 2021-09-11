<template lang="">
  <div class="progress-bar">
    <ul>
      <li>
        <p>ALL ({{ coursesValue.all }})</p>
      </li>
      <li>
        <p>TODO ({{ coursesValue.todo }})</p>
      </li>
      <li>
        <p>DOING ({{ coursesValue.doing }})</p>
      </li>
      <li>
        <p>DONE ({{ coursesValue.done }})</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "progress-bar",
  props: {
    coursesValue: {
      Type: Object,
      default: {
        all: 0,
        todo: 0,
        doing: 0,
        done: 0,
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="css">
@media only screen and (min-width: 740px) {
  .progress-bar {
    background: #a3ffc2;
    color: rgb(0, 0, 0);
    text-align: center;
    border-radius: 3px;
    padding: 0px;
    margin: 0px;
    display: block;
  }
  .progress-bar ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
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
}
@media only screen and (max-width: 739px) {
  .progress-bar {
    background: #a3ffc2;
    color: rgb(0, 0, 0);
    text-align: center;
    border-radius: 3px;
    padding: 0px;
    margin: 0px;
    display: block;
  }
  .progress-bar ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }
  .progress-bar ul li {
    margin: 0px 2px;
    padding: 4px;
  }
  .progress-bar ul li p {
    margin: 0px;
    padding: 0px;
  }
}
</style>
