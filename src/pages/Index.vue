<template>
  <Layout page="home">
    <ProjectList :projects="$page.projects.edges" :timeline="$page.timeline.edges" />
  </Layout>
</template>

<script>
import ProjectList from '~/components/ProjectList.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    ProjectList
  }
}
</script>
<page-query>
    query getData {   
        timeline: allTimeline {
          edges {
            node {
              title
              category
              to
              from
              content
              link
            }
          }
        }
        projects: allPortfolio {
            edges {
                node {
                    id
                    title
                    path
                    link
                    date
                    hero_image (width:1000, quality: 75)
                    content
                    credits
                }
            }
        }
    }
</page-query>
