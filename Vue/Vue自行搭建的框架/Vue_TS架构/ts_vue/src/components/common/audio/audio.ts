import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { AudioData } from "@/types/components/common/audio.interface";
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // prop
  @Prop() data!: AudioData;

  audioUrl: string = ''  // 音频文件地址

  @Watch("data", { immediate: true, deep: true })
  onDataChanged(val: AudioData, oldVal: AudioData) {
    this.audioUrl = val.url;
  }

  play() { // 播放音频文件
    (this.$refs.audio as any).play();
  }
}
