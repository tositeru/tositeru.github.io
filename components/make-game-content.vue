<template>
  <div class="contents-root make-games clear-float">
    <h2>作ったもの</h2>
    <div class="border" />

    <div v-for="game in games" :key="game.id" :obj="game" class="game">
      <h3>
        <a :href="game.url">
          {{ game.title }}
        </a>
      </h3>
      <img :src="`/images/${game.imagePath}`" />
      <p>
        {{ game.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

class GameInfo {
  id: string
  title: string
  imagePath: string
  url: string
  description: string

  constructor(
    id: string,
    title: string,
    imagePath: string,
    url: string,
    description: string
  ) {
    this.id = id
    this.title = title
    //this.imagePath = "~/assets/images/"+imagePath;
    this.imagePath = imagePath
    this.url = url
    this.description = description
  }
}

@Component({})
class TopContent extends Vue {
  games: Array<GameInfo> = [
    new GameInfo(
      "Dosun",
      "ドスン",
      "dosun.png",
      "https://unityroom.com/games/dosun",
      `
          第1回ボイロゲームジャム参加作品。
          迫りくるタカハシをツヅミの元までたどり着かせないようにささらを飛ばせ！
          (キャラクター画像はお借りしました。)
      `
    ),
    new GameInfo(
      "3dAmida",
      "3Dアミダクジ",
      "3dAmida.png",
      "https://unityroom.com/games/3damida",
      `
            アミダクジを3次元にしたもの。
            ランキング機能付きで規定回数とエンドレスモードでみんなと競おう。
      `
    ),
    new GameInfo(
      "oneStrokeFactory",
      "一筆工場",
      "oneStrokeFactory.png",
      "https://unityroom.com/games/hitofude_factory",
      `
            お題に出された字を一筆書き！
            成功すれば報酬ゲット、失敗しても…なんとかなる！
      `
    ),
    new GameInfo(
      "seven-color-sc-arrow",
      "ナナイロスクアロ",
      "seven-color-sc-arrow.gif",
      "https://connect.unity.com/p/seven-color-sc-arrow",
      `
七色で表現されたステージをタッチ操作でゴールまで目指せ!
Unity 2D Challenge投稿作品。
      `
    )
  ]
}

export default TopContent
</script>
