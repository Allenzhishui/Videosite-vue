<template>
<!--  <div>-->
<!--    <h2>{{ video.title }}</h2>-->
<!--    <div>-->
<!--      {{ video.create_at | moment("YYYY-MM-DD h:mm:ss") }}创建-->
<!--      {{ video.view }}观赏-->
<!--    </div>-->
<!--  </div>-->
  <video-player class="video-player-box"
                ref="videoPlayer"
                :options="playerOptions">
  </video-player>
<!--  <div class="video-info">-->
<!--    <pre>{{video.info}}</pre>-->
<!--  </div>-->
</template>

<script>
import 'video.js/dist/video-js.css'
import {videoPlayer} from 'vue-video-player'
import * as API from '../api/video/'

export default {
  name: "VideoDetail",
  data () {
    return {
      video: {},
      playerOptions :{
        fluid: true,
        autoplay: false,
        sources: [{
          type: 'video/mp4',
          src: '',
        }],
      },
    };
  },
  methods: {
    load () {
      API.getVideo(this.$route.params.videoID).then(resp => {
        this.video = resp.data
        this.playerOptions.sources[0].src = this.video.url
      });
    },
  },
  components: {
    videoPlayer,
  },
  beforeMount() {
    this.load();
  }
}
</script>

<style scoped>

</style>