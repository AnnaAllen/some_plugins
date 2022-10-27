<template>
<!-- 
  center: 经纬度
  zoom： 缩放等级
  scroll-wheel-zoom：是否滚轮缩放
 -->
  <baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="zoom" :scroll-wheel-zoom="true">

    <!-- 
      anchor： 停靠位置
      offset： 偏移值
     -->
     <!-- 缩放控件 -->
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> 

    <!-- 
      ## 地图类型
        + type：控件样式
        + mapTypes： 控件展示的地图类型 BMAP_NORMAL_MAP | BMAP_PERSPECTIVE_MAP | BMAP_SATELLITE_MAP | BMAP_HYBRID_MAP
     -->
    <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>

    <!-- 
      ## 缩略图
        + size： 缩略图控件大小
        + isOpen： 缩略图添加到地图后的开合状态
        + @viewchanged = fun(type, target, isOpen) : 缩略地图开合状态变化后触发
        + @viewchanging = fun(type, target) : 缩略地图开合状态变化过程中触发
     -->
    <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>

    <!-- 
      ## 定位控件
        + showAddressBar: 是否显示定位信息面板
        + autoLocation: 添加控件时是否进行定位
        + locationIcon: 定位中心点的Icon样式
        + @locationSuccess = locationSuccess(point, AddressComponent, marker) : 定位成功后触发
        + @locationError = locationError(StatusCode) : 定位失败后触发
     -->
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>

    <!-- 
      ## 版权控件
        + copyright： 版权信息列表
     -->
    <bm-copyright
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>我是版权信息</a>'}]">
    </bm-copyright>

    <!-- 
      ## 城市选择控件
        + @changeBefore = changeBefore() : 切换城市前触发此事件
        + @changeAfter = changeAfter() : 	切换城市后触发此事件
     -->
     <bm-city-list anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-city-list>

    <!-- 自定义控件 -->
    <bm-control>
      <button @click="addZoom(19)">缩放至最大</button>
      <button @click="addZoom(10)">还原</button>
      <button @click="addZoom(3)">缩放至最小</button>
    </bm-control>

    <!-- 
      ## 点
        + icon: 标注所用的图标对象 :icon="{url: '', size: {width: 300, height: 157}}"
        + position： 标注的位置
        + dragging： 是否启用拖动
        + clicking： 	是否响应点击事件
        + raiseOnDrag： 拖拽标注时，标注是否开启离开地图表面效果
        + draggingCursor: 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
        + rotation: 旋转角度
        + shadow: 阴影图标
        + title：鼠标移到marker上的显示内容
        + label：为标注添加文本标注
        + animation：动画效果
        + top：将标注置于其他标注之上。默认情况下，纬度较低的标注会覆盖在纬度较高的标注之上
        + zIndex: 设置覆盖物的zIndex
     -->
    <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" :raiseOnDrag="true" animation="BMAP_ANIMATION_BOUNCE" @click="infoWindowOpen">
      <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">我爱北京天安门</bm-info-window>
      <bm-label content="北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
    </bm-marker>

    <!-- 
      ## 海量点
        + points : 地图上展示的点坐标集合
        + shape: 坐标点形状
        + size: 坐标点尺寸
        + color: 坐标点颜色
        + @click = click(currentTarget, point, returnValue, target, type) : 点击坐标点后会触发此事件
        + @mouseout = mouseout(currentTarget, point, returnValue, target, type) : 鼠标离开坐标点时触发此事件
        + @mouseover = mouseover(currentTarget, point, returnValue, target, type) : 当鼠标进入坐标点区域时会触发此事件
     -->
    <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" size="BMAP_POINT_SIZE_SMALL" @click="clickHandler"></bm-point-collection>

    <!-- 
      ## 折线
        + path: 构成折线的点
        + strokeColor: 折线颜色
        + strokeWeight: 折线的宽度，以像素为单位
        + strokeOpacity: 折线的透明度，取值范围0 - 1
        + strokeStyle: 折线的样式，solid或dashed
        + massClear: 是否在调用map.clearOverlays时清除此覆盖物
        + editing：是否启用线编辑、
        + clicking：是否响应点击事件
        + icons：贴合折线的图标
        --------------------------------
        + @click = click(type, target, point, pixel) : 点击折线后会触发此事件
        + @dblclick = dblclick(type, target, point, pixel) : 双击折线后会触发此事件
        + @mousedown = mousedown(type, target, point, pixel) : 鼠标在折线上按下触发此事件
        + @mouseup = mouseup(type, target, point, pixel) : 鼠标在折线释放触发此事件
        + @mouseout = mouseout(type, target, point, pixel) : 鼠标离开折线时触发此事件
        + @mouseover = mouseover(type, target, point, pixel) : 当鼠标进入折线区域时会触发此事件
        + @remove = remove(type, target) : 	移除折线时触发
        + @lineupdate = lineupdate(type, target) : 覆盖物的属性发生变化时触发
     -->
    <bm-polyline :path="polylinePath" stroke-color="red" :stroke-opacity="0.5" :stroke-weight="2" :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>
    <!-- 视图容器 比例尺通过视图容器的anchor属性设置 -->
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
  </baidu-map>
</template>

<script>
export default {
 data() {
  return {
    zoom: 15,
    show: false,
    points: [],
    polylinePath: [
      {lng: 116.404, lat: 39.915},
      {lng: 116.405, lat: 39.920},
      {lng: 116.423493, lat: 39.907445}
    ]
  }
 },
 mounted() {
  this.addPoints()
 },
 methods: {
  addZoom (level) {
    this.zoom = level
  },
  infoWindowClose () {
    this.show = false
  },
  infoWindowOpen () {
    this.show = true
  },
  clickHandler (e) {
    alert(`单击点的坐标为：${e.point.lng}, ${e.point.lat}`);
  },
  addPoints () {
    const points = []
    for (var i = 0; i < 1000; i++) {
      const position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
      points.push(position)
    }
    this.points = points
  },
  updatePolylinePath (e) {
    this.polylinePath = e.target.getPath()
  },
  addPolylinePoint () {
    this.polylinePath.push({lng: 116.404, lat: 39.915})
  }
 }
}
</script>

<style>
.map {
  width: 100%;
  height: 400px;
}
</style>