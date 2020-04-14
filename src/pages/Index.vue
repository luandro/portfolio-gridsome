<template>
  <Layout page="home">
    <ProjectList :posts="$page.posts.edges" />
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
    query getPortfolioData {
        posts: allPortfolio {
            edges {
                node {
                    id
                    title
                    path
                    author
                    date  (format: "MMMM DD YYYY")
                    hero_image (width:1000, quality: 75)
                    content
                }
            }
        }
    }
</page-query>
