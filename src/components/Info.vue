<template>
  <section class="info__blurb">
    <div v-html="data.description"></div>
    <div v-html="data.cta"></div>
    <ul>
      <li>
        <p>Data de nascimento: {{data.birthday}}</p>
      </li>
      <li>
        <p>
          <a :href="`mailto:${data.contact.email}`">Email: {{ data.contact.email}}</a>
        </p>
      </li>

      <li>
        <p>
          <a :href="data.contact.site">Site: {{ data.contact.site }}</a>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
    export default {
      computed: {
          data: function() {
              return this.$static.metaData.infoData
          }
      }
    }
</script>

<static-query>
    query getInfoPageData {
        metaData {
            infoData {
                description
                cta
                birthday
                contact {
                    email
                    site
                }
            }
        }
    }
</static-query>

<style lang="scss">
.info__blurb {
  max-width: 800px;
  padding: 1.5rem 1.25rem;
  p {
    font-size: 1.4rem;
  }
  ul p {
    font-size: 1rem;
  }
}

@media (min-width: 768px) {
  .info__blurb {
    padding: 2rem;
  }
}

@media (min-width: 1440px) {
  .info__blurb {
    padding: 3rem;
  }
}
</style>
