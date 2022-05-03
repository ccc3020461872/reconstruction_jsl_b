<template>
  <div class="thumbtack" ref="thumbtackEl" @mousedown.stop="startTap">
    <ul class="box">
      <li v-for="(item,index) in list" class="item" @click="itemClick" :data-index="index">
        <img :src="item.img" alt="" />
      </li>
    </ul>
      <message-pop ref="callusEl" :width="popInfo.width" :top="popInfo.top">
          <template #title>ccc</template>
          <template #content>
            <!-- <callus /> -->
            <qrCode/>
          </template>
        </message-pop>
  </div>
</template>

<script setup>
import { ref ,computed, reactive} from "vue";
import messagePop from "components/messagePop";
import qrCode from "./qrCode.vue";
import callus from "./callus";
components: {
  messagePop, callus;
}
const callusEl = ref(null);
const thumbtackEl = ref(null);
const currentIndex = ref(0);
const popInfo = reactive({
  width: '',
  top: '',
})
//  拖动
const startTap = (e) => {
  const offsetX = e.clientX - thumbtackEl.value.offsetLeft;
  const offsetY = e.clientY - thumbtackEl.value.offsetTop;
  document.onmousemove = (event) => {
    thumbtackEl.value.style.left = event.clientX - offsetX + "px";
    thumbtackEl.value.style.top = event.clientY - offsetY + "px";
  };
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };
};
const list = [
  {
    title: "联系我们",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAPJJREFUOBGVk70KwjAUhZuiIC6Oos9hwc3R0dF3cNdXcHdzVBF8EAdHBydHBTehD6Ct35EIaUilvfDR3J9z0qQ0yvP8CG4cojqBMnXVyuvoY4YfnqCDSdurlaYhAw0PSxVeQwYnr6a0G6iFS7xu4t3BhlzG1YJhA3drsq0lZovYGJPzXNrtUvKs2tbOFLs24AovSJxW9SXCMbxBx+lVVzqTCBegOEPBhDyGKYyg5ciKS5prUOhNvsfhKbG+zi8yFk/YF9U2ozEHHUd3soIdBCNooCLTuhNd7N8oNbAmTdQzuJW5mL8OtolYcwOYgP6TvuXyASXJMDQZZ6DJAAAAAElFTkSuQmCC",
  },
  {
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANRJREFUOBHdkNEJwjAQhhuRPggO4AgKfREcwDkq7qAFdQo30EEcwyfBCSyU+qiUEr+UpBwpQfvqwUcul/+/5BJFPUJrncIdSjjB+Gc74jX4ce7TYIr74XUoB986YNjBFd0TlpALTyHybopxL268kU9gBu4lq67LVhBJM9smXBMzTm+z7dGME7w4QnVwysCaBd3/a966mRkxhrkgMZ9WQyhas2mCaOEJa2UK7gZvzZRSR1lDGrNPRK0aio1MWzOmlIORPBR5ZZ51gcryYt0IgTkvIBTvD+nJ3BogaCs4AAAAAElFTkSuQmCC",
  },
  {
    title: "二维码",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAaJJREFUOBGNkz1LA0EQhu+iSGzET8TGL/CDINoKdjZCQAsLC0G00jraaRoLsdNWhfwBQS0Um5DCyk7UQjERtQqkiURQxCLn8567sJwRfOFhZ2f2Zmdn9/wgCBKe521BE1hVMc5939+VgzUphiTENDeqMKZ9gicYXXBqAhpaYRX6wIcn2IEyWE1jFJU9BxugZIPQDo0gjRlky9cCwxADfZNzSxog4wPs2S1qjNv47mHcxuqtwajyjuDC8UXNSxwdULQBJVDDdOZ3WACp82cIY8YMfYdMhKRvqmGHOUst5XHGDbJrKaUOK4m6Hb3GAtf4aeJxRvXI7VmF+IvbA639JZI34ByKBB6Zq7qe/xxBVxlVEsc6ZHX3WbLdQtrZRU18hlFQ2ccwCwEUoNnwoWAd6Ap1Tj3dOSiBZM/cj30NN6B1B3AHGfVAWSXtugK6Z3tVmGF1bTKQ1i6Dql2EL7sDtpeHCVjTxFE39iYdL8Mr9gioam2YVAVvoB/DlR6JpD9O552hV2dyoH0SXTHXo1tSExMYf/7OxHuJZ8CqRIJ5/JM4pr4BOcsWbKCm9yEAAAAASUVORK5CYII=",
  },
];
const itemClick = (e) => {
   currentIndex.value = e.currentTarget.dataset.index
  if(currentIndex.value === '0'){
    popInfo.width = '250',
    popInfo.top = '-73'
  }else if(currentIndex.value === '2'){
    popInfo.width = '280',
    popInfo.top = '-406'
  }
  callusEl.value.showPop();
};

</script>

<style lang="scss" scoped>
.thumbtack {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
.item {
  background: #f8b500;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 16px;
  }
}
.item:hover {
  background-color: #e6a800;
}
</style>
