<template>
  <div class="contents-root profile">
    <h2>プロフィール</h2>
    <div class="border" />
    <section>
      <p>個人でゲームを作っているプログラマーです。</p>
    </section>
    <section>
      <ul class="QR-list clear-float">
        <li>
          <p>
            <a :href="unityroom">
              Unityroom
            </a>
          </p>
          <img class="QR-image" src="~assets/images/QR_URL_unityroom.png" />
        </li>
        <li>
          <p>
            <a :href="itch">
              itch.io
            </a>
          </p>
          <img class="QR-image" src="~assets/images/QR_URL_itch.png" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
class TopContent extends Vue {
  unityroom: string = "https://unityroom.com/users/qlvip7zeumg4hs0dnxc9"
  itch: string = "https://tositeru.itch.io/"
}

export default TopContent
</script>
