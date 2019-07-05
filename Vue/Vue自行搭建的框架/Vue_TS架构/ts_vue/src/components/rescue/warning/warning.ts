import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { WarningData, PrivData } from "@/types/components/rescue/warning.interface";


@Component({})
export default class About extends Vue {
  // prop
  @Prop() data!: WarningData[];

  Data: PrivData[] = []

  @Watch("data", { immediate: true, deep: true })
  onDataChanged(val: WarningData[], oldVal: WarningData[]) {
    this.Data = val.map(item => this.convertData(item))
  }
  mounted() { // 页面加载完成之后
    setInterval(() => {
      this.Data = this.Data.map(item => this.convertData(item))
    }, 2000 * 60)
  }

  convertData(item: WarningData) {
    let date = this.$com.timeDiff(new Date(item.time), new Date());
    return {
      datetime: date.day + date.hours + date.minutes,
      ...item
    }
  }


}