<template>
  <div class="home">
    <el-row :gutter="20">
        <el-col :span="6">
            <div class="table-card">
                <div class="table-card__title">
                    <div>总销售额</div>
                    <el-tooltip class="item" effect="dark" content="指标提示信息" placement="top-start">
                        <i class="iconfont icon-info-circle"></i>
                    </el-tooltip>
                </div>
                <div class="table-card__number">
                    ¥ 126,560
                </div>
                <div class="table-card__table">
                    <div>周同比 12% <div id="triangle-up"></div> </div>
                    <div>日同比 11% <div id="triangle-down"></div> </div>
                </div>
                <div class="table-card__anthor">
                    日销售额  ￥12,423
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="table-card">
                <div class="table-card__title">
                    <div>访问量</div>
                    <el-tooltip class="item" effect="dark" content="指标提示信息" placement="top-start">
                        <i class="iconfont icon-info-circle"></i>
                    </el-tooltip>
                </div>
                <div class="table-card__number">
                    <i class="iconfont icon-addteam"></i>126,560
                </div>
                <div class="table-card__table">
                    <div id="visits"></div>
                </div>
                <div class="table-card__anthor">
                日访问量 1 次
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="table-card">
                <div class="table-card__title">
                    <div>支付笔数</div>
                    <el-tooltip class="item" effect="dark" content="指标提示信息" placement="top-start">
                        <i class="iconfont icon-info-circle"></i>
                    </el-tooltip>
                </div>
                <div class="table-card__number">
                    <i class="iconfont icon-transaction"></i>126,560
                </div>
                <div class="table-card__table">
                    <div id="payNumber"></div>
                </div>
                <div class="table-card__anthor">
                今日支付 1 笔
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="table-card">
                <div class="table-card__title">
                    <div>项目已安全运行</div>
                    <el-tooltip class="item" effect="dark" content="指标提示信息" placement="top-start">
                        <i class="iconfont icon-info-circle"></i>
                    </el-tooltip>
                </div>
                <div class="table-card__number" style="height:80px;">
                    <i class="iconfont icon-bug" style="color:green;font-size:30px;"></i>
                    {{runTime}}
                </div>
                <div class="table-card__anthor">
                今日正常运行
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="10">
            <div class="progres" v-loading="loading">
                <div class="progres__title">
                    📈<div>项目进度 -  commits</div>
                </div>
                <ul class="progres__list">
                    <li v-for="(item,index) in commitList" :key="index">
                        <a :href="item.parents[0].html_url" target="_blank">{{item.commit.message}}</a>
                    <span> - {{date24(item.commit.committer.date)}} </span>
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="14">
            <div class="chart3d">
                <div id="chart3dcanvas"></div>
            </div>
        </el-col>
    </el-row>
    <!-- <div id="map"></div> -->
  </div>
</template>

<script>
import { getAllcommit } from '@/api/github'
import { date24,runTime } from '@/utils/date'
let setInt = ''

export default {
  mounted(){
    getAllcommit().then(res => {
        this.commitList = res.data.slice(0,6)
        this.loading = false
    })
    this.visits()
    this.payNumber()
    this.chart3dcanvas()
    let _this = this
    setInt = setInterval(_ => {
        _this.runTime = runTime("2021-11-29")
    },100)
  },
  data(){
        return {
            commitList: [],
            loading: true,
            runTime: ''
        }
  },
  methods: {
        date24(data){
            return date24(data)
        },
        // 渲染访问量图标
        visits(){
            let option = {
                color: ['#1890ff'],
                xAxis: {
                    show: false,
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','a','s','aa','bb','vv','dd','dd','dd','dd']
                },
                yAxis: {
                    show: false,
                },
                tooltip: {
                    trigger: 'axis'
                },
                series: [
                    {
                    data: [820, 932, 901, 934, 1290, 1330,700,600,500,300,200,120,150,200,990,1200],
                    type: 'line',
                    areaStyle: {}
                    }
                ]
            };
            let Chart = this.echarts.init(document.getElementById("visits"));
            Chart.setOption(option);
            Chart.resize()
        },
        // 渲染支付笔数
        payNumber(){
            let option = {
                xAxis: {
                    show: false,
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    show: false,
                    type: 'value'
                },
                tooltip: {
                    trigger: 'axis'
                },
                series: [
                    {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                    }
                ]
            };
            let Chart = this.echarts.init(document.getElementById("payNumber"));
            Chart.setOption(option);
            Chart.resize()
        },
        // 渲染3d排名
        chart3dcanvas(){}
  }

}
</script>

<style lang="scss" scoped>
// col块样式
@mixin cardTheme{
    padding: 20px;
    background-color:$background-main-card-color;
    border-radius: 5px;
    padding: 20px;
    font-size: 15px;
    color: $text-base-color;
    max-height: 140px; 
    overflow: hidden;
}
// chart块样式
@mixin chartTheme{
    height: 180px;
    width: 120%;
    margin-left: -45px;
    margin-top: 10px;
    position: absolute;
    top: 20;
    z-index: 1 !important;
}

.home {
    @include b('table-card'){
        @include cardTheme;
        @include e('title'){
            color: $text-main-title-color;
            display:flex;
            flex-direction:row;
            align-items: center;
            justify-content: space-between;
            position: relative;
            z-index: 100;
        }
        @include e('number'){
            margin-top: 10px;
            font-size: 30px;
            font-weight: 500;
            display: flex;
            align-items: center;
        }
        @include e('table'){
            display:flex;
            flex-direction: row;
            align-items: center;
            font-size: 14px;
            height: 50px;
            position: relative;
            width: 100%;
            div {
                display:flex;
                flex-direction: row;
                align-items: center;
                margin-right: 20px;
            }

        }
        @include e('anthor'){
            padding-top: 15px;
            border-top: 1px solid #f0f0f0;
            font-size: 14px;
            padding-top: 3px;
            line-height: 40px;
            height: 20%;
        }
    }
    @include b('progres'){
        margin-top: 20px;
        @include cardTheme;
        max-height: 200px;
        @include e('title'){
            display: flex;
            align-items: center;
            div {
                margin-left: 5px;
                color: $text-base-color;
                font-size: 15px;
                font-weight: bold;
            }
        }
        @include e('list'){
            margin-left: 10px;
            margin-top: 10px;
            font-size: 14px;
            li {
                margin-bottom: 10px;
                margin-left: 20px;
                list-style: disc ;
                a {
                    color: $theme-color;
                }
            }
        }
    }
    @include b('chart3d'){
        @include cardTheme;
        margin-top: 20px;
    }
}


// 访问量图表
#visits {
    @include chartTheme
}
// 支付笔数
#payNumber {
    @include chartTheme  
}
// 三角形提示
#triangle-up {
    margin-left: 5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid red;
}
#triangle-down {
    margin-left: 5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid green;
}
</style>