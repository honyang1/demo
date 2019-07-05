import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import * as type from "@/types/components/common/map.interface";
// import {  } from "@/components" // 组件
declare let AMap: any;
@Component({})
export default class About extends Vue {
  // prop
  @Prop() data!: type.MapData;
  // data
  dialog: type.MapData = {
    visible: false,       /* 是否显示地图 */
    isQuery: false,       /* 是否显示查询条件 */
    form: { }             /* 表单数据 */
  }
  private mapPriv: type.MapPrivate = {
    map: undefined,
    marker: undefined,
    placeSearch: undefined
  }
  @Watch("data", { immediate: true, deep: true })
  onDataChanged(val: type.MapData, oldVal: type.MapData) {
    this.dialog = val;
    this.$nextTick(() => {
      /* 判断显示地图 */
      if (val.visible && this.$com.isNull(this.mapPriv.map)) {
        this.mapPriv.map = new AMap.Map("container", {
          resizeEnable: true,
          zoom: 15
        });
        this.mapPriv.map.on("click", this.mapClick); // 添加点击事件
        this.mapSearch();
      }
      /* 传入了坐标-往地图上添加点 */
      if (!this.$com.isNull(val.form.lat) && !this.$com.isNull(val.form.lng)) {
        this.addMarker({ lng: val.form.lng, lat: val.form.lat, title: val.form.title });
      }
    })
  }

  mapClick(e: any) { /* 地图点击事件 */
    this.addMarker({ lng: e.lnglat.getLng(), lat: e.lnglat.getLat() });
  }
  addMarker(item: type.MapRes) { /* 地图上添加点 */
    this.dialog.form.lat = item.lat;
    this.dialog.form.lng = item.lng;
    this.clearMarker();
    this.mapPriv.map.setCenter([item.lng, item.lat]);
    this.mapPriv.marker = new AMap.Marker({
      icon:
        "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
      position: [item.lng, item.lat],
      offset: new AMap.Pixel(-13, -30),
      title: item.title
    });

    this.mapPriv.marker.setMap(this.mapPriv.map);
  }
  mapSearch() { /* 地图检索 */
    let auto = new AMap.Autocomplete({ input: "likeInput" });
    this.mapPriv.placeSearch = new AMap.PlaceSearch({}); // 构造地点查询类
    AMap.event.addListener(auto, "select", this.select); // 注册监听，当选中某条记录时会触发
  }
  select(e: any) {  /* 选择下拉列表事件 */
    let that = this;
    this.mapPriv.placeSearch.setCity(e.poi.adcode);
    this.mapPriv.placeSearch.search(e.poi.name, (status: any, result: any) => {
      let lng = result.poiList.pois[0].location.lng;
      let lat = result.poiList.pois[0].location.lat;
      let title = result.poiList.pois[0].name;
      that.addMarker({ lng, lat, title });
    });
  }
  clearMarker() { /* 移除地图上的点 */
    if (this.mapPriv.marker) {
      this.mapPriv.marker.setMap(null);
      this.mapPriv.marker = null;
    }
  }
  close() { /* 关闭 */
    this.dialog.visible = false;
  }
  callback() {
    this.dialog.visible = false;
    this.$emit("callback", { lat: this.dialog.form.lat, lng: this.dialog.form.lng, title: this.dialog.form.title });
  }
}
