@Library('piper-lib-os') _

node() {

  stage('prepare') {
    checkout scm
    setupCommonPipelineEnvironment script:this
  }

  stage('buildMta') {
    mtaBuild script: this
    mtaBuildTool: 'cloudMbt'
  }
  
  stage('deployCF') {
    cloudFoundryDeploy script: this
  }

}
//pipeline{
//  agent any
//  stages{
//    stage('prepare'){
//      checkout scm
//      setupCommonPipelineEnvironment script:this
//    }
//    stage('build'){
//      mtaBuild script:this
//    }
//    stage('deploy'){
//      cloudFoundryDeploy script:this
//    }
//  }
//}
