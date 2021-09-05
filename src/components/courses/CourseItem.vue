<template lang="">
  <div class="course-items container-fluid">
    <div class="row">
      <div class="col-10 course-item-title">
        <p class="">
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
        <p class="">
          {{ courseItem.description }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-8 course-item-url">
        <p class="">
          Link: <a href="#">{{ courseItem.url }}</a>
        </p>
      </div>
      <div class="col course-item-state">
        <p class="text-center">{{ courseItem.state }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "course-item",
  props: {
    courseItem: {
      Type: Object,
      default: null,
    },
  },
};
</script>
<style lang="css">
.course-items {
  background: #f8fff486;
  height: 130px;
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

.course-item-state p {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #ec4f11cb;
}
</style>
