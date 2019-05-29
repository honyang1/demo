<template>
  <div>
    <div class="container">
      <!--左侧边栏-->
      <div class="aside">
        <h1 class="header">
          <a href="javascript:;">{{appName}}</a>
        </h1>
        <ul class="menu-list">
          <li :class="{cur:showType==='all'}" @click="changeShowType('all')">
            <a href="javascript:;">
              <i class="icon icon-all"></i>
              <span>全部</span>
            </a>
          </li>
          <li :class="{cur:showType==='doc'}" @click="changeShowType('doc')">
            <a href="javascript:;">
              <i class="icon icon-doc"></i>
              <span>文档</span>
            </a>
          </li>
          <li :class="{cur:showType==='pic'}" @click="changeShowType('pic')">
            <a href="javascript:;">
              <i class="icon icon-pic"></i>
              <span>图片</span>
            </a>
          </li>
          <li :class="{cur:showType==='video'}" @click="changeShowType('video')">
            <a href="javascript:;">
              <i class="icon icon-video"></i>
              <span>视频</span>
            </a>
          </li>
          <li :class="{cur:showType==='music'}" @click="changeShowType('music')">
            <a href="javascript:;">
              <i class="icon icon-music"></i>
              <span>音乐</span>
            </a>
          </li>
        </ul>
      </div>
      <!--右侧主区域内容-->
      <div class="main">
        <!--顶部工具栏-->
        <div class="toolbar">
          <div class="layout clearfix">
            <div class="action-wrap action-wrap-upload">
              <div class="action-item">
                <i class="icon icon-upload-s"></i>
                <span class="act-txt">上传</span>
              </div>
            </div>

            <div class="action-wrap">
              <div class="action-item">
                <i class="icon icon-add"></i>
                <span class="act-txt">新建</span>
              </div>
            </div>

            <div class="action-wrap">
              <div class="action-item">
                <i class="icon icon-trash"></i>
                <span class="act-txt">删除</span>
              </div>
            </div>
          </div>
        </div>

        <!--主体内容-->
        <div class="main-body">
          <div class="hd">
            <div class="right clearfix">
              <div @click="clickIcon('list')" class="action-wrap">
                <div :class="{act:showMode==='list'}" class="action-item">
                  <i class="icon icon-mod-list"></i>
                  <span class="act-txt">列表</span>
                </div>
              </div>

              <div @click="clickIcon('thumb')" class="action-wrap">
                <div :class="{act:showMode==='thumb'}" class="action-item">
                  <i class="icon icon-mode-thumb"></i>
                  <span class="act-txt">缩略图</span>
                </div>
              </div>
            </div>

            <ul class="breadcrumb clearfix">
              <li class="item all">
                <a href="javascript:void(0)">全部</a>
              </li>
              <li class="item all">
                <i class="icon icon-bread-next"></i>
                <a href="javascript:void(0)">miaov资料</a>
              </li>
              <li class="item cur">
                <i class="icon icon-bread-next"></i>
                <a href="javascript:void(0)" title="视频">视频</a>
              </li>
            </ul>
          </div>

          <div class="list-wrap">
            <!--列表头部-->
            <div class="list-header clearfix">
              <div class="col checkbox">
                <!--icon-checkbox,icon-checkbox-hover,icon-checkbox-cur-->
                <i class="icon icon-checkbox"></i>
              </div>

              <div class="col col-border name" style="display: block;">
                <strong>名称</strong>
              </div>

              <div class="col col-border info" style="display: none;">已选择 ? 项</div>
            </div>
            <!--列表头部end-->

            <!--正文，缩略图-->
            <div v-if="showMode==='thumb'" class="list-item-wrap list-item-wrap-thumb">
              <ul class="list-item clearfix">
                <li class="item" v-for="(item,index) in floderFiles" :key="index">
                  <div class="inner">
                    <i class="icon-wrapper">
                      <i class="icon icon-file-l"></i>
                    </i>
                    <span :title="item.name" class="txt">{{item.name}}</span>
                  </div>
                  <i class="icon checkbox icon-checkbox"></i>
                </li>
              </ul>
              <ul class="figure-item clearfix">
                <li class="figure-list-item" v-for="(item,i) in othderFiles" :key="i">
                  <div class="figure-list-item-inner">
                    <i class="icon checkbox icon-checkbox"></i>
                    <div class="figure-list-item-pic">
                      <div class="img-wrapper">
                        <i class="icon icon-l icon-zip-l"></i>
                      </div>
                    </div>
                    <div class="figure-list-item-txt">
                      <p class="tit">{{item.name}}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!--列表模式-->
            <div v-else class="list-item-wrap list-item-wrap-list clearfix">
              <div class="row clearfix" v-for="(item,index) in floderFiles" :key="index">
                <div class="col checkbox-wrap">
                  <!--icon-checkbox,icon-checkbox-hover,icon-checkbox-cur-->
                  <i class="icon checkbox icon-checkbox-cur"></i>
                </div>

                <div class="col col-border name">{{item.name}}</div>
              </div>

              <div class="row clearfix" v-for="(item,index) in othderFiles" :key="index">
                <div class="col checkbox-wrap">
                  <!--icon-checkbox,icon-checkbox-hover,icon-checkbox-cur-->
                  <i class="icon checkbox icon-checkbox-cur"></i>
                </div>

                <div class="col col-border name">{{item.name}}</div>
              </div>
              <!--选中：cur-->
              <!-- <div class="row cur clearfix">
                <div class="col checkbox-wrap">
                  <i class="icon checkbox icon-checkbox-cur2"></i>
                </div>

                <div class="col col-border name">修改时间</div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--画框-->
    <div class="draw-selector"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      appName: "微云盘",
      showMode: "thumb", //缩略图-列表
      showType: "all", //当前显示文件类型
      //定义类型与MIME的类型关系
      MIMEMAPS: {
        doc: ["text/html", "text/css"],
        music: ["audio/mp3"],
        video: ["video/mp4"],
        pic: ["image/png", "image/gif"]
      },
      files: [
        {
          name: "文件夹1",
          type: ""
        },
        {
          name: "文件夹2",
          type: ""
        },
        {
          name: "1.html",
          type: "text/html"
        },
        {
          name: "1.css",
          type: "text/css"
        },
        {
          name: "朋友.mp3",
          type: "audio/mp3"
        },
        {
          name: "文件夹1",
          type: ""
        },
        {
          name: "vue案例.mp4",
          type: "video/mp4"
        }
      ]
    };
  },
  computed: {
    floderFiles() {
      return this.showType === "all"
        ? this.files.filter(item => item.type === "")
        : [];
    },
    othderFiles() {
      let otherFiles = this.files.filter(item => item.type !== "");
      if (this.showType === "all") return otherFiles;
      return otherFiles.filter(item=>this.MIMEMAPS[this.showType].includes(item.type));
    }
  },
  methods: {
    clickIcon(obj) {
      this.showMode = obj;
    },
    changeShowType(obj) {
      this.showType = obj;
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/index.css";
</style>
