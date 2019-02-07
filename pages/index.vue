<template>
  <div id="root" class="root clear-float">
    <information />
    <transition name="main-content" mode="out-in">
      <component :is="`content-${currentContents}`" />
    </transition>
    <menu-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { State } from "vuex-class"
import Information from "~/components/information.vue"
import MenuList from "~/components/menu-list.vue"
import TopContent from "~/components/top-content.vue"
import MakeGameContent from "~/components/make-game-content.vue"

@Component({
  //el: "#root",
  components: {
    Information,
    MenuList,
    "content-top": TopContent,
    "content-make-game": MakeGameContent
  }
})
class Root extends Vue {
  @State currentContents: string
}
export default Root
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
