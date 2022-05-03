<template>
  <div
    class="message-pop"
    v-if="isShow"
    :style="{
      width: `${width}px`,
      left: `${-width}px`,
      top: `${top}px`,
    }"
  >
    <div class="header">
      <slot name="title"></slot>
      <img
        @click="close"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAATRJREFUOBGVlE2SgjAQhZOw0WtMeQHgCJbWlD/XUK/jTr2FymYWM+UBKNi78Bi6AnwPDYUhQKarGlLp7o/uphMZx/FWSjkTQqzDMPzD21nSNJ1kWbZDQKQIKYpiBI2SJBm7UpDAFJAT/L+g3wRtsHhAh3men11ghMD/CB1A70qplcRCMJgQLIfQBwzLIAh+aTPFhHieN/d9/1KC6OwCa4MwvgL1wbogDVAbDGV7sFU90eXQX8tHRnrTLBP79Csba4MwzgqiwYBx694GoVHxYZN3OfUPScwaS7SKFWQ2FpG9c9YAmRCWw7nqg9VTFzYIh421GD1rDG0F6oIQROmClSAXyAvVDpPvq4CnuHNONIhvMzMc/IXCVbD/D4QgHuj6D8BYHPjXIugVhpluLJ37pAa7IaOfJxZ75bpqfyXtAAAAAElFTkSuQmCC"
        alt=""
      />
    </div>
    <slot name="content"> </slot>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";
defineProps({
  width: {
    type: String,
    required: true,
  },

  top: {
    type: String,
    default: "0",
  },
});
const isShow = ref(false);
const close = () => {
  isShow.value = false;
};
const showPop = () => {
  isShow.value = true;
};
defineExpose({
  showPop,
});
</script>

<style lang="scss" scoped>
.message-pop {
  background-color: #fff;
  padding: 10px;
  display: inline-block;
  box-shadow: 0 0 6px 0 rgb(143 83 10 / 50%);
  border-radius: 2px;
  position: absolute;
  left: 0;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    // margin-bottom: 20px;
  }
}
</style>
