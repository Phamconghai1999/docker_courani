<template lang="">
  <div>
    <ProgressBar v-bind:coursesValue="coursesValue" />
    <CourseCreateModal />
    <div v-if="openCourseEditor">
      <CourseEditModal />
    </div>
    <div v-if="coursesValue.all == 0" class="no-course-title">
      <p>No thing here. Create something . . .!</p>
    </div>
    <div v-for="courseItem in courses" :key="courseItem._id">
      <CourseItem v-bind:courseItem="courseItem" />
    </div>
  </div>
</template>
<script>
import ProgressBar from "./ProgressBar.vue";
import CourseCreateModal from "./CourseCreateModal.vue";
import CourseEditModal from "./CourseEditModal.vue";
import CourseItem from "./CourseItem.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "course-list",
  components: {
    ProgressBar,
    CourseItem,
    CourseCreateModal,
    CourseEditModal,
  },
  computed: {
    ...mapGetters(["courses", "coursesValue", "openCourseEditor"]),
  },
  methods: {
    ...mapActions(["getCoursesApi"]),
    ...mapMutations(["CLEAR_COURSE"]),
  },
  created() {
    this.getCoursesApi();
  },
  destroyed() {
    this.CLEAR_COURSE();
  },
};
</script>
<style lang="css">
/* Enter and leave animations can use different */
/* durations and timing functions.              */

.no-course-title {
  margin-top: 10px;
  margin-left: 30px;
}
</style>
