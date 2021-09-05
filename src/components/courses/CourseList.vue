<template lang="">
  <div>
    <ProgressBar v-bind:coursesValue="coursesValue" />
    <div v-for="courseItem in courses" :key="courseItem._id">
      <CourseItem v-bind:courseItem="courseItem" />
    </div>
  </div>
</template>
<script>
import ProgressBar from "./ProgressBar.vue";
import CourseItem from "./CourseItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "course-list",
  components: {
    ProgressBar,
    CourseItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["courses", "coursesValue"]),
  },
};
</script>
<style lang="css"></style>
