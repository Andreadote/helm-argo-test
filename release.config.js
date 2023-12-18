
module.exports = {
branches: "main",
repositoryUrl: "git@github.com:Andreadote/helm-argo-test.git",
plugins: [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  '@semantic-release/git',
  '@semantic-release/github']
 }