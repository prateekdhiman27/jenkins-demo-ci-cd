@Library('piper-lib-os') _
@Library('piper-lib-os') _

node() {

  stage('prepare') {
    checkout scm
    setupCommonPipelineEnvironment script:this
  }

  stage('buildMta_') {
    mtaBuild script: this
  }
  
  stage('deployXSA') {
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
