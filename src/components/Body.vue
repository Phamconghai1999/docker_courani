<template lang="">
  <div class="container-fluid body-app">
    <div class="row">
      <div class="col btn-create-course">
        <button
          class="btn btn-default btn-success "
          data-toggle="modal"
          data-target="#course-create-modal"
        >
          Create
        </button>
      </div>

      <div class="col-6">
        <CourseList />
      </div>
      <div class="col-4 blank">
        <p>Blank (New Features)</p>
      </div>
    </div>
  </div>
</template>
<script>
import CourseList from "./courses/CourseList.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "body-app",
  data() {
    return {};
  },
  components: {
    CourseList,
  },
  computes: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["showNotification"]),
    showNoti() {
      this.showNotification({
        title: "Hello",
        message: "Bla bla",
      });
    },
  },
};
</script>
<style lang="css">
.body-app {
  position: relative;
  background: #b0ff7c33;
  min-width: 1050px;
  min-height: 580px;
}
.blank {
  background: #f0f0f0;
}
.btn-create-course button {
  align-items: center;
}
</style>
