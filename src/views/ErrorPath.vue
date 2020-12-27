<template>
  <div class="wrapper">
    <h1 class="slideShine">
     亲，Error404了呢！！！，此页面Kaiwin还没有开发噢，请联系开发者Kaiwin，为您定做页面。
    </h1>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.slideShine {
    position: absolute;
    top: 20%;
    left: 50%;
    width: 100%;
    transform: translate(-50%,-30%);
  background: #561214 -webkit-linear-gradient(
      left,
      #561214,
      #febaf7 50%,
      #ff0 90%,
      #561214,
      #f82525 50%,
      #e236bd,
    ) no-repeat 0 0;
  background-size: 20% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
}

.slideShine {
  -webkit-animation: slideShine 4s linear infinite;
  animation: slideShine 4s linear infinite;
}

@-webkit-keyframes slideShine {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 100% 100%;
  }
}

@keyframes slideShine {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 100% 100%;
  }
}
</style>
