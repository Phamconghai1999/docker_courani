<template lang="">
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    :class="isNotificated ? 'active' : ''"
  >
    <div class="toast-header">
      <img
        src="https://s.gravatar.com/avatar/057640eed356995cca728684158b3ccd?s=100"
        class="rounded mr-2 logo"
        alt="logo toast"
      />
      <strong class="mr-auto">{{ notiType }}</strong>
    </div>
    <div class="toast-body">
      {{ notiMessage }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "notification",
  computed: {
    ...mapGetters(["notiMessage", "notiType", "isNotificated"]),
  },
};
</script>
<style lang="css">
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  background: rgba(195, 215, 250, 0.911);
  min-width: 200px;
  margin: 15px;
  padding: 10px;
  border-radius: 15px;
  z-index: 9999;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 0.4s ease;
}
.toast.active {
  display: block;
  top: 10px;
  opacity: 1;
}
.toast .logo {
  height: 22px;
}
.toast-body {
  text-align: center;
}
</style>
