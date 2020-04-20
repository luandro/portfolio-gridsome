<template>
  <div class="timeline">
    <div v-for="category in categories" :key="category" class="category-item">
      <div class="category-title">
        <h2>{{ category }}</h2>
        <div class="border" />
      </div>
      <div class="category-list">
        <div v-for="item in orderTimeline(category)" :key="item.node.title" class="timeline-item">
          <a v-if="item.node.link" :href="item.node.link" target="_blank">
            <h3>{{ item.node.title }}</h3>
          </a>
          <h3 v-else>{{ item.node.title }}</h3>
          <h4>{{ item.node.from }}{{ item.node.to ? `/${item.node.to}` : ''}}</h4>
          <p v-html="item.node.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    timeline: {
      type: Array,
      required: true
    }
  },
  computed: {
    categories () {
      return [...new Set(this.timeline
      .sort((a, b) => a.node.category.split('-')[0] - b.node.category.split('-')[0])
      .map(item => item.node.category.split('-')[1]))]

    }
  },
  methods: {
    orderTimeline (category) {
      return this.timeline
        .filter(i => i.node.category.split('-')[1] === category)
        .sort((a, b) => parseInt(b.node.from) - parseInt(a.node.from))
    }
  }
}
</script>

<style scoped lang="scss">
.timeline {
  padding: 10vh 3vw;
}
.timeline-item {
  padding: 0 2.5vw;
  h3 {
    font-size: 1.5em;
  }
  h4 {
    margin-top: -1.2em;
  }
}

@media (min-width: 768px) {
  .category-item {
    display: flex;
    padding: 2vh 0;
  }
  .category-item .category-title {
    h2 {
      width: 180px;
    }
    display: flex;
    width: 180px;
  }
  .category-item .border {
    border-right: 0.5px solid black;
    height: 15vh;
    width: 1px;
    padding-left: 2vw;
  }
}
</style>
