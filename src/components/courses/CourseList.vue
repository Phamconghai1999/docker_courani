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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "course-list",
  components: {
    ProgressBar,
    CourseItem,
  },
  computed: {
    ...mapGetters(["courses", "coursesValue"]),
  },
  methods: {
    ...mapActions(["getCoursesApi"]),
  },
  created() {
    this.getCoursesApi();
  },
};
</script>
<style lang="css"></style>
