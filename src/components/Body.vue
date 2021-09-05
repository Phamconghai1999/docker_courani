<template lang="">
  <div class="container-fluid body-app">
    <div class="row">
      <div class="col">
        <button class="btn btn-default btn-success">Create</button>
      </div>
      <div class="col-6">
        <CourseList />
      </div>
      <div class="col-4">
        <p>Blank</p>
      </div>
    </div>
  </div>
</template>
<script>
import CourseList from "./courses/CourseList.vue";

export default {
  name: "body-app",
  data() {
    return {};
  },
  components: {
    CourseList,
  },
};
</script>
<style lang="css">
.body-app {
  position: relative;
  background: #b0ff7c33;
}
</style>
