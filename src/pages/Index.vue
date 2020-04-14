<template>
  <Layout page="home">
    <Timeline :timeline="$page.timeline.edges" />
    <ProjectList :projects="$page.projects.edges" :metaData="$page.metaData" />
  </Layout>
</template>

<script>
import ProjectList from '~/components/ProjectList.vue'
import Timeline from '~/components/Timeline.vue'

export default {
  metaInfo: {
    title: 'Edu Yatri Ioschpe'
  },
  components: {
    ProjectList,
    Timeline
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
        projects: allPortfolio(
          sortBy: "year",
          order: ASC
        ) {
            edges {
                node {
                    id
                    title
                    path
                    link
                    month
                    year
                    hero_image (width:1000, quality: 75)
                    content
                    credits
                }
            }
        }
        metaData {
          projectsTitle
        }
    }
</page-query>
