<template>
  <section>
    <h2 class="projects-title">{{ metaData.projectsTitle }}</h2>
    <ul class="list">
      <div v-for="project in projects" :key="project.node.title" class="project">
        <li>
          <div>
            <a :href="project.node.link" target="_blank">
              <div class="hero_image">
                <g-image
                  :src="project.node.hero_image"
                  :alt="project.node.title"
                  width="300"
                  height="350"
                  quality="75"
                ></g-image>
              </div>
            </a>
            <div class="credits-list">
              <div class="credits" v-for="credit in project.node.credits.split(',')" :key="credit">
                <p>{{ credit }}</p>
              </div>
            </div>
          </div>
          <div class="blogList__info">
            <a :href="project.node.link" target="_blank">
              <h2>{{ project.node.title }}</h2>
            </a>
            <h3>{{ new Date(project.node.date).getFullYear() }}</h3>
            <p v-html="project.node.content"></p>
          </div>
        </li>
      </div>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true
    },
    metaData: {
      type: Object,
      required: true
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
}
.list {
  .project:hover {
    opacity: 1;
    li {
      div.hero_image {
        img {
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
      }
    }
  }
  .credits-list {
    padding-top: 2vh;
  }
  .credits {
    width: 100%;
    text-align: center;
  }
  .hero_image {
    width: 100%;
    height: 40vh;
    overflow: hidden;
    background-color: #000;
    img {
      object-fit: cover;
      object-position: 50% 50%;
      opacity: 1;
      transition: opacity 0.3s ease;
      min-height: 100%;
    }
  }
  .blogList__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 1.25rem;
    border-bottom: 1px solid #ebebeb;
    h2,
    h3,
    p {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
      -webkit-transition: transform 0.5 ease-out;
      transition: transform 0.5s ease-out;
    }
  }

  li {
    opacity: inherit;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 38vh;
    margin-bottom: 0;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  p {
    max-width: 900px;
    color: #464646;
  }
}

@media (min-width: 768px) {
  .category-item {
    display: flex;
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
    height: 25vh;
    width: 1px;
    padding-left: 2vw;
  }
  .projects-title {
    width: 100%;
    font-size: 2em;
    margin: 0 auto;
    text-align: center;
    border-top: #464646 1px solid;
    border-bottom: #464646 1px solid;
    padding: 4vh 0;
  }
  .list {
    .project:hover {
      opacity: 1;
      li {
        div.hero_image {
          img {
            opacity: 0.8;
            -webkit-transition: opacity 0.3 ease;
            transition: opacity 0.3s ease;
          }
        }
        div.blogList__info {
          h2,
          h3,
          p {
            -webkit-transform: translateX(10px);
            transform: translateX(10px);
            -webkit-transition: transform 0.5s ease-out;
            transition: transform 0.5s ease-out;
          }
        }
      }
    }
    li {
      min-height: 250px;
      // height: 33.333vh;
      flex-direction: row;
    }
    .credits {
      text-align: left;
      // padding-left: 2vw;
      // padding-top: 2vh;
    }
    .credits p {
      font-size: 1em;
    }
    .hero_image {
      // height: 100%;
      height: 40vh;
      img {
        min-width: 100%;
        height: 100%;
        // width: auto;
        min-height: 0;
      }
    }
    .blogList__info {
      min-width: 70%;
    }
  }
}

@media (min-width: 1280px) {
  .list {
    .blogList__info {
      padding: 3rem;
    }
    h3 {
      margin-bottom: 1.2rem;
    }
  }
}
</style>
