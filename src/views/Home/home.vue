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
            <div class="table-card"></div>
        </el-col>
        <el-col :span="6">
            <div class="table-card"></div>
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
        <el-col :span="14"></el-col>
    </el-row>
    <!-- <div id="map"></div> -->
  </div>
</template>

<script>
import { getAllcommit } from '@/api/github'
import { date24 } from '@/utils/date'
export default {
  mounted(){
    getAllcommit().then(res => {
        this.commitList = res.data.slice(0,6)
        this.loading = false
    })

    let _this = this // 在Chart内部访问this
    this.visits()
    
    },
    data(){
        return {
            commitList: [],
            loading: true,
        }
    },
    methods: {
        date24(data){
            return date24(data)
        },
        // 渲染访问量图标
        visits(){
            let option = {
                xAxis: {
                    show: false,
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','a','s']
                },
                yAxis: {
                    show: false,
                },
                series: [
                    {
                    data: [820, 932, 901, 934, 1290, 1330, 0,1320,700,600,500,100],
                    type: 'line',
                    areaStyle: {}
                    }
                ]
            };
            let Chart = this.echarts.init(document.getElementById("visits"));
            Chart.setOption(option);
            Chart.resize()
        }
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
        }
        @include e('number'){
            margin-top: 10px;
            font-size: 30px;
            font-weight: 500;
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
}


// 访问量图表
#visits {
    position: absolute;
    top: 10;
    width: 400px;
    height: 180px;
    margin-left: -30px;
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