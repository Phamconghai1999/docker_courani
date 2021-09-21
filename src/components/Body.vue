<template lang="">
  <div class="body-app">
    <div class="row">
      <div class="col col-create-course">
        <button
          class="btn btn-default btn-success "
          data-toggle="modal"
          data-target="#course-create-modal"
        >
          Create
        </button>
      </div>

      <div class="col-6 course-list">
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
@media only screen and (min-width: 740px) {
  .body-app {
    position: relative;
    background: #b0ff7c33;
    min-width: 1050px;
    min-height: 580px;
  }
  .blank {
    background: #f0f0f0;
  }
  .col-create-course button {
    align-items: center;
  }
}
@media only screen and (max-width: 739px) {
  .body-app {
    font-size: 9px;
    background: rgba(128, 248, 202, 0.445);
    min-width: 408px;
  }
  .col-create-course {
    display: block;
    align-items: center;
  }
  .col-create-course button {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    display: block;
    left: 10px;
    font-size: 8px;
    z-index: 90;
    margin: 2px auto;
    background: rgba(255, 19, 129, 0.651);
  }
  .blank {
    display: none;
  }
  .col {
    width: 34px;
    max-width: 25%;
  }
}
</style>
