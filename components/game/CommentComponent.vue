<template>
  <article
    class="bg-primary/70 pt-20 py-12 bg-[url('/images/comment_bg.jpeg')] bg-cover bg-no-repeat bg-center bg-blend-multiply relative"
  >
    <div
      class="container flex flex-wrap gap-4 lg:gap-12 items-center border-b border-b-secondary pb-3 mb-12"
    >
      <h2 class="text-28 flex items-center text-white">
        評論<span class="ml-4 text-24">Review</span>
      </h2>
      <ul class="flex items-center gap-8 text-20">
        <li
          class="relative after:absolute after:top-1/2 after:-right-4 after:-translate-y-1/2 after:w-px after:h-5 after:bg-slate-200 after:inline-block after:ml-2"
        >
          <a class="block text-secondary" href="#">全部(203)</a>
        </li>
        <li
          class="relative after:absolute after:top-1/2 after:-right-4 after:-translate-y-1/2 after:w-px after:h-5 after:bg-slate-200 after:inline-block after:ml-2"
        >
          <a class="block" href="#">推薦(203)</a>
        </li>
        <li><a class="block" href="#">不推薦(10)</a></li>
      </ul>
    </div>

    <div class="container text-light z-20">
      <div class="flex px-7 flex-wrap">
        <article
          class="w-full lg:w-1/2 lg:px-7 xl:px-14 mb-8 flex flex-col"
          v-for="comment in CommentList"
          :key="comment.id"
        >
          <CommentItem :data="{ ...comment }" />
        </article>
      </div>
    </div>
    <div class="flex items-center justify-center z-20">
      <a
        href="#"
        class="block w-fit ml- border p-3 min-w-[220px] rounded-lg text-center ml-"
        >顯示更多...</a
      >
    </div>
  </article>
</template>

<script setup>
import CommentItem from '@/components/Comment/CommentItem.vue'

const RandomID = () => {
  return Math.floor(Math.random() * (999999 - 100000)) + 100000
}

const CommentList = computed(() => [
  {
    id: RandomID(),
    avatar: 'https://picsum.photos/id/237/200/300',
    name: '肥宅聚集組',
    commentCount: 9,
    isRecommend: true,
    recommendCount: 10,
    funCount: 100,
    gameTimes: 8,
    createTime: '2023-07-31 21:34',
    conent:
      '當白天被現實與工作榨乾後，下班開啟遊戲，你可以成為任何你想要的人，做任何大膽的決定。<br>是要當堅守日常自身的道德底線的聖人抑或是當個徹底放飛自我的惡人，完全取決於你。 <br>1個任務可能有10種解法，即便我第一章玩了3隻腳色我發現我每次的路線都不相同且還會有新發現。<br>在這裡你可以成為任何人 在這裡不會有遊戲公司教你玩遊戲在這裡你不會花2200玩到一個半成品遊戲<br>哦對了我光創腳色的時間，就比某D整體的遊戲時間長了'
  },
  {
    id: RandomID(),
    avatar: 'https://picsum.photos/id/16/200/300',
    name: 'bightw72191',
    commentCount: 10,
    isRecommend: false,
    recommendCount: 30,
    funCount: 0,
    gameTimes: 32,
    createTime: '2023-07-31 21:34',
    conent: '奇怪?怎麼早上9點了，剛剛不是早上10點嗎?'
  },
  {
    id: RandomID(),
    avatar: 'https://picsum.photos/id/64/200/300',
    name: 'Adoring Fan',
    commentCount: 84,
    isRecommend: true,
    recommendCount: 150,
    funCount: 1196,
    gameTimes: 105,
    createTime: '2023-07-31 21:34',
    conent:
      '玩了 103 小時通關，Larian Studios 做到了，他們接下製作柏德之門續作的火把，打造出一款夠資格而且能被稱為 CRPG 新標竿的遊戲。<br>有如奇幻小說的厚重文本、全語音配上龍與地下城 DM 般的旁白、劇情和戰鬥上的選擇和自由度、精彩撼動的故事、有個性的人物和隊友們、深入未知冒險的探索感。將所有 RPG 的精華聚於一身，接近完美的作品。<br>戰鬥系統是建立在龍與地下城第五版規則上，配上玩家角色可以做的各種動作：跳躍、推人、投擲和移動物品等等，我覺得可以把整體的玩法（尤其是戰鬥方面）稱為 *沙盒式*。遊戲並不會給玩家一個明顯的解決問題道路，而是把各種工具丟在地上，只要你直覺想得到的事就去嘗試，只要邏輯說得通的作法通常都可行。回合制的戰鬥更是把這點發揚光大，讓整體的自由度突破天際。\n我非常喜歡這種 *沒有牽著玩家的手* 的遊戲核心設計。當這種自由的玩法將玩家腦中的電燈泡點亮後，彷彿開啟了一種真正在 *玩遊戲* 的新思維和新視野。\n在我的冒險旅程中，不管是路邊的歌布林小隊也好、還是地底的難纏怪物、不易說服的矮人，我都能想出不只一種玩法來達到目的。這也是為什麼我覺得柏德之門3的重玩性和耐玩度絕對是數一數二的高。更不用說各種職業和種族的搭配，像我一樣喜歡沉醉在 Roleplay 中的玩家也有非常多的選擇。\n如果你喜歡角色扮演遊戲，不，如果你喜歡 *玩遊戲*，那我極度推薦這款，會讓你錯過睡覺時間的神奇遊戲。\n如果你是喜歡 CRPG 或是柏德之門1、2代的老玩家，或很愛闇龍紀元、神諭原罪這類，那我可以說：Welcome home。'
  },
  {
    id: RandomID(),
    avatar: 'https://picsum.photos/id/237/200/300',
    name: '肥宅聚集組',
    commentCount: 9,
    isRecommend: true,
    recommendCount: 10,
    funCount: 100,
    gameTimes: 8,
    createTime: '2023-07-31 21:34',
    conent:
      '當白天被現實與工作榨乾後，下班開啟遊戲，你可以成為任何你想要的人，做任何大膽的決定。<br>是要當堅守日常自身的道德底線的聖人抑或是當個徹底放飛自我的惡人，完全取決於你。 <br>1個任務可能有10種解法，即便我第一章玩了3隻腳色我發現我每次的路線都不相同且還會有新發現。<br>在這裡你可以成為任何人 在這裡不會有遊戲公司教你玩遊戲在這裡你不會花2200玩到一個半成品遊戲<br>哦對了我光創腳色的時間，就比某D整體的遊戲時間長了'
  },
  {
    id: RandomID(),
    avatar: 'https://picsum.photos/id/16/200/300',
    name: 'bightw72191',
    commentCount: 10,
    isRecommend: false,
    recommendCount: 30,
    funCount: 0,
    gameTimes: 32,
    createTime: '2023-07-31 21:34',
    conent: '奇怪?怎麼早上9點了，剛剛不是早上10點嗎?'
  },
  {
    id: RandomID(),
    avatar: 'https://picsum.photos/id/64/200/300',
    name: 'Adoring Fan',
    commentCount: 84,
    isRecommend: true,
    recommendCount: 150,
    funCount: 1196,
    gameTimes: 105,
    createTime: '2023-07-31 21:34',
    conent:
      '玩了 103 小時通關，Larian Studios 做到了，他們接下製作柏德之門續作的火把，打造出一款夠資格而且能被稱為 CRPG 新標竿的遊戲。<br>有如奇幻小說的厚重文本、全語音配上龍與地下城 DM 般的旁白、劇情和戰鬥上的選擇和自由度、精彩撼動的故事、有個性的人物和隊友們。'
  }
])

</script>
