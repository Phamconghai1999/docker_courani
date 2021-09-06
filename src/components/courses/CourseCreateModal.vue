<template lang="">
  <div class="modal fade" tabindex="-1" role="dialog" id="course-create-modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add new course</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" @submit="onSubmit">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Title"
                v-model="newCourse.Title"
                required="true"
              />
              <textarea
                type="text"
                class="form-control mt-2"
                row="4"
                placeholder="Description"
                v-model="newCourse.Description"
              />
              <input
                type="text"
                class="form-control mt-2"
                placeholder="Link:"
                v-model="newCourse.Url"
              />
              <select class="form-control mt-2" v-model="newCourse.State">
                <option default value>TO DO</option>
                <option>DOING</option>
                <option>DONE</option>
              </select>
              <button class="btn btn-warning mt-2 add-course" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "course-create-modal",
  data() {
    return {
      newCourse: {
        Title: "",
        Description: "",
        State: "",
        Url: "",
      },
    };
  },
  methods: {
    ...mapActions(["createCourseApi"]),
    onSubmit(e) {
      e.preventDefault();
      console.log(this.newCourse);
      this.createCourseApi(this.newCourse);
      this.newCourse = {
        Title: "",
        Description: "",
        State: "",
        Url: "",
      };
    },
  },
};
</script>
<style lang="css">
.add-course {
  position: relative;
  left: 100%;
  transform: translateX(-80px);
}
</style>
