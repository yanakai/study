<template>
    <div id="main-container" class="main-container" :class="$store.state.app.collapse?'position-collapse-left':'position-left'">
        <!-- 主内容区域 -->
        <div class="main-content">
        <keep-alive>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </keep-alive>
        </div>
    </div>
</template>
<style>
.main-container {
  padding: 0 5px 5px;
  position: absolute;
  top: 60px;
  left: 1px;
  right: 1px;
  bottom: 0px;
  .main-content {
    position: absolute;
    top: 45px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    padding: 5px;
    // background: rgba(209, 212, 212, 0.5);
  }
}
.position-left {
  left: 200px;
}
.position-collapse-left {
  left: 65px;
}
</style>