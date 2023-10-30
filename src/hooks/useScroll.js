import { onUnmounted, onMounted, ref } from 'vue';
import { throttle } from 'underscore'

// console.log(throttle)

// export default function useScroll(reachBottomCB){
//   const scrollListenerHandler = () => {
//     const clienHeight = document.documentElement.clientHeight
//     const scrollTop = document.documentElement.scrollTop
//     const scrollHeight = document.documentElement.scrollHeight
//     console.log("-------")
//     if (clienHeight + scrollTop >= scrollHeight) {
//       console.log("滚动到底部了")
//       if(reachBottomCB) reachBottomCB()
//     }
//   }

//   onMounted(() => {
//     window.addEventListener("scroll", scrollListenerHandler)
//   })

//   onUnmounted(() => {
//     window.removeEventListener("scroll", scrollListenerHandler)
//   })
// }

export default function useScroll(elRef) {
  let el = window
  const isReachBottom = ref(false)
  const clienHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  // 防抖/节流
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clienHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clienHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    console.log(clienHeight.value, scrollTop.value, scrollHeight.value);
    if (clienHeight.value + scrollTop.value >= scrollHeight.value - 2) {
      console.log("滚动到底部了")
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    if (elRef) {
      el = elRef.value
    }
    el.addEventListener("scroll", scrollListenerHandler)
  })

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  })

  return { isReachBottom, clienHeight, scrollHeight, scrollTop }
}