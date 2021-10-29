<template>
  <div class="rating-wrapper">
    <ul class="rating-back">
      <li>
        <i class="icon-star"></i>
      </li>
      <li>
        <i class="icon-star"></i>
      </li>
      <li>
        <i class="icon-star"></i>
      </li>
      <li>
        <i class="icon-star"></i>
      </li>
      <li>
        <i class="icon-star"></i>
      </li>
    </ul>
    <ul class="rating-front" :style="'width:' + (ratingNumber / 5) * 100 + '%'">
      <li>
        <i class="icon-star"></i>
      </li>
      <li>
        <i class="icon-star"></i>
      </li>
      <li>
        <i class="icon-star"></i>
      </li>
      <li>
        <i class="icon-star"></i>
      </li>
      <li>
        <i class="icon-star"></i>
      </li>
    </ul>
    <p>({{ratingNumber+ '/5'}})</p>
  </div>
</template>

<script>
export default {
  props: {
    ratingNumber: Number,
  },
};
</script>

<style lang="scss" scoped>
.rating-wrapper {
    position: relative;
    width: 91px;
    display: flex;
    flex-direction: row;
    p {
        font-size: .9rem;
    }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    li {
      margin-right: 0.25rem;
    }
  }
  .rating-back {
    li {
      i {
        color: #eee;
      }
    }
  }
  .rating-front {
      position: absolute;
      top: 0;
      overflow: hidden;
      z-index: 2;
    li {
      i {
        color: #f2cf60;
      }
    }
  }
}
</style>
