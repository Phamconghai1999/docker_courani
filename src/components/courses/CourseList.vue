<template lang="">
  <div class="course-list">
    <ProgressBar />
    <p>Course List</p>
    <div
      v-for="courseItem in courses"
      :key="courseItem._id"
      class="course-items container"
    >
      <div class="row">
        <div class="col-10 course-item-title">
          <p
            class="mt-2 mb-1
           ml-2"
          >
            {{ courseItem.title }}
          </p>
        </div>
        <div class="col-2 course-item-edit">
          <button class="btn btn-sm btn-light">
            <i class="far fa-edit"></i> Edit
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-10 course-item-desc">
          <p class="mb-0 ml-3">
            {{ courseItem.description }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-8 course-item-url">
          <p class="mb-0 ml-3 mt-2">
            Link: <a href="#">{{ courseItem.url }}</a>
          </p>
        </div>
        <div class="col course-item-state">
          <p class="text-center">{{ courseItem.state }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressBar from "./ProgressBar.vue";

export default {
  name: "course-list",
  components: {
    ProgressBar,
  },
  data() {
    return {
      courses: [
        {
          _id: "611b8649d08ba736344f8f5c",
          title: "Hoc PHP fullstack",
          description: "Khoa hoc PHP2",
          url: "https://gg.com",
          state: "TO DO",
          user: {
            _id: "611b8591d08ba736344f8f57",
            username: "Pham Quang Thien",
          },
          createdAt: "2021-08-17T09:50:01.758Z",
          updatedAt: "2021-08-17T09:50:01.758Z",
          __v: 0,
        },
        {
          _id: "61338ef0d26ad90004aa8484",
          title: "Hoc VueJS ",
          description: "Khoa hoc VueJS",
          url: "https://vi.vuejs.org/",
          state: "DOING",
          user: {
            _id: "611b8591d08ba736344f8f57",
            username: "Pham Quang Thien",
          },
          createdAt: "2021-09-04T15:21:20.148Z",
          updatedAt: "2021-09-04T15:21:20.148Z",
          __v: 0,
        },
        {
          _id: "61338f61d26ad90004aa848a",
          title: "Hoc VueX ",
          description: "Khoa hoc VueX",
          url: "https://vi.vuejs.org/",
          state: "TO DO",
          user: {
            _id: "611b8591d08ba736344f8f57",
            username: "Pham Quang Thien",
          },
          createdAt: "2021-09-04T15:23:13.096Z",
          updatedAt: "2021-09-04T15:23:13.096Z",
          __v: 0,
        },
      ],
    };
  },
};
</script>
<style lang="css">
.course-list {
  display: block;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.course-items {
  display: block;
  background: #f8fff486;
  height: 130px;
  border: 1px solid rgb(255, 135, 135);
  border-radius: 3px;
  padding: 2px;
  margin: 5px;
}
.course-item-title p {
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
}

.course-item-desc p {
}
.course-item-url {
}
.course-item-state p {
  font-family: sans-serif;
  font-weight: 300;
  font-size: 20px;
}
</style>
