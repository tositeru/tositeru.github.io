<template>
  <div class="menu-list clear-float">
    <div
      v-for="item in list"
      :key="item.id"
      class="menu-item"
      :obj="item"
      @click="changeTab(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

class MenuItem {
  id: string
  text: string

  constructor(id: string, text: string) {
    this.id = id
    this.text = text
  }
}

@Component({})
class MenuList extends Vue {
  list: Array<MenuItem> = [
    new MenuItem("top", "トップ"),
    new MenuItem("make-game", "作ったもの")
  ]

  changeTab(tabData: MenuItem) {
    this.$store.commit("setContents", tabData.id)
  }
}

export default MenuList
</script>
