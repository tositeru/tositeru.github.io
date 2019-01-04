var informationCom = {
    template: `
        <div class="information">
            <h1>tositeru</h1>
            <div class="border"></div>
            <span>
              <a href="https://github.com/tositeru"><i class="fab fa-github"></i></a>
              <a href="https://twitter.com/tosi_teru"><i class="fab fa-twitter"></i></a>
            </span>
        </div>
    `
};

var menuListCom = {
    props: [
        'item'
    ],
    data: function() {
        return {
            list: [{
                id: "top",
                text: "トップ"
            }, {
                id: "make-game",
                text: "作ったもの"
            }]
        }
    },
    methods: {
        changeTab: function(tabData) {
            this.$root.currentContents = tabData.id;
            console.log("ろぐ" + tabData);
        }
    },
    template: `
        <div class="menu-list">
            <div class="menu-item"
                 v-for="item in list"
                 v-bind:obj="item"
                 v-bind:key="item.id"
                 v-on:click="changeTab(item)"
              >{{item.text}}</div>
            </ul>
        </div>
    `
}

// 簡単なプロフィール
var topContentCom = {
    template: `
        <div class="contents-root profile">
            <h2>プロフィール</h2>
            <div class="border"></div>
            <section>
                <p>個人でゲームをつくってます。</p>
                <p>プログラミングが一番得意です。</p>
            </section>
            <section>
                <ul class="QR-list">
                <li>
                <p>Unityroom</p>
                <img class="QR-image"src="./images/QR_URL_unityroom.png">
                </li>
                <li>
                <p>itch.io</p>
                <img class="QR-image"src="./images/QR_URL_itch.png">
                </li>
                </ul>
            </section>
        </div>
    `
};
var makeGameContentCom = {
    template: `
        <div class="contents-root make-games">
            <h2>作ったもの</h2>
            <div class="border"></div>

            <div v-for="game in games"
                 v-bind:obj="game"
                 v-bind:key="game.id"
                 class="game">
                 <h3><a href=game.url>{{game.title}}</a></h3>
                 <img v-bind:src=game.image>
                 <p>
                 {{game.description}}
                 </p>
            </div>
        </div>
    `,
    data: function() {
        var games = [{
            id: "Dosun",
            title: "ドスン",
            image: "./images/dosun.png",
            url: "https://unityroom.com/games/dosun",
            description: `
                第1回ボイロゲームジャム参加作品。
                迫りくるタカハシをツヅミの元までたどり着かせないようにささらを飛ばせ！
                (キャラクター画像はお借りしました。)
            `
        }, {
            id: "3dAmida",
            title: "3Dアミダクジ",
            image: "./images/3dAmida.png",
            url: "https://unityroom.com/games/3damida",
            description: `
                アミダクジを3次元にしたもの。
                ランキング機能付きで規定回数とエンドレスモードでみんなと競おう。
            `
        }, {
            id: "oneStrokeFactory",
            title: "一筆工場",
            image: "./images/oneStrokeFactory.png",
            url: "https://unityroom.com/games/hitofude_factory",
            description: `
                お題に出された字を一筆書き！
                成功すれば報酬ゲット、失敗しても…なんとかなる！
            `
        }, {
            id: "seven-color-sc-arrow",
            title: "ナナイロスクアロ",
            image: "./images/seven-color-sc-arrow.gif",
            url: "https://connect.unity.com/p/seven-color-sc-arrow",
            description: `
             　七色で表現されたステージをタッチ操作でゴールまで目指せ!
               Unity 2D Challenge投稿作品。
            `
        }];
        return {
            games: games,
        }
    }
};

var app = new Vue({
    el: "#root",
    data: function() {
        return {
            currentContents: "top"
        };
    },
    components: {
        "information": informationCom,
        "menu-list": menuListCom,
        "content-top": topContentCom,
        "content-make-game": makeGameContentCom,
    },
    // methods: {},
    computed: {
        currentContentsComponent: function() {
            return 'content-' + this.currentContents;
        }
    },
    //watch: {},
    // created: function(){},
    // mounted: function(){},
    // updated: function(){},
    // destroyed: function(){},
});