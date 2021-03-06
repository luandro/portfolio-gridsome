const config = require('./content/data/config.json')
const infoData = require('./content/data/info.json')

module.exports = {
  siteName: config.title,
  //need this for forestry preview docker image
  host: process.env.HOSTNAME,
  port: 8080,
  //----------------
  //make editable config & data files available to graphql
  metaData: {
    siteName: config.title,
    siteDescription: config.description,
    infoData: infoData,
    projectsTitle: config.projects_title
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Portfolio',
        baseDir: './content/',
        path: 'projects/**/*.md',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Timeline',
        baseDir: './content/',
        path: 'timeline/**/*.md',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
        }
      }
    }
  ]
}
