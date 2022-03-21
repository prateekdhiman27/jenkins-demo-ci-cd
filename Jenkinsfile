@Library('piper-lib-os') _
pipeline{
  agent any
  stages{
    stage('prepare'){
      checkout scm
      setupCommonPipelineEnvironment script:this
    }
    stage('build'){
      mtaBuild script:this
    }
    stage('deploy'){
      cloudFoundryDeploy script:this
    }
  }
}


/*node() {

  stage('prepare') {
    checkout scm
    setupCommonPipelineEnvironment script:this
  }

  stage('buildMta') {
    mtaBuild script: this
  }
  
  stage('deployCF') {
    cloudFoundryDeploy script: this
  }
  
}*/
