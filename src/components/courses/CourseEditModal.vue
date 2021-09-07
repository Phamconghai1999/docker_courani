<template lang="">
  <div>
    <div class="course-edit-modal">
      <div class="cem-header">
        <h5>Course Editor</h5>
        <button class="btn btn-sm btn-info" @click="hideCourseEditor()">
          <i class="far fa-times-circle"></i>
        </button>
      </div>
      <hr />
      <form @submit="onSubmit">
        <div class="form-group">
          <input
            type="text"
            class="form-control mt-2"
            v-model="courseEdit.Title"
          />
          <textarea
            type="text"
            class="form-control mt-2"
            row="4"
            v-model="courseEdit.Description"
          />
          <input
            type="text"
            class="form-control mt-2"
            v-model="courseEdit.Url"
          />
          <select class="form-control mt-2 ml-8" v-model="courseEdit.State">
            <option>TO DO</option>
            <option>DOING</option>
            <option>DONE</option>
          </select>
          <button
            class="btn btn-primary btn-sm mt-2 edit-btn"
            type="submit"
            data-dismiss="modal"
            @click="onSubmit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "course-edit-modal",

  data() {
    return {
      courseEdit: {
        _id: "",
        Title: "",
        Description: "",
        Url: "",
        State: "",
      },
    };
  },
  created() {
    this.updateForm();
  },
  destroyed() {
    this.clearForm();
  },
  computed: {
    ...mapGetters(["openCourseEditor", "courseEditor"]),
  },
  methods: {
    ...mapActions(["hideCourseEditor", "updateCourseApi"]),
    onSubmit(e) {
      e.preventDefault();
      // console.log(this.courseEdit);
      this.updateCourseApi(this.courseEdit); // call API
      this.hideCourseEditor(); // call action => close editor
    },
    updateForm() {
      this.courseEdit = {
        _id: this.courseEditor._id,
        Title: this.courseEditor.title,
        Description: this.courseEditor.description,
        Url: this.courseEditor.url,
        State: this.courseEditor.state,
      };
    },
    clearForm() {
      this.courseEdit = {
        _id: "",
        Title: "",
        Description: "",
        Url: "",
        State: "",
      };
    },
  },
};
</script>
<style lang="css">
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.course-edit-modal {
  display: block;
  z-index: 99;
  position: fixed;
  width: 450px;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(175, 238, 238, 0.863);
  border: 2px solid rgba(82, 34, 255, 0.856);
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  animation: fadein 0.3s;
}
.course-edit-modal .cem-header {
  display: flex;
  justify-content: space-between;
}
.edit-btn {
  position: relative;
  left: 100%;
  transform: translateX(-60px);
}
</style>
