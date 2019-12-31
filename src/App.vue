<template>
    <div>
        <h1>这是App组件</h1>
        <!--
            type: 颜色 default primary danger
            size: 大小 small normal large
            display: 禁用按钮
            plain: 边框有颜色
            icon: 图标 back more
            className: 自动以Toast样式, 需要自己提供一个类
         -->
        <mt-button @click="showToast" type="primary" size="small" icon="back">按钮</mt-button>

        <button type="button" class="mui-btn mui-btn-royal">
            基佬紫
        </button>
    </div>
</template>

<script>
    //导入Toast
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                toastInstance: null
            }
        },
        methods: {
            //message: 消息
            //position: 显示位置 top middle bottom
            //duration: 显示时间
            //iconClass: 设置图标
            //每个Toast都会返回一个Toast的实例, 调用close()就能停止Toast
            showToast() {
                this.toastInstance = Toast({
                    message: '加载中',
                    position: 'top',
                    duration: -1,
                    iconClass: 'glyphicon glyphicon-ok',
                    className: 'myToast'
                })
            },
            //模拟请求数据, 三秒延迟
            getList() {
                setInterval(() => this.toastInstance.close(), 3000)
            }
        },

        created() {
            this.getList();
        }
    }
</script>

<style scoped>

</style>