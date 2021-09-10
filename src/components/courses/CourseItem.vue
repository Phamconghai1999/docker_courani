<template lang="">
  <div class="course-items container-fluid">
    <div class="row">
      <div class="col-10 course-item-title">
        <p class="">
          {{ courseItem.title }}
        </p>
      </div>
      <div class="col-2 course-item-edit">
        <button
          class="btn btn-sm btn-light"
          @click="showCourseEditor(courseItem._id)"
        >
          <i class="far fa-edit"></i> Edit
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-10 course-item-desc">
        <p class="">
          {{ courseItem.description }}
        </p>
      </div>
      <div class="col-2 course-item-del">
        <button
          class="btn btn-sm btn-light"
          @click="deleteCourseApi(courseItem._id)"
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-8 course-item-url">
        <p class="">
          Link:
          <a :href="courseItem.url" target="_blank">{{ courseItemShortUrl }}</a>
        </p>
      </div>
      <div class="col course-item-state">
        <p class="text-center">{{ courseItem.state }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "course-item",
  props: {
    courseItem: {
      Type: Object,
      default: null,
    },
  },
  components: {},
  computed: {
    courseItemShortUrl() {
      let shortUrl = this.courseItem.url.slice(0, 35) + "...";
      return this.courseItem.url.length > 50 ? shortUrl : this.courseItem.url;
    },
  },
  methods: {
    ...mapActions(["showCourseEditor", "deleteCourseApi"]),
  },
};
</script>
<style lang="css">
.course-items {
  background: #f8fff486;
  min-height: 130px;
  border: 1px solid rgb(255, 135, 135);
  border-radius: 3px;
  padding: 10px;
  margin: 10px auto;
}
.course-item-title p {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
}
.course-item-title {
  position: relative;
  display: block;
}
.course-item-state p {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #ec4f11cb;
}

.course-item-url a {
  color: rgb(0, 119, 255);
}
.course-item-del button {
  color: rgba(255, 24, 24, 0.975);
  margin-left: 10px;
}
</style>
